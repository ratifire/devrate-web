resource "aws_ecs_task_definition" "task_definition_front" {

  family = "frontend_td"

  container_definitions = jsonencode([
    {
      name              = "front-container",
      image             = "${data.aws_caller_identity.current_user.account_id}.dkr.ecr.${var.region}.amazonaws.com/${var.front_repository_name}:${var.image_tag}",
      cpu               = 0,
      memory            = 1800,
      memoryReservation = 1800,
      stopTimeout       = 10,
      healthCheck : {
        "command" : ["CMD-SHELL", "curl -f https://${var.domain_name}/ || exit 1"],
        "interval" : 120,
        "timeout" : 10,
        "retries" : 3
      },
      portMappings = [
        {
          name          = "${var.front_container_name}-${var.front_port}-tcp",
          containerPort = var.front_port,
          hostPort      = var.front_port,
          protocol      = "tcp",
          appProtocol   = "http"
        }
      ],
      essential = true,
      environment = [
        {
          name  = "ACTIVE_PROFILE",
          value = "production"
        },
        {
          name  = "REACT_APP_API_URL",
          value = "https://server.devrate.org"
        },
        {
          name  = "REACT_APP_WS_URL",
          value = "wss://server.devrate.org"
        }
      ],
      mountPoints = [],
      volumesFrom = [],
      logConfiguration = {
        logDriver = "awslogs",
        options = {
          awslogs-group         = "/ecs/${var.front_container_name}",
          awslogs-create-group  = "true",
          awslogs-region        = var.region,
          awslogs-stream-prefix = "ecs"
        },
        secretOptions = []
      },
      systemControls = []
    }
  ])

  task_role_arn      = data.aws_iam_role.ecs_task_execution_role_arn.arn
  execution_role_arn = data.aws_iam_role.ecs_task_execution_role_arn.arn
  network_mode       = "bridge"
  requires_compatibilities = [
    "EC2"
  ]
  cpu    = "2048"
  memory = "1900"
  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "X86_64"
  }

}