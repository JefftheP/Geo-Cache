import { HttpApi, HttpApiProps } from '@aws-cdk/aws-apigatewayv2';
import { Construct } from '@aws-cdk/core';

export class GeoCacheGateway extends HttpApi {
  constructor(scope: Construct) {
    const id: string = '';
    const props: HttpApiProps = null;
    super(scope, id, props);
  }
}
