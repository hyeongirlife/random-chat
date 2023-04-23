import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'dgram';

@WebSocketGateway()
export class ChatsGateway implements OnGatewayInit {
  private logger = new Logger('chat');

  constructor() {
    this.logger.log('constructor');
  }

  afterInit(server: any) {}
  @SubscribeMessage('new_user')
  handleNewUser(
    @MessageBody() username: string, // !! 클라이언트에서 받은 데이터
    @ConnectedSocket() socket: Socket,
  ) {
    console.log(username);
    socket.emit('hello_user', `hello + ${username}`);
  }
}
