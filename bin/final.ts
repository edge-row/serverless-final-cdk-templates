#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EdroFinalPart1 } from '../lib/final-stack-part-1';
import { EdroFinalPart2 } from '../lib/final-stack-part-2';

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
}

new EdroFinalPart1(app, 'EdroFinalPart1', { env });
new EdroFinalPart2(app, 'EdroFinalPart2', { env });
