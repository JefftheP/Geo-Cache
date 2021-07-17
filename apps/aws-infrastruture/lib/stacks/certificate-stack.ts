import { Certificate } from '@aws-cdk/aws-certificatemanager';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { GeoCacheCertificates } from '../certs';

export class GeoCacheCertificateStack extends Stack {
  cert: Certificate;
  constructor(scope?: Construct, id?: string, props?: StackProps) {
    super(scope, id, props);
    this.cert = new GeoCacheCertificates(this);
  }
}
