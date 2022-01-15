import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { messageService } from './message.service';
import { messageRepository } from './message.repository';
@Module({
  controllers: [MessageController],
  providers: [messageService, messageRepository]
})
export class MessageModule { }
