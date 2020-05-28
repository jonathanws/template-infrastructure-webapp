# Vue Template

A barebones frontend UI built with Vue.js. Use this as a starting point when writing your webapp.

## Deploy

**Create a stack in CloudFormation**

In the [Cloudformation Console][cloudformation], create a stack with the `cloudformation/deploy-to-cloudfront.yml` template

**Build your code**

```bash
$ npm run build
```

**Upload your files to the bucket you created**

```bash
$ aws s3 cp --recursive dist/ s3://<BUCKET-NAME>
```

You may need to create a profile for the AWS cli in `~/.aws/credentials, and run a command like this instead

```bash
$ aws s3 cp --recursive dist/ s3://<BUCKET-NAME> --profile <AWS-PROFILE>
```

Once your CloudFront distibution has finished allocating (can take up to 15 minutes), click the **Outputs** tab when looking at your stack, and click the CloudFront URL to see your UI

## How do I set up CI/CD?

In the [Cloudformation Console][cloudformation], create another stack with the `cloudformation/deploy-ci-cd.yml` template

The next time code is merged into the `master` branch, you can check [CodePipeline][codebuild] to see your build in progress

[cloudformation]: https://aws.amazon.com/cloudformation/
[codebuild]: https://console.aws.amazon.com/codesuite/codebuild/projects
