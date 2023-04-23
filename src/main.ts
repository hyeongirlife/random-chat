import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public')); //!! JS, CSS 파일을 전달하는 역할
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //!! 템플릿엔진을 어느 폴더에 둘 것인지 정하는 역할
  app.setViewEngine('hbs'); //!! 어떤 템플릿 엔진을 사용할 것인지

  await app.listen(3000);
}
bootstrap();
