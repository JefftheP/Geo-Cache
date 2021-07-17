import { Role, RoleProps, ServicePrincipal } from '@aws-cdk/aws-iam';
import { Construct } from '@aws-cdk/core';

export class GeoCacheUserServiceRole extends Role {
  constructor(
    scope: Construct,
    id: string = 'GeoCacheUserServiceRole',
    props: RoleProps = {
      assumedBy: new ServicePrincipal('ecs-tasks.amazonaws.com'),
      managedPolicies: [],
    }
  ) {
    super(scope, id, props);
  }
}
