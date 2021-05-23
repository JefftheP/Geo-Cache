import { Bucket } from '@aws-cdk/aws-s3';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import {
  GeoCacheAssetBucket,
  GeoCacheCodeDeployAssetBucket,
  GeoCacheDeepStoreBucket,
} from '../s3';

const StackName = 'GeoCacheS3Stack';
export class GeoCacheS3Stack extends Stack {
  deepStoreBucket: Bucket;
  assetBucket: Bucket;
  codeDeployBucket: Bucket;
  
  constructor(
    scope?: Construct,
    id: string = StackName,
    props: StackProps = { stackName: StackName }
  ) {
    super(scope, id, props);
    this.deepStoreBucket = new GeoCacheDeepStoreBucket(this);
    this.assetBucket = new GeoCacheAssetBucket(this);
    this.codeDeployBucket = new GeoCacheCodeDeployAssetBucket(this);
  }
}
