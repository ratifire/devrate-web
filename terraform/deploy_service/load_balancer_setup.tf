resource "aws_lb" "front_ecs_alb" {
  name               = "ecs-alb-front"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [data.aws_security_group.vpc_frontend_security_group.id]
  subnets            = data.aws_subnets.default_subnets.ids
  access_logs {
    enabled = true
    bucket  = "logs-front-1209"
  }
}


resource "aws_lb_target_group" "http_ecs_tg_front" {
  name                 = "http-ecs-tg-front"
  port                 = var.front_port
  protocol             = "HTTP"
  vpc_id               = data.aws_vpcs.all_vpcs.ids[0]
  deregistration_delay = "120"
  stickiness {
    type            = "lb_cookie"
    cookie_duration = "86400"
  }
  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    interval            = 180
    protocol            = "HTTP"
    path                = "/"
    matcher             = "200-305"
  }
}


resource "aws_lb_listener" "https_ecs_listener" {
  load_balancer_arn = aws_lb.front_ecs_alb.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = aws_acm_certificate.devrate_cert.arn
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.http_ecs_tg_front.arn
  }
}

