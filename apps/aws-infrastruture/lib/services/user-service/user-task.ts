import {
  ContainerImage,
  FargateTaskDefinition,
  FargateTaskDefinitionProps,
  LogDrivers,
} from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { ECRStack, LogStack } from '../../../types';

const TaskName = 'GeoCacheUserTask';
export class GeoCacheUserTask extends FargateTaskDefinition {
  constructor(
    scope: Construct,
    repoStack: ECRStack = scope as ECRStack,
    logStack: LogStack = scope as LogStack,
    id: string = TaskName,
    props: FargateTaskDefinitionProps = {}
  ) {
    super(scope, id, props);
    const containerName = 'GeoCacheUserContainer';
    this.addContainer(containerName, {
      containerName,
      image: ContainerImage.fromEcrRepository(repoStack.userServiceRepo),
      logging: LogDrivers.awsLogs({
        streamPrefix: containerName,
        logGroup: logStack.logGroup,
      }),
    });
  }
}
