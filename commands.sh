## Commands to deploy the project to AWS S3
aws s3 sync /Users/aylin.reyes/WebstormProjects/Astro-portfolio/bustling-binary/dist s3://portfolio-13-06-2024

## Commands to deploy the project to AWS CloudFront
aws cloudfront create-invalidation --distribution-id E1QZQZQZQZQZQZ --paths "/*"

## Commands to deploy the project to AWS S3 with a bucket policy
aws s3api put-bucket-policy --bucket my-bucket-name --policy file://policy.json