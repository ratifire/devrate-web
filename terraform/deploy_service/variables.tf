variable "region" {
  description = "AWS region to host your infrastructure"
  default     = "eu-north-1"
}

variable "front_cluster_name" {
  description = "Front cluster name."
  default     = "frontend-cluster"
}

variable "front_container_name" {
  description = "Front container name."
  default     = "front-container"
}

variable "front_repository_name" {
  description = "Repository name"
  default     = "frontend-service"
}

variable "instance_type" {
  description = "AWS instance type"
  default     = "t3.small"
}

variable "image_tag" {
  default = "latest"
}

variable "front_port" {
  description = "Port number on which back service is listening"
  default     = 3000
}


variable "domain_name" {
  description = "Domain name"
  default     = "skillzzy.com"
}

variable "bucket_name_logs" {
  description = "Bucket name fo the logs"
  default     = "logs-front-1209"
}

variable "subdomain_name" {
  default = "server.devrate.org"
}

variable "vpc" {
  default = "vpc-0032e90317069a534"
}