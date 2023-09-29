import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('AppBootstrap')
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
  .setTitle('Chrome extension API')
  .setDescription('Doc for API')
  .setVersion('1.0')
  .addTag('chrome extension')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT);
  logger.log(
    `Chrome EXT server listening on port [${PORT}] in [${process.env.STATE}]`,
  );
}
bootstrap();
