import { AttributeType, Table, TableProps } from '@aws-cdk/aws-dynamodb';
import { Construct } from '@aws-cdk/core';

const TABLE_NAME = 'GeoCachUsers';
export class GeoCacheUserDynamoDB extends Table {
  constructor(
    scope: Construct,
    id: string = TABLE_NAME,
    props: TableProps = {
      tableName: TABLE_NAME,
      partitionKey: {
        name: 'userId',
        type: AttributeType.STRING,
      },
    }
  ) {
    super(scope, id, props);
  }
}
