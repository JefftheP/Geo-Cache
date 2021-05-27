import { Repository } from '@aws-cdk/aws-ecr';
import { Stack } from '@aws-cdk/core';

export class ECRStack extends Stack {
  userServiceRepo: Repository;
  
  queryServiceRepo: Repository;
  uploadServiceRepo: Repository;
  deletionLambdaRepo: Repository;
}
