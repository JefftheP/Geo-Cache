import { Role, RoleProps } from '@aws-cdk/aws-iam';
import { Construct } from '@aws-cdk/core';

export class GeoCacheRole extends Role {
  constructor(scope: Construct) {
    const id: string = '',
      props: RoleProps = null;
    super(scope, id, props);
  }
}
