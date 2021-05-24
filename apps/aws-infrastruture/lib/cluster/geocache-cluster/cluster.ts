import { Cluster, ClusterProps } from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';

const ClusterName = 'GeoCacheCluster';
export class GeoCacheCluster extends Cluster {
  constructor(
    scope: Construct,
    id: string = ClusterName,
    props: ClusterProps = {
      clusterName: ClusterName,
      enableFargateCapacityProviders: true,
      containerInsights: true,
    }
  ) {
    super(scope, id, props);
  }
}
