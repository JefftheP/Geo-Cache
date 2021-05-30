import {
  NetworkLoadBalancer,
  NetworkLoadBalancerProps,
} from '@aws-cdk/aws-elasticloadbalancingv2';
import { Construct } from '@aws-cdk/core';

export class GeoCacheLoadBalancer extends NetworkLoadBalancer {
  constructor(
    scope: Construct,
    id: string = '',
    props: NetworkLoadBalancerProps = {
      vpc: null,
      vpcSubnets: null
    }
  ) {
    super(scope, id, props);
  }
}
