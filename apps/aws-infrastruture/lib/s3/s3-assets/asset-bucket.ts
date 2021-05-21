import { Bucket, BucketProps } from '@aws-cdk/aws-s3';
import { Construct } from '@aws-cdk/core';

export class GeoCacheAssetBucket extends Bucket {
  constructor(scope: Construct) {
    const id: string = '',
      props: BucketProps = null;
    super(scope, id, props);
  }
}
