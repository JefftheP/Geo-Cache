import { FargateService } from '@aws-cdk/aws-ecs';
import { Construct, StackProps } from '@aws-cdk/core';
import { ClusterStack, ECRStack, TaskStack } from '../../types';
import { GeoCacheCluster } from '../cluster';
import { GeoCacheQueryService, GeoCacheUserService } from '../services';
import { GeoCacheUploadService } from '../services/upload-service';

export class GeoCacheECSContainerStack extends ClusterStack {
  queryService: FargateService;
  uploadService: FargateService;
  userService: FargateService;
  constructor(
    scope?: Construct,
    taskStack: TaskStack = scope as TaskStack,
    id?: string,
    props?: StackProps,
    ecrStack?: ECRStack
  ) {
    super(scope, id, props, ecrStack);
    this.ecsCluster = new GeoCacheCluster(this);
    this.queryService = new GeoCacheQueryService(this, this, taskStack);
    this.uploadService = new GeoCacheUploadService(this, this, taskStack);
    this.userService = new GeoCacheUserService(this, this, taskStack);
  }
}
