#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CodepipelineAwsDocsGuideErrorStack } from '../lib/codepipeline-aws-docs-guide-error-stack';

const app = new cdk.App();
new CodepipelineAwsDocsGuideErrorStack(app, 'CodepipelineAwsDocsGuideErrorStack');
