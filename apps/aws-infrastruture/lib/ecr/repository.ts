import { Repository, RepositoryProps } from '@aws-cdk/aws-ecr';
import { Construct } from '@aws-cdk/core';

export class GeoCacheRepository extends Repository {
  constructor(scope: Construct) {
    const id: string = '';
    const props: RepositoryProps = null;
    super(scope, id, props);
  }
}
