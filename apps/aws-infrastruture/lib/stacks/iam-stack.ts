import { Policy, Role } from '@aws-cdk/aws-iam';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import * as Policies from '../iam/policies';
import * as Roles from '../iam/roles';

export class GeoCacheIAMStack extends Stack {
  roles: Record<string, Role> = {};
  policies: Record<string, Policy> = {};

  constructor(scope?: Construct, id?: string, props?: StackProps) {
    super(scope, id, props);
    Object.keys(Policies).forEach((policyName) => {
      this.policies[policyName] = new Policies[policyName](this) as Policy;
    });

    Object.keys(Roles).forEach((roleName) => {
      this.roles[roleName] = new Roles[roleName](this) as Role;
    });
  }
}
