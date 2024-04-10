import { Controller, Get, HttpCode } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { HttpStatusCode } from '../../common/enums/httpStatusCodeEnum';
import { HealthCheckUrl } from './interfaces/health.interface';

@Controller()
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly database: TypeOrmHealthIndicator,
  ) {}

  @Get('status')
  @HttpCode(HttpStatusCode.OK)
  async healthUrl(): Promise<HealthCheckUrl> {
    return {
      status: true,
    };
  }

  @Get()
  @HealthCheck()
  async healthStatus(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck('api', process.env.HEALTH_CHECK_URL || null),
      () => this.database.pingCheck('database'),
    ]);
  }
}
