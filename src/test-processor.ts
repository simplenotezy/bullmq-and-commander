import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('queueName')
export class TestProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    // do some stuff
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    // do some stuff
  }
}
