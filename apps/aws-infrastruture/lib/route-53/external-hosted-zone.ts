import { PublicHostedZone, PublicHostedZoneProps } from '@aws-cdk/aws-route53';
import { Construct } from '@aws-cdk/core';

export class GeoCacheExternalHostedZone extends PublicHostedZone {
  constructor(scope: Construct) {
    const id: string = 'GeoCacheExternalHostedZone',
      props: PublicHostedZoneProps = {
        zoneName: null, // TODO need a domain name
      };
    super(scope, id, props);
  }
}
