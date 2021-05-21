import { Table, TableProps } from '@aws-cdk/aws-dynamodb';
import { Construct } from '@aws-cdk/core';

export class GeoCacheUserDynamoDB extends Table {
  constructor(scope: Construct) {
    const id: string = '';
    const props: TableProps = null;
    super(scope, id, props);
  }
}
