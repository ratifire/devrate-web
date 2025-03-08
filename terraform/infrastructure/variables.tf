variable "max_untagged_images" {
  description = "The maximum number of untagged images to retain in the repository."
  default     = 2
}

variable "region" {
  description = "AWS region to host your infrastructure"
  default     = "eu-north-1"
}

variable "instance_type" {
  description = "AWS instance type"
  default     = "t3.small"
}

variable "repository_name" {
  description = "Repository name"
  default     = "frontend-service"
}

variable "list_of_ports" {
  description = "The list of ports the app will use for each other"
  default     = ["22", "80", "3000", "8080", "5432", "443"]
}

variable "cidr_blocks" {
  description = "The list of cidrs to use for each other"
  default     = ["0.0.0.0/0"]
}

variable "front_port" {
  description = "Port number on which back service is listening"
  default     = 3000
}

variable "ecs_ex_role_frontend" {
  default = "ecs-ex-role-frontend"
}

variable "ecs-inst-role-frontend" {
  default = "ecs-inst-role-frontend"
}

variable "instance_profile_frontend" {
  default = "ecs-instance-profile-frontend"
}

variable "frontend_security_group_name" {
  default = "Security_group_for_frontend_project"
}

variable "front_key" {
  default = "terraform_ec2_front_key_pair"
}

variable "front_service_name" {
  default = "frontend-service"
}