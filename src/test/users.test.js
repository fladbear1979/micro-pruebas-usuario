const { addUser, getUsers } = require('../users');

describe('User Management', () => {
  test('adds a new user', () => {
    addUser('user@example.com');
    expect(getUsers()).toContain('user@example.com');
  });
});