'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  useEffect(() => {
    const savedTheme = localStorage.getItem('adix-theme');
    if (savedTheme) {
      const isDarkSaved = savedTheme === 'dark';
      setIsDark(isDarkSaved);
      document.documentElement.classList.toggle('dark', isDarkSaved);
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('adix-theme', newIsDark ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}