import {
  NetworkLoadBalancer,
  NetworkLoadBalancerProps,
} from '@aws-cdk/aws-elasticloadbalancingv2';
import { Construct } from '@aws-cdk/core';
import { GeoCacheUserServiceSubnet } from 'apps/aws-infrastruture/constants';
import { VPCStack } from 'apps/aws-infrastruture/types';

const LoadBalancerName = 'GeoCacheUserLoadBalancer';
export class GeoCacheUserLoadBalancer extends NetworkLoadBalancer {
  constructor(
    scope: Construct,
    id: string = LoadBalancerName,
    vpcStack: VPCStack = scope as VPCStack,
    props: NetworkLoadBalancerProps = {
      loadBalancerName: LoadBalancerName,
      vpc: vpcStack.vpc,
      vpcSubnets: GeoCacheUserServiceSubnet,
    }
  ) {
    super(scope, id, props);
  }
}
