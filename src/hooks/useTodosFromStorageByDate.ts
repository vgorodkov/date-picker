import { useEffect, useState } from 'react';

import { MonthDate } from '@/types/date';

export const useTodosFromStorageByDate = (date: MonthDate) => {
  const { day, month, year } = date;
  const storageKey = `${day}-${month}-${year}`;

  const [todos, setTodos] = useState<string[]>(() => {
    const storedTodos = localStorage.getItem(storageKey);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    const storedTodos = localStorage.getItem(storageKey);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      setTodos([]);
    }
  }, [storageKey]);

  const addTodo = (todo: string) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem(storageKey, JSON.stringify(newTodos));
  };

  const clearTodos = () => {
    localStorage.removeItem(storageKey);
    setTodos([]);
  };

  return { todos, addTodo, clearTodos };
};
