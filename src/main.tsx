import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import Tasks from './pages/Tasks/Tasks.tsx';
import NewTask from './pages/NewTask/NewTask.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/new" element={<NewTask />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
