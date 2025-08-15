const { addTask, getTasks } = require('../tasks');

describe('Task Management', () => {
  test('adds a new task', () => {
    addTask('Test task');
    expect(getTasks()).toContain('Test task');
  });
});