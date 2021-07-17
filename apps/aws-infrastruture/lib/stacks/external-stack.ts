import { Distribution } from '@aws-cdk/aws-cloudfront';
import { PublicHostedZone } from '@aws-cdk/aws-route53';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { GeoCacheCloudfrontDistribution } from '../cloudfront';
import { GeoCacheExternalHostedZone } from '../route-53';

export class GeoCacheExternalStack extends Stack {
  hostedZone: PublicHostedZone;
  cloudfrontDistribution: Distribution;

  constructor(scope?: Construct, id?: string, props?: StackProps) {
    super(scope, id, props);
    this.hostedZone = new GeoCacheExternalHostedZone(this);
    this.cloudfrontDistribution = new GeoCacheCloudfrontDistribution(this);
  }
}
