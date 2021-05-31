import { FargateService, FargateServiceProps } from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { ClusterStack, TaskStack } from '../../../types';

const ServiceName = 'GeoCacheUploadService';
export class GeoCacheUploadService extends FargateService {
  constructor(
    scope: Construct,
    clusterStack: ClusterStack = scope as ClusterStack,
    taskStack: TaskStack = scope as TaskStack,
    id: string = ServiceName,
    props: FargateServiceProps = {
      serviceName: ServiceName,
      taskDefinition: taskStack.uploadTask,
      cluster: clusterStack.ecsCluster,
    }
  ) {
    super(scope, id, props);
  }
}
