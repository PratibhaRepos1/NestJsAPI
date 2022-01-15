import { messageRepository } from "./message.repository";

export class messageService {
    messageRepo: messageRepository;

    constructor() {
        //Service is creating its own dependencies
        //do not do this in real app
        //use dependency injection
        this.messageRepo = new messageRepository();
    }

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