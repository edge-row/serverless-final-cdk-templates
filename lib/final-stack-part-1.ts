import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as path from 'path';

export class FinalStackPart1 extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const messageLambda = new lambda.Function(this, 'MessageLambda', {
      runtime: lambda.Runtime.PYTHON_3_12,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambdas/part1')),
    });

    // 2. Define the API Gateway (HTTP API - simpler than REST API)
    const httpApi = new apigw.HttpApi(this, 'MessageApi', {
      apiName: 'Part1MessageApi',
      description: 'Simple API Gateway for Part 1 of the final project.',
    });

    // 3. Define the Integration (connecting the API to the Lambda)
    const lambdaIntegration = new integrations.HttpLambdaIntegration(
      'MessageLambdaIntegration',
      messageLambda
    );

    httpApi.addRoutes({
      path: '/{message}',
      methods: [apigw.HttpMethod.GET],
      integration: lambdaIntegration,
    });

    new cdk.CfnOutput(this, 'ApiUrlOutput', {
      value: httpApi.url! + 'hello',
      description: 'The URL endpoint to test the API.',
    });
  }
}
