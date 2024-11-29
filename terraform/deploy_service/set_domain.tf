
resource "aws_route53_record" "front_a_record" {
  zone_id = data.aws_route53_zone.front_dns_zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_lb.front_ecs_alb.dns_name
    zone_id                = aws_lb.front_ecs_alb.zone_id
    evaluate_target_health = true
  }
}
