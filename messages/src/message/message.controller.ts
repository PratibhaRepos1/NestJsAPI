import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dtos';
import { messageService } from './message.service';

@Controller('message')
export class MessageController {

    constructor(public messageService: messageService) { }

    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessages(@Body() body: createMessageDto) {
        // console.log(body);
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        // console.log(id);
        const message = await this.messageService.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found.')
        }
        return message;

    }

}
