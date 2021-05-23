import { Construct, StackProps } from '@aws-cdk/core';
import { ECRStack } from '../../types';
import {
  GeoCacheDeletionLambdaRepository,
  GeoCacheQueryServiceRepository,
  GeoCacheUploadServiceRepository,
  GeoCacheUserServiceRepository,
} from '../ecr';

const StackName = 'GeoCacheUserRepoStack';
export class GeoCacheContainerRepoStack extends ECRStack {
  constructor(
    scope?: Construct,
    id: string = StackName,
    props: StackProps = {
      stackName: StackName,
    }
  ) {
    super(scope, id, props);
    this.userServiceRepo = new GeoCacheUserServiceRepository(this);
    this.queryServiceRepo = new GeoCacheQueryServiceRepository(this);
    this.uploadServiceRepo = new GeoCacheUploadServiceRepository(this);
    this.deletionLambdaRepo = new GeoCacheDeletionLambdaRepository(this);
  }
}
