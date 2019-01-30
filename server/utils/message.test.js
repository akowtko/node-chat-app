const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const text = 'This is a test';
        const from = 'Andrew';

        const newMessage = generateMessage(from, text);

        expect(newMessage.text).toBe(text);
        expect(newMessage.from).toBe(from);
        expect(newMessage.createdAt).toBeA('number');
    });
});