import { Dashboard, DashboardProps } from '@aws-cdk/aws-cloudwatch';
import { Construct } from '@aws-cdk/core';

const DashboardName = 'GeoCacheCloudWatchDashboard';
export class GeoCacheCloudWatchDashboard extends Dashboard {
  constructor(
    scope: Construct,
    id: string = DashboardName,
    props: DashboardProps = {}
  ) {
    super(scope, id, props);
  }
}
