import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

process.env.is_running_cli = 'true';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.__basedir = __dirname;

async function bootstrap() {
  await CommandFactory.run(AppModule);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
