import { readFile, writeFile } from "fs/promises";
import { json } from "stream/consumers";
export class messageRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];

    }
    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(content: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);

        // messages[id] = {id, content: message};
        messages[id] = { id, content };
        console.log(messages);

        await writeFile('messages.json', JSON.stringify(messages));



    }
}