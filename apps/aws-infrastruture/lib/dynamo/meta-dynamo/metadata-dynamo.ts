import { AttributeType, Table, TableProps } from '@aws-cdk/aws-dynamodb';
import { Construct } from '@aws-cdk/core';

const TABLE_NAME = 'GeoCacheFileMeta';
export class GeoCacheMetadataDynamo extends Table {
  constructor(
    scope: Construct,
    id: string = TABLE_NAME,
    props: TableProps = {
      tableName: TABLE_NAME,
      partitionKey: {
        name: 'postId',
        type: AttributeType.STRING,
      },
    }
  ) {
    super(scope, id, props);
  }
}
