import { SubnetConfiguration, SubnetType } from '@aws-cdk/aws-ec2';

export const GeoCacheQueryServiceSubnet: SubnetConfiguration = {
    cidrMask: 28, // Max of 14 assignable IPs
    name: 'GeoCacheQueryServiceSubnet',
    subnetType: SubnetType.PRIVATE,
  },
  GeoCacheUploadServiceSubnet: SubnetConfiguration = {
    cidrMask: 28, // Max of 14 assignable IPs
    name: 'GeoCacheUploadServiceSubnet',
    subnetType: SubnetType.PRIVATE,
  },
  GeoCacheUserServiceSubnet: SubnetConfiguration = {
    cidrMask: 28, // Max of 14 assignable IPs
    name: 'GeoCacheUserServiceSubnet',
    subnetType: SubnetType.PRIVATE,
  },
  GeoCacheDeletionLambdaSubnet: SubnetConfiguration = {
    cidrMask: 28, // Max of 14 assignable IPs
    name: 'GeoCacheDeletionLambdaSubnet',
    subnetType: SubnetType.PRIVATE,
  };
