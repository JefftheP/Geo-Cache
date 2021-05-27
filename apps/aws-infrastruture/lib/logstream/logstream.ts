import { LogStream, LogStreamProps } from '@aws-cdk/aws-logs';
import { Construct } from '@aws-cdk/core';

const LogStreamName = 'GeoCacheLogStream';
export class GeoCacheLogStream extends LogStream {
  constructor(
    scope: Construct,
    id: string = LogStreamName,
    props: LogStreamProps = {
      logGroup: null,
      logStreamName: LogStreamName,
    }
  ) {
    super(scope, id, props);
  }
}
