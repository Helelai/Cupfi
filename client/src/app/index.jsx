// Основной файл
import React, { StrictMode } from 'react';  // Для импорта React
import { createRoot } from 'react-dom/client'; // Для рендеринга
import CategoryList from "../features/categories/ui/categoryLIst"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CategoryList />
  </StrictMode>
);


