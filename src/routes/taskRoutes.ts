import { Router } from 'express';
import { getTasks, createTask, patchTask, updateTask, deleteTask } from '../controllers/taskController';

const router = Router();

router.get('/tasks', getTasks);
router.post('/task', createTask);
router.patch('/task/:id', patchTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


export default router;