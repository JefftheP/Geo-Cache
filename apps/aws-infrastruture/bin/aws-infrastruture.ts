#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { AwsInfrastrutureStack } from '../lib/aws-infrastruture-stack';

const app = new App();
new AwsInfrastrutureStack(app, 'AwsInfrastrutureStack');
