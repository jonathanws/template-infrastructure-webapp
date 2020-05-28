# Vue Template

A bare-bones Vue project to get you started

### How do I set up the infrastructure of my UI?

#### Create a stack in CloudFormation

In the [Cloudformation Console](https://aws.amazon.com/cloudformation/), create a stack with the `cloudformation/deploy-to-cloudfront.yml` template

#### Build your code

```bash
$ npm run build
```

#### Upload your files to the bucket you created

```bash
$ aws s3 cp --recursive dist/ s3://<BUCKET-NAME>
```

You may need to create a profile for the AWS cli in `~/.aws/credentials, and run a command like this instead

```bash
$ aws s3 cp --recursive dist/ s3://<BUCKET-NAME> --profile <AWS-PROFILE>
```
A bare-bones project to get you started
