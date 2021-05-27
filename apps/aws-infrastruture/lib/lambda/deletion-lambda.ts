import {
  DockerImageCode,
  DockerImageFunction,
  DockerImageFunctionProps,
} from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';
import { ECRStack } from '../../types';

export class GeoCacheDeletionLambda extends DockerImageFunction {
  constructor(
    scope: Construct,
    ecrStack: ECRStack = scope as ECRStack,
    id: string = 'GeoCacheDeletionLambda',
    props: DockerImageFunctionProps = {
      code: DockerImageCode.fromEcr(ecrStack.deletionLambdaRepo, {}),
      // TODO: Is it possible to send lambda function logs to our own log group?
    }
  ) {
    super(scope, id, props);
  }
}
