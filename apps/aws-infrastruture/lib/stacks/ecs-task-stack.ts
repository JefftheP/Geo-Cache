import { FargateTaskDefinition } from '@aws-cdk/aws-ecs';
import { DockerImageFunction } from '@aws-cdk/aws-lambda';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { ECRStack, LogStack } from 'apps/aws-infrastruture/types';
import { GeoCacheDeletionLambda } from '../lambda/deletion-lambda';
import { GeoCacheQueryTask, GeoCacheUserTask } from '../services';
import { GeoCacheUploadTask } from '../services/upload-service';

export class GeoCacheECSTaskStack extends Stack {
  deletionLambda: DockerImageFunction;
  userTask: FargateTaskDefinition;
  queryTask: FargateTaskDefinition;
  uploadTask: FargateTaskDefinition;

  constructor(
    scope?: Construct,
    ecrStack: ECRStack = scope as ECRStack,
    logStack: LogStack = scope as LogStack,
    id?: string,
    props?: StackProps
  ) {
    super(scope, id, props);
    this.deletionLambda = new GeoCacheDeletionLambda(this, ecrStack);
    this.userTask = new GeoCacheUserTask(this, ecrStack, logStack);
    this.queryTask = new GeoCacheQueryTask(this, ecrStack, logStack);
    this.uploadTask = new GeoCacheUploadTask(this, ecrStack, logStack);
  }
}
