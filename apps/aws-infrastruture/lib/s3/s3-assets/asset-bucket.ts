import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
  BucketProps,
} from '@aws-cdk/aws-s3';
import { Construct } from '@aws-cdk/core';

const BucketName = 'GeoCacheAssetBucket';
export class GeoCacheAssetBucket extends Bucket {
  constructor(
    scope: Construct,
    id: string = BucketName,
    props: BucketProps = {
      bucketName: BucketName,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
    }
  ) {
    super(scope, id, props);
  }
}
