import { Distribution, DistributionProps } from '@aws-cdk/aws-cloudfront';
import { Construct } from '@aws-cdk/core';

export class GeoCacheCloudfrontDistribution extends Distribution {
  constructor(scope: Construct) {
    const id: string = '';
    const props: DistributionProps = null;
    super(scope, id, props);
  }
}
