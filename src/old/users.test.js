const expect = require('expect/lib');
const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }
        ];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {id: '123', name: 'Andrew', room: 'The Office Fans'};
        const responseUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Node Course', () => {
       const userList = users.getUserList('Node Course');
       expect(userList).toEqual(['Mike', 'Julie'])
    });

    it('should return names for React Course', () => {
       const userList = users.getUserList('React Course');
       expect(userList).toEqual(['Jen'])
    });

    it('should remove a user', () => {
        const user = users.users[0];
        const removedUser = users.removeUser(user.id);
        expect(removedUser).toEqual(user);
        expect(users.users.length).toBe(2);
    });

    // id not part of array
    it('should not remove user', () => {
        const removedUser = users.removeUser('45');
        expect(removedUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const user = users.getUser('1');
        expect(user).toEqual(users.users[0]);
    });

    it('should not find user', () => {
        const user = users.getUser('45');
        expect(user).toNotExist();
    });
});