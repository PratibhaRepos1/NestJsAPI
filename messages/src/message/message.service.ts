import { messageRepository } from "./message.repository";
import { Injectable, InjectableOptions } from "@nestjs/common";

@Injectable()
export class messageService {
    constructor(public messageRepo: messageRepository) { }

    findOne(id: string) {
        return this.messageRepo.findOne(id);
    }

    findAll() {
        return this.messageRepo.findAll();
    }

    create(content: string) {
        return this.messageRepo.create(content);
    }

}