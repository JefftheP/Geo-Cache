import { Role, RoleProps, ServicePrincipal } from '@aws-cdk/aws-iam';
import { Construct } from '@aws-cdk/core';

export class GeoCacheQueryServiceRole extends Role {
  constructor(
    scope: Construct,
    id: string = '',
    props: RoleProps = {
      assumedBy: new ServicePrincipal('ecs-tasks.amazonaws.com'),
      managedPolicies: [],
    }
  ) {
    super(scope, id, props);
  }
}
