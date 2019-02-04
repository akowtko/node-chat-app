const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
   it('should generate correct location object', () => {
      const from = 'bork';
      const latitude = 1;
      const longitude = 1;

      const newLocationMessage = generateLocationMessage(from, latitude, longitude);

      expect(newLocationMessage.from).toBe(from);
      expect(newLocationMessage.createdAt).toBeA('number');
      expect(newLocationMessage.locationUrl).toBe('https://www.google.com/maps?q1,1');
   });
});