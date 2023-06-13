import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCommand } from './test-command';
import { BullModule } from '@nestjs/bullmq';
import { TestProcessor } from './test-processor';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'queueName',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BasicCommand, TestProcessor],
})
export class AppModule {}
