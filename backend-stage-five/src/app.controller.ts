import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Test')
  @Get()
  @ApiOperation({summary: 'To test if the api works'})
  getHello(): string {
    return this.appService.getHello();
  }
}
