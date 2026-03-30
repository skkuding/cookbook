terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.100"
    }
  }

  backend "s3" {
    bucket         = "codedang-tf-state"
    key            = "terraform/cookbook.tfstate"
    region         = "ap-northeast-2"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}

provider "aws" {
  region = "ap-northeast-2"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

data "aws_route53_zone" "skkuding" {
  name = "skkuding.dev"
}

data "aws_acm_certificate" "skkuding" {
  provider    = aws.us_east_1
  domain      = "skkuding.dev"
  statuses    = ["ISSUED"]
  most_recent = true
}

data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}
