import {
  ContainerImage,
  FargateTaskDefinition,
  FargateTaskDefinitionProps,
} from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { ECRStack } from '../../../types';

const TaskName = 'GeoCacheUploadTask';
export class GeoCacheUploadTask extends FargateTaskDefinition {
  constructor(
    scope: Construct,
    repoStack: ECRStack = scope as ECRStack,
    id: string = TaskName,
    props: FargateTaskDefinitionProps = {}
  ) {
    super(scope, id, props);
    this.addContainer('GeoCacheUploadContainer', {
      containerName: 'GeoCacheUploadContainer',
      image: ContainerImage.fromEcrRepository(repoStack.uploadServiceRepo),
    });
  }
}
