
resource "aws_route53_record" "front_a_record" {
  # count   = var.deploy_profile == "dev" ? 1 : 0
  zone_id = data.aws_route53_zone.front_dns_zone.zone_id
  name    = var.subdomain_name
  type    = "A"

  alias {
    name                   = aws_lb.front_ecs_alb.dns_name
    zone_id                = aws_lb.front_ecs_alb.zone_id
    evaluate_target_health = true
  }
}
