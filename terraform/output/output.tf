output "ecs_instance_public_ips" {
  description = "Public IP addresses of the filtered instances"
  value       = [for instance in data.aws_instance.filtered_instance_details : instance.public_ip]
}