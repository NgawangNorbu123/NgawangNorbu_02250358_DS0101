import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/tasks`);
      // Safely handle whatever backend returns
      if (Array.isArray(res.data)) {
        setTasks(res.data);
      } else if (res.data && Array.isArray(res.data.tasks)) {
        setTasks(res.data.tasks);
      } else {
        setTasks([]);
      }
      setError('');
    } catch (err) {
      setTasks([]);
      setError('Could not connect to backend. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      await axios.post(`${API_URL}/api/tasks`, { title: newTask });
      setNewTask('');
      fetchTasks();
    } catch (err) {
      setError('Could not add task.');
    }
  };

  const toggleTask = async (task) => {
    try {
      await axios.put(`${API_URL}/api/tasks/${task.id}`, {
        title: task.title,
        completed: !task.completed
      });
      fetchTasks();
    } catch (err) {
      setError('Could not update task.');
    }
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingTitle(task.title);
  };

  const saveEdit = async (task) => {
    try {
      await axios.put(`${API_URL}/api/tasks/${task.id}`, {
        title: editingTitle,
        completed: task.completed
      });
      setEditingId(null);
      fetchTasks();
    } catch (err) {
      setError('Could not save edit.');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      setError('Could not delete task.');
    }
  };

  return (
    <div className="app">
      <h1>📝 My Todo List</h1>

      {error && <p className="error">{error}</p>}

      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {loading ? (
        <p className="empty">Loading tasks...</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task)}
              />
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    className="edit-input"
                  />
                  <button onClick={() => saveEdit(task)} className="save-btn">Save</button>
                </>
              ) : (
                <>
                  <span>{task.title}</span>
                  <button onClick={() => startEdit(task)} className="edit-btn">Edit</button>
                  <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {!loading && tasks.length === 0 && !error && (
        <p className="empty">No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default App;