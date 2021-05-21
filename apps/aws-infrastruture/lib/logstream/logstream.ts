import { LogStream, LogStreamProps } from '@aws-cdk/aws-logs';
import { Construct } from '@aws-cdk/core';

export class GeoCacheLogStream extends LogStream {
  constructor(scope: Construct) {
    const id: string = '',
      props: LogStreamProps = null;
    super(scope, id, props);
  }
}
