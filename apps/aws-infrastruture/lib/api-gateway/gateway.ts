import { HttpApi, HttpApiProps } from '@aws-cdk/aws-apigatewayv2';
import { Construct } from '@aws-cdk/core';

const API_Name = 'GeoCacheGateway';
export class GeoCacheGateway extends HttpApi {
  constructor(scope: Construct) {
    const id: string = API_Name;
    const props: HttpApiProps = {
      apiName: API_Name,
    };
    super(scope, id, props);
  }
}
