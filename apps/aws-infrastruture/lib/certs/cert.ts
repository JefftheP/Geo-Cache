import { Certificate, CertificateProps } from '@aws-cdk/aws-certificatemanager';
import { Construct } from '@aws-cdk/core';

export class GeoCacheCertificates extends Certificate {
  constructor(
    scope: Construct,
    id: string = 'GeoCacheCertificates',
    props: CertificateProps = {
      domainName: null, // TODO Need domain name
    }
  ) {
    super(scope, id, props);
  }
}
