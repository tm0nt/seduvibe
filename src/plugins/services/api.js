import axios from "axios";

const enviarDados = (name, email, user, creator, phone, genero, password) => {
  const dados = {
    name: name,
    email: email,
    user: user,
    creator: creator,
    phone: phone,
    genero: genero,
    password: password,
  };

  return axios.post("http://3.95.187.233:3333/register", dados);
};

export default enviarDados;
