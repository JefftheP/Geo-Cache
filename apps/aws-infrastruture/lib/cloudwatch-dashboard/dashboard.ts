import { Dashboard, DashboardProps } from '@aws-cdk/aws-cloudwatch';
import { Construct } from '@aws-cdk/core';

export class GeoCacheCloudWatchDashboard extends Dashboard {
  constructor(scope: Construct) {
    const id: string = '';
    const props: DashboardProps = null;
    super(scope, id, props);
  }
}
