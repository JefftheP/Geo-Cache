import { Vpc, VpcProps } from '@aws-cdk/aws-ec2';
import { Construct } from '@aws-cdk/core';
import {
  GeoCacheDeletionLambdaSubnet,
  GeoCacheQueryServiceSubnet,
  GeoCacheUploadServiceSubnet,
  GeoCacheUserServiceSubnet,
} from 'apps/aws-infrastruture/constants';

const VPC_Name = 'GeoCacheCloud';
export class GeoCacheCloud extends Vpc {
  // readonly subnetMap: { [subnetName: string]: SubnetConfiguration } = {};
  constructor(
    scope: Construct,
    id: string = VPC_Name,
    props: VpcProps = {
      natGateways: 1,
      subnetConfiguration: [
        GeoCacheQueryServiceSubnet,
        GeoCacheUploadServiceSubnet,
        GeoCacheUserServiceSubnet,
        GeoCacheDeletionLambdaSubnet,
      ],
    }
  ) {
    super(scope, id, props);
  }
}
