import { FargateTaskDefinition } from '@aws-cdk/aws-ecs';
import { Stack } from '@aws-cdk/core';

export class TaskStack extends Stack {
  userTask: FargateTaskDefinition;
  queryTask: FargateTaskDefinition;
  uploadTask: FargateTaskDefinition;
}
