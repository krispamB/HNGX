import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  


  const config = new DocumentBuilder()
    .setTitle('HNGx stage II API Docs')
    .setDescription('Doc for API')
    .setVersion('1.0')
    .addTag('Task')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
