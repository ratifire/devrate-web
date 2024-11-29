terraform {
  backend "s3" {}
}

provider "aws" {}

resource "aws_default_vpc" "default_backend_vpc" {}

resource "aws_s3_bucket_policy" "logs_prod_policy" {
  bucket = data.aws_s3_bucket.front-logs.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "logdelivery.elasticloadbalancing.amazonaws.com"
      },
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::${var.bucket_name_logs}-1209/AWSLogs/${data.aws_caller_identity.current_user.account_id}/*"
    }
  ]
}
POLICY
}


