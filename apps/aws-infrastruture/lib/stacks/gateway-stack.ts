import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { GeoCacheGateway } from '../api-gateway';
import { HttpApi } from '@aws-cdk/aws-apigatewayv2';

export class GeoCacheGatewayStack extends Stack {
  gateway: HttpApi;
  constructor(scope?: Construct, id?: string, props?: StackProps) {
    super(scope, id, props);
    this.gateway = new GeoCacheGateway(this);
  }
}
