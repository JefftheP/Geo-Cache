import { Dashboard, DashboardProps } from '@aws-cdk/aws-cloudwatch';
import { Construct } from '@aws-cdk/core';

export class GeoCacheCloudWatchDashboard extends Dashboard {
  constructor(scope: Construct) {
    const id: string = 'GeoCacheCloudWatchDashboard';
    const props: DashboardProps = {};
    super(scope, id, props);
  }
}
