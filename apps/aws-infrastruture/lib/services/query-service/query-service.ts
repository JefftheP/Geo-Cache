import { FargateService, FargateServiceProps, TaskDefinition } from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { ClusterStack } from '../../../types';

const ServiceName = 'GeoCacheQueryService';
export class GeoCacheQueryService extends FargateService {
  constructor(
    scope: Construct,
    clusterStack: ClusterStack = scope as ClusterStack,
    id: string = ServiceName,
    props: FargateServiceProps = {
      serviceName: ServiceName,
      taskDefinition: null,
      cluster: clusterStack.ecsCluster,
    }
  ) {
    super(scope, id, props);
  }
}
