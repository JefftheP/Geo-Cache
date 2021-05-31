import { FargateService, FargateServiceProps } from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { GeoCacheQueryServiceSubnet } from 'apps/aws-infrastruture/constants';
import { ClusterStack, TaskStack } from '../../../types';

const ServiceName = 'GeoCacheQueryService';
export class GeoCacheQueryService extends FargateService {
  constructor(
    scope: Construct,
    clusterStack: ClusterStack = scope as ClusterStack,
    taskStack: TaskStack = scope as TaskStack,
    id: string = ServiceName,
    props: FargateServiceProps = {
      serviceName: ServiceName,
      taskDefinition: taskStack.queryTask,
      cluster: clusterStack.ecsCluster,
      vpcSubnets: GeoCacheQueryServiceSubnet,
    }
  ) {
    super(scope, id, props);
  }
}
