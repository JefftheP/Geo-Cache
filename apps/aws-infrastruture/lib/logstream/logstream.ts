import { LogStream, LogStreamProps } from '@aws-cdk/aws-logs';
import { Construct } from '@aws-cdk/core';
import { LogStack } from 'apps/aws-infrastruture/types';

const LogStreamName = 'GeoCacheLogStream';
export class GeoCacheLogStream extends LogStream {
  constructor(
    scope: Construct,
    logStack: LogStack = scope as LogStack,
    id: string = LogStreamName,
    props: LogStreamProps = {
      logGroup: logStack.logGroup,
      logStreamName: LogStreamName,
    }
  ) {
    super(scope, id, props);
  }
}
