import request from 'supertest';
import app from '../app';

describe('Task API', () => {
  it('should retrieve all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should create a new task', async () => {
    const newTask = { title: 'Test Task', completed: false };
    const res = await request(app).post('/api/task').send(newTask);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(newTask.title);
  });
  

  it('should update a task', async () => {
    const updatedTask = { title: 'Updated Task', completed: true };
    const res = await request(app).put('/api/task/1').send(updatedTask);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe(updatedTask.title);
    expect(res.body.completed).toBe(updatedTask.completed);
  });

  it('should delete a task', async () => {
    const res = await request(app).delete('/api/task/1');
    expect(res.status).toBe(204);
  });
});