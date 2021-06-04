import { Role, RoleProps, ServicePrincipal } from '@aws-cdk/aws-iam';
import { Construct } from '@aws-cdk/core';

export class GeoCacheDeletionLambdaRole extends Role {
  constructor(
    scope: Construct,
    id: string = '',
    props: RoleProps = {
      assumedBy: null,
      managedPolicies: [],
    }
  ) {
    super(scope, id, props);
  }
}
