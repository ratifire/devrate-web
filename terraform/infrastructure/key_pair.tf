resource "aws_key_pair" "front_key" {
  key_name   = "terraform_ec2_front_key_pair"
  public_key = tls_private_key.rsa-4096-example.public_key_openssh
}

resource "tls_private_key" "rsa-4096-example" {
  algorithm = "RSA"
  rsa_bits  = 4096
}