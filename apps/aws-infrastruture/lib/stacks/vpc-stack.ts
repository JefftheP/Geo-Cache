import { NetworkLoadBalancer } from '@aws-cdk/aws-elasticloadbalancingv2';
import { Construct, StackProps } from '@aws-cdk/core';
import { VPCStack } from 'apps/aws-infrastruture/types';
import {
  GeoCacheQueryLoadBalancer,
  GeoCacheUploadLoadBalancer,
  GeoCacheUserLoadBalancer,
} from '../load-balancers';
import { GeoCacheCloud } from '../vpc';

const StackName = 'GeoCacheVPCStack';
export class GeoCacheVPCStack extends VPCStack {
  userLoadBalancer: NetworkLoadBalancer;
  uploadLoadBalancer: NetworkLoadBalancer;
  queryLoadBalancer: NetworkLoadBalancer;

  constructor(
    scope?: Construct,
    id: string = StackName,
    props: StackProps = {
      stackName: StackName,
    }
  ) {
    super(scope, id, props);
    this.vpc = new GeoCacheCloud(this);
    this.userLoadBalancer = new GeoCacheUserLoadBalancer(this);
    this.uploadLoadBalancer = new GeoCacheUploadLoFFadBalancer(this);
    this.queryLoadBalancer = new GeoCacheQueryLoadBalancer(this);
  }
}
