import { LogGroup, LogStream } from '@aws-cdk/aws-logs';
import { Stack } from '@aws-cdk/core';

export class LogStack extends Stack {
  logGroup: LogGroup;
  logStream: LogStream;
}
