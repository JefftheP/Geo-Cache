import {
  ContainerImage,
  FargateTaskDefinition,
  FargateTaskDefinitionProps,
} from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { ECRStack } from '../../../types';

const TaskName = 'GeoCacheQueryTask';
export class GeoCacheQueryTask extends FargateTaskDefinition {
  constructor(
    scope: Construct,
    repoStack: ECRStack = scope as ECRStack,
    id: string = TaskName,
    props: FargateTaskDefinitionProps = {}
  ) {
    super(scope, id, props);
    this.addContainer('GeoCacheQueryContainer', {
      containerName: 'GeoCacheQueryContainer',
      image: ContainerImage.fromEcrRepository(repoStack.queryServiceRepo),
    });
  }
}
