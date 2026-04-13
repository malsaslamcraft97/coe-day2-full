
import { useState } from 'react';

export function Login() {
  const [status, setStatus] = useState('');

  const login = async () => {
    const res = await fetch('/api/login', { method: 'POST' });
    const data = await res.json();
    if (data.token) setStatus('success');
  };

  return (
    <div>
      <button onClick={login}>Login</button>
      {status && <p>{status}</p>}
    </div>
  );
}
