import { Repository, RepositoryProps } from '@aws-cdk/aws-ecr';
import { Construct } from '@aws-cdk/core';

const RepositoryName = 'GeoCacheUserServiceRepo';
export class GeoCacheUserServiceRepository extends Repository {
  constructor(
    scope: Construct,
    id: string = RepositoryName,
    props: RepositoryProps = {
      repositoryName: RepositoryName,
    }
  ) {
    super(scope, id, props);
  }
}
