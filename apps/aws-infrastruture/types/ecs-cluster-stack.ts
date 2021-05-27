import { Cluster } from '@aws-cdk/aws-ecs';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { ECRStack } from './ecr-stack';

export class ClusterStack extends Stack {
  ecsCluster: Cluster;

  constructor(
    scope?: Construct,
    id?: string,
    props?: StackProps,
    private ecrStack?: ECRStack
  ) {
    super(scope, id, props);
  }
}
