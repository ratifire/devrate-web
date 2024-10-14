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
        Resource  = "${data.aws_s3_bucket.s3_front_site.arn}/*"
      }
    ]
  })
}

resource "aws_cloudfront_distribution" "s3_front_distribution" {
  origin {
    domain_name = data.aws_s3_bucket.s3_front_site.bucket_regional_domain_name
    origin_id   = "s3_front_site"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3_front_site"

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
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
    name                   = aws_cloudfront_distribution.s3_front_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_front_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}