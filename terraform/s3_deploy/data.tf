terraform {
  backend "s3" {
    bucket  = "s3-front-deploying"
    encrypt = true
    key     = "AWS/s3-front-deploy-tstates/terraform.tfstate"
    region  = "eu-north-1"
  }
}

provider "aws" {
  region = "eu-north-1"
}

data "aws_s3_bucket" "s3_front_site" {
  bucket = "devrate.org"
}

resource "aws_s3_bucket_public_access_block" "s3_front_site_pb" {
  bucket = data.aws_s3_bucket.s3_front_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "s3_front_policy" {
  bucket = data.aws_s3_bucket.s3_front_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject*"
        Resource  = "arn:aws:s3:::devrate.org/*"
      }
    ]
  })
}

data "aws_route53_zone" "s3_front_dns_zone" {
  name = "devrate.org"
}

data "aws_acm_certificate" "s3_front_cert" {
  domain   = "devrate.org"
  statuses = ["ISSUED"]
  tags = {
    "Name" = "devrate.org"
  }
}

resource "aws_route53_record" "devrate_dns" {
  zone_id = data.aws_route53_zone.s3_front_dns_zone.zone_id
  name    = "devrate.org"
  type    = "A"

  alias {
    name                   = data.aws_s3_bucket.s3_front_site.website_endpoint
    zone_id                = data.aws_s3_bucket.s3_front_site.hosted_zone_id
    evaluate_target_health = false
  }
}