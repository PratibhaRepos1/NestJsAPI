import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dtos';
import { messageService } from './message.service';

@Controller('message')
export class MessageController {
    messageservice: messageService;

    constructor() {
        //do not do this in real app
        //use dependency injection
        this.messageservice = new messageService();
    }

    @Get()
    listMessages() {
        return this.messageservice.findAll();
    }

    @Post()
    createMessages(@Body() body: createMessageDto) {
        // console.log(body);
        return this.messageservice.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        // console.log(id);
        const message = await this.messageservice.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found.')
        }
        return message;

    }

}
