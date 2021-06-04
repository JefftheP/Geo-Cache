import { Cluster, ClusterProps } from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';
import { VPCStack } from 'apps/aws-infrastruture/types';

const ClusterName = 'GeoCacheCluster';
export class GeoCacheCluster extends Cluster {
  constructor(
    scope: Construct,
    vpcStack: VPCStack = scope as VPCStack,
    id: string = ClusterName,
    props: ClusterProps = {
      clusterName: ClusterName,
      enableFargateCapacityProviders: true,
      containerInsights: true,
      vpc: vpcStack.vpc,
    }
  ) {
    super(scope, id, props);
  }
}
