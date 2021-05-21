import { Cluster, ClusterProps } from '@aws-cdk/aws-ecs';
import { Construct } from '@aws-cdk/core';

export class GeoCacheUploadCluster extends Cluster {
  constructor(scope: Construct) {
    const id: string = '';
    const props: ClusterProps = null;
    super(scope, id, props);
  }
}
