import { Policy, PolicyProps } from '@aws-cdk/aws-iam';
import { Construct } from '@aws-cdk/core';

export class GeoCachePolicy extends Policy {
  constructor(scope: Construct) {
    const id: string = '',
      props: PolicyProps = null;
    super(scope, id, props);
  }
}
