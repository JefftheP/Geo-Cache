import { Dashboard } from '@aws-cdk/aws-cloudwatch';
import { Construct, StackProps } from '@aws-cdk/core';
import { LogStack } from '../../types';
import { GeoCacheCloudWatchDashboard } from '../cloudwatch-dashboard';
import { GeoCacheLogGroup, GeoCacheLogStream } from '../logstream';

export class GeoCacheLogStack extends LogStack {
  dashboard: Dashboard;

  constructor(scope?: Construct, id?: string, props?: StackProps) {
    super(scope, id, props);
    this.logGroup = new GeoCacheLogGroup(this);
    this.logStream = new GeoCacheLogStream(this);
    this.dashboard = new GeoCacheCloudWatchDashboard(this);
  }
}
