import { Cluster } from '@aws-cdk/aws-ecs';
import { Stack } from '@aws-cdk/core';

export class ClusterStack extends Stack {
  ecsCluster: Cluster;
}
