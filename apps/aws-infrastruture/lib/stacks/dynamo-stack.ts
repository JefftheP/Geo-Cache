import { Table } from '@aws-cdk/aws-dynamodb';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { GeoCacheMetadataDynamo, GeoCacheUserDynamoDB } from '../dynamo';

export class GeoCacheDynamoStack extends Stack {
  userTable: Table;
  postMetaDataTable: Table;

  constructor(scope?: Construct, id?: string, props?: StackProps) {
    super(scope, id, props);

    this.userTable = new GeoCacheUserDynamoDB(this);
    this.postMetaDataTable = new GeoCacheMetadataDynamo(this);
  }
}
