import React, { useEffect, useState } from 'react';

const HealthCheck = () => {
  const [status, setStatus] = useState('Checking...');
  const [health, setHealth] = useState(false);

  useEffect(() => {
    // Функция для проверки здоровья API или сервиса
    const checkHealth = async () => {
      try {
        // Здесь можно сделать запрос к бэкенду или другому API для проверки
        const response = await fetch('/health'); // Пример запроса
        if (response.ok) {
          setHealth(true);
          setStatus('healthy');
        } else {
          setHealth(false);
          setStatus('unhealthy');
        }
      } catch (error) {
        setHealth(false);
        setStatus('unhealthy');
      }
    };

    // Вызов проверки здоровья при монтировании компонента
    checkHealth();
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
      <p>Status: {status}</p>
      {/* AWS ALB проверяет только содержимое страницы, поэтому тут просто выводим текст */}
      <p>{health ? 'healthy' : 'unhealthy'}</p>
    </div>
  );
};

export default HealthCheck;
