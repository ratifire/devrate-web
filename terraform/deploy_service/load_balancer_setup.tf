resource "aws_lb" "front_ecs_alb" {
  name               = var.front_ecs_alb
  internal           = false
  load_balancer_type = "application"
  security_groups    = [data.aws_security_group.vpc_frontend_security_group.id]
  subnets            = data.aws_subnets.default_subnets.ids
  access_logs {
    enabled = true
    bucket  = var.bucket_name_logs
  }
}

resource "aws_lb_target_group" "http_ecs_tg_front" {
  name                 = var.http_ecs_tg_front
  port                 = var.front_port
  protocol             = "HTTP"
  vpc_id               = data.aws_vpcs.all_vpcs.ids[0]
  deregistration_delay = "30"

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    interval            = 60
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
  certificate_arn   = data.aws_acm_certificate.domain_cert.arn
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.http_ecs_tg_front.arn
  }
}

resource "aws_lb_listener" "http_ecs_front_listener_80_to_443" {
  load_balancer_arn = aws_lb.front_ecs_alb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

