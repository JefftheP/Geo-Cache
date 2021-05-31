import {
  NetworkLoadBalancer,
  NetworkLoadBalancerProps,
} from '@aws-cdk/aws-elasticloadbalancingv2';
import { Construct } from '@aws-cdk/core';
import { GeoCacheUploadServiceSubnet } from 'apps/aws-infrastruture/constants';
import { VPCStack } from 'apps/aws-infrastruture/types';

const LoadBalancerName = 'GeoCacheUploadLoadBalancer';
export class GeoCacheUploadLoadBalancer extends NetworkLoadBalancer {
  constructor(
    scope: Construct,
    id: string = LoadBalancerName,
    vpcStack: VPCStack = scope as VPCStack,
    props: NetworkLoadBalancerProps = {
      loadBalancerName: LoadBalancerName,
      vpc: vpcStack.vpc,
      vpcSubnets: GeoCacheUploadServiceSubnet,
    }
  ) {
    super(scope, id, props);
  }
}
