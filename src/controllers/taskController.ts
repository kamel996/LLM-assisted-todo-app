import { Request, Response } from 'express';
import { Task } from '../models/task';
import { logRequest, logError } from '../utils/log-utils';

let tasks: Task[] = [];

export const getTasks = (req: Request, res: Response) => {
  logRequest(req);
  try {
    res.status(200).json(tasks);
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Failed to retrieve tasks' });
  }
};

export const createTask = (req: Request, res: Response) => {
  logRequest(req);
  try {
    const newTask: Task = req.body;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Failed to create task' });
  }
};

export const patchTask = (req: Request, res: Response) => {
  logRequest(req);
  try {
    const id = parseInt(req.params.id);
    const updatedFields: Partial<Task> = req.body;
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedFields };
      res.status(200).json(tasks[taskIndex]);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Failed to update task' });
  }
};

export const updateTask = (req: Request, res: Response) => {
  logRequest(req);
  try {
    const id = parseInt(req.params.id);
    const updatedTask: Task = req.body;
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      res.status(200).json(tasks[taskIndex]);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Failed to replace task' });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  logRequest(req);
  try {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);
  
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Failed to delete task' });
  }
};