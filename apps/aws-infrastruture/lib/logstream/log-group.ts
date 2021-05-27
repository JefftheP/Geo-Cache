import { LogGroup, LogGroupProps } from '@aws-cdk/aws-logs';
import { Construct } from '@aws-cdk/core';

const LogGroupName = 'GeoCacheLogGroup';
export class GeoCacheLogGroup extends LogGroup {
  constructor(
    scope: Construct,
    id: string = LogGroupName,
    props: LogGroupProps = {
      logGroupName: LogGroupName,
    }
  ) {
    super(scope, id, props);
  }
}
