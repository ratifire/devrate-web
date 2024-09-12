terraform {
  backend "s3" {
    bucket  = "devrate-bucket-front-1"
    encrypt = true
    key     = "AWS/build-test-frontend-deploy-tstates/terraform.tfstate"
    region  = "eu-north-1"
  }
}

provider "aws" {}

resource "aws_default_vpc" "default_backend_vpc" {}

resource "aws_s3_bucket" "logs_prod" {
  bucket = "logs-prod"
  tags = {
    Environment = "prod"
  }
}

resource "aws_s3_bucket_policy" "logs_prod_policy" {
  bucket = aws_s3_bucket.logs_prod.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::582318560864:root"
      },
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::logs-prod/alb/alb-prod/AWSLogs/<account-id>/*"
    }
  ]
}
POLICY
}


