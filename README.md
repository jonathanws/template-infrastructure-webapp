# Vue Starter

An example frontend that uses modern frontend practices

## Setting up CI/CD

In Cloudformation, create your infrastructure with `deploy-to-cloudformation.yml`

Build the project with `npm run build`. This creates a `dist/` directory.

Once your stack has finished, upload the contents of the `dist/` directory to the bucket that is created. Do not upload the actual `dist/` folder itself.

Go back to your stack in Cloudformation, and click the **Outputs** tab. Click the link in there to see your webapp.
