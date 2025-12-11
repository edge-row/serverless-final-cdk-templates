#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FinalStackPart1 } from '../lib/final-stack-part-1';
import { FinalStackPart2 } from '../lib/final-stack-part-2'; // <-- NEW

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
}

new FinalStackPart1(app, 'FinalStackPart1', { env });
new FinalStackPart2(app, 'FinalStackPart2', { env });
