import {
  ContainerImage,
  FargateTaskDefinition,
  FargateTaskDefinitionProps,
  LogDrivers,
} from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { ECRStack, LogStack } from '../../../types';

const TaskName = 'GeoCacheUploadTask';
export class GeoCacheUploadTask extends FargateTaskDefinition {
  constructor(
    scope: Construct,
    repoStack: ECRStack = scope as ECRStack,
    logStack: LogStack = scope as LogStack,
    id: string = TaskName,
    props: FargateTaskDefinitionProps = {}
  ) {
    super(scope, id, props);
    const containerName = 'GeoCacheUploadContainer';
    this.addContainer(containerName, {
      containerName,
      image: ContainerImage.fromEcrRepository(repoStack.uploadServiceRepo),
      logging: LogDrivers.awsLogs({
        streamPrefix: containerName,
        logGroup: logStack.logGroup,
      }),
    });
  }
}
