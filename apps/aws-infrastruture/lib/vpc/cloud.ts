import { SubnetType, Vpc, VpcProps } from '@aws-cdk/aws-ec2';
import { Construct } from '@aws-cdk/core';

const VPC_Name = 'GeoCacheCloud';
export class GeoCacheCloud extends Vpc {
  constructor(
    scope: Construct,
    id: string = VPC_Name,
    props: VpcProps = {
      natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: 28, // Max of 14 assignable IPs
          name: 'GeoCacheQueryServiceSubnet',
          subnetType: SubnetType.PRIVATE,
        },
        {
          cidrMask: 28, // Max of 14 assignable IPs
          name: 'GeoCacheUploadServiceSubnet',
          subnetType: SubnetType.PRIVATE,
        },
        {
          cidrMask: 28, // Max of 14 assignable IPs
          name: 'GeoCacheUserServiceSubnet',
          subnetType: SubnetType.PRIVATE,
        },
        {
          cidrMask: 28, // Max of 14 assignable IPs
          name: 'GeoCacheDeletionLambdaSubnet',
          subnetType: SubnetType.PRIVATE,
        },
      ],
    }
  ) {
    super(scope, id, props);
  }
}
