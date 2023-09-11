import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('HNGx stage II API Docs')
    .setDescription('Doc for API')
    .setVersion('1.0')
    .addTag('Task')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);


  await app.listen(3000);
}
bootstrap();
