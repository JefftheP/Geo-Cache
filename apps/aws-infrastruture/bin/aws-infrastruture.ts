#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsInfrastrutureStack } from '../lib/aws-infrastruture-stack';

const app = new cdk.App();
new AwsInfrastrutureStack(app, 'AwsInfrastrutureStack');
