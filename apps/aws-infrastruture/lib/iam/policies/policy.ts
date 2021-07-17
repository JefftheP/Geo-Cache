import { Policy, PolicyProps } from '@aws-cdk/aws-iam';
import { Construct } from '@aws-cdk/core';

export class GeoCachePolicy extends Policy {
  constructor(scope: Construct, id: string = 'GeoCachePolicy', props: PolicyProps = {}) {
    super(scope, id, props);
  }
}
