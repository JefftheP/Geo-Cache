import { PublicHostedZone, PublicHostedZoneProps } from '@aws-cdk/aws-route53';
import { Construct } from '@aws-cdk/core';

export class GeoCacheDNS extends PublicHostedZone {
  constructor(scope: Construct) {
    const id: string = '',
      props: PublicHostedZoneProps = null;
    super(scope, id, props);
  }
}
