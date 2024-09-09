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


