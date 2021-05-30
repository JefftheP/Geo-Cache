import { Vpc } from '@aws-cdk/aws-ec2';
import { Stack } from '@aws-cdk/core';

export class VPCStack extends Stack {
  vpc: Vpc;
}
