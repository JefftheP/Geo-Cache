import { DockerImageFunction } from '@aws-cdk/aws-lambda';
import { Construct, StackProps } from '@aws-cdk/core';
import { ECRStack, LogStack, TaskStack } from 'apps/aws-infrastruture/types';
import { GeoCacheDeletionLambda } from '../lambda/deletion-lambda';
import { GeoCacheQueryTask, GeoCacheUserTask } from '../services';
import { GeoCacheUploadTask } from '../services/upload-service';

export class GeoCacheECSTaskStack extends TaskStack {
  deletionLambda: DockerImageFunction;

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
