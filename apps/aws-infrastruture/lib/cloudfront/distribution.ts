import { Distribution, DistributionProps } from '@aws-cdk/aws-cloudfront';
import { Construct } from '@aws-cdk/core';

const DistributionName = 'GeoCacheCloudfrontDistribution';
export class GeoCacheCloudfrontDistribution extends Distribution {
  constructor(
    scope: Construct,
    id: string = DistributionName,
    props: DistributionProps = {
      defaultBehavior: {
        origin: null,
      },
    }
  ) {
    super(scope, id, props);
  }
}
