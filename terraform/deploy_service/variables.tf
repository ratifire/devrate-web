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
  default = "server.skillzzy.com"
}

variable "back_subdomain_name" {
  default = "server.skillzzy.com"
}

variable "vpc" {
  default = "vpc-0032e90317069a534"
}

variable "td_family" {
  default = "frontend_td"
}

variable "front_ecs_alb" {
  default = "ecs-alb-front"
}

variable "http_ecs_tg_front" {
  default = "http-ecs-tg-front"
}

variable "ecs_front_launch" {
  default = "ecs_front_launch"
}

variable "front_capacity_provider" {
  default = "front_capacity_provider"
}

variable "front_capacity_provider_tag" {
  default = "front_capacity_provider"
}

variable "front_key" {
  default = "terraform_ec2_front_key_pair"
}

variable "ecs_front_instance_tag" {
  default = "Ecs-Front-Instance-ASG"
}

variable "front_service_name" {
  default = "frontend-service"
}

variable "vpc_frontend_security_group" {
  default = "Security_group_for_frontend_project"
}

variable "instance_profile_frontend" {
  default = "ecs-instance-profile-frontend"
}

variable "ecs_ex_role_frontend" {
  default = "ecs-ex-role-frontend"
}

variable "ecs-inst-role-frontend" {
  default = "ecs-inst-role-frontend"
}