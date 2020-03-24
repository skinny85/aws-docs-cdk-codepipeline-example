import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import CodepipelineAwsDocsGuideError = require('../lib/codepipeline-aws-docs-guide-error-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CodepipelineAwsDocsGuideError.CodepipelineAwsDocsGuideErrorStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
