// api.js
export function fazerChamadaAPI(email, senha) {
  const data = {
    email: email,
    password: senha
  };

  return fetch('https://api-seduvibe-deploy.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}
