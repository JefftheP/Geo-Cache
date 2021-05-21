import { Vpc, VpcProps } from '@aws-cdk/aws-ec2';
import { Construct } from '@aws-cdk/core';

export class GeoCacheCloud extends Vpc {
  constructor(scope: Construct) {
    const id: string = '',
      props: VpcProps = null;
    super(scope, id, props);
  }
}
