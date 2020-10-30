# Template Infrastructure Webapp

A barebones frontend UI built with Vue.js. Use this as a starting point when writing your webapp.

## Deploy

> This guide assumes that you are somewhat familiar with AWS, and it's console.

- Create a stack in [Cloudformation][cloudformation], with the `cloudformation/deploy-to-cloudfront.yml` template. You will have to supply a name for a new bucket. Pick a meaningful name, unique to you.

- Build your webapp's source code (most likely `npm run build`)

- Upload your files to the bucket created by the cloudformation script. You can either do this in the browser with the upload dialog, or if you have the [AWS CLI](https://aws.amazon.com/cli/) installed you can run this command

```bash
# After adding a profile in ~/.aws/credentials...
# https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

aws s3 cp --recursive dist/ s3://<BUCKET-NAME> --profile <AWS-PROFILE>
```

Once your CloudFront distibution has finished allocating (can take up to 15 minutes), click the **Outputs** tab when looking at your stack, and click the CloudFront URL to see your deployed webapp

## How do I set up CI/CD?

- Create another stack in [Cloudformation][cloudformation], this time with the `cloudformation/deploy-ci-cd.yml` template.

- Merge code into the master branch

The next time code is merged into the `master` branch, you can check [CodePipeline][codebuild] to see your build in progress. Note: You might need to [invalidate the CloudFront cache](#invalidating-cloudfront-cache) to see your changes.

### Invalidating CloudFront cache

- Go to the [CloudFront console][cloudfront], and select your distibution

- Click the **Invalidations** tab

- Enter `/*`, and click **Invalidate**

[cloudformation]: https://aws.amazon.com/cloudformation/
[cloudfront]: https://console.aws.amazon.com/cloudfront/home
[codebuild]: https://console.aws.amazon.com/codesuite/codebuild/projects
