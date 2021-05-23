import { Bucket } from '@aws-cdk/aws-s3';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import {
  GeoCacheAssetBucket,
  GeoCacheCodeDeployAssetBucket,
  GeoCacheDeepStoreBucket,
} from '../s3';

export class GeoCacheS3Stack extends Stack {
  deepStoreBucket: Bucket;
  assetBucket: Bucket;
  codeDeployBucket: Bucket;
  constructor(scope?: Construct, id?: string, props?: StackProps) {
    super(scope, id, props);
    this.deepStoreBucket = new GeoCacheDeepStoreBucket(this);
    this.assetBucket = new GeoCacheAssetBucket(this);
    this.codeDeployBucket = new GeoCacheCodeDeployAssetBucket(this);
  }
}
