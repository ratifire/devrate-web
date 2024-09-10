terraform {
  backend "s3" {
    bucket  = "devrate-bucket-front-1"
    encrypt = true
    key     = "AWS/output-front-tstates/terraform.tfstate"
    region  = "eu-north-1"
  }
}

provider "aws" {}


