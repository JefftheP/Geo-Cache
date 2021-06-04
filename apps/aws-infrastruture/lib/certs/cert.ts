import { Certificate, CertificateProps } from '@aws-cdk/aws-certificatemanager';
import { Construct } from '@aws-cdk/core';

export class GeoCacheCertificates extends Certificate {
  constructor(
    scope: Construct,
    id: string = '',
    props: CertificateProps = {
      domainName: null,
    }
  ) {
    super(scope, id, props);
  }
}
