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


resource "aws_s3_bucket" "lb-logs" {
  bucket = "logs-front-1209"}

resource "aws_s3_bucket_acl" "lb-logs-acl" {
  bucket = aws_s3_bucket.lb-logs.id
  acl    = "private"
}

data "aws_iam_policy_document" "allow-lb" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["logdelivery.elb.amazonaws.com"]
    }

    actions = [
      "s3:PutObject"
    ]

    resources = [
      "${aws_s3_bucket.lb-logs.arn}/*"
    ]

    condition {
      test     = "StringEquals"
      variable = "s3:x-amz-acl"

      values = [
        "bucket-owner-full-control"
      ]
    }
  }
}

resource "aws_s3_bucket_policy" "allow-lb" {
  bucket = aws_s3_bucket.lb-logs.id
  policy = data.aws_iam_policy_document.allow-lb.json
}

