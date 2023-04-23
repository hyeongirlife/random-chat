import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';

@Module({})
export class ChatsModule {
  providers: [ChatsGateway];
}
