import React, { useState, useContext } from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.png';
import { users } from '../../services/users';
import { Link, useHistory } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';

function SignIn() {

  const [messageValidator, setMessageValidator] = useState('');
  const [formData, setFormData] = useState({
      username: '',
      password: ''
  });
  const history = useHistory();
  const context = useContext(LoginContext);

  function handleInputChange(event){
      const { name, value } = event.target;
      setFormData({
          ...formData, [name]: value
      });
  }

  async function handleSubmit(event){
    event.preventDefault();
    const { username, password } = formData;
    
    if(username === ''){
      setMessageValidator('Usuário não informado.');
      return;
    }

    if(password === ''){
      setMessageValidator('Senha não informada.');
      return;
    }

    const auth = users.find(user => (user.username === username && user.password === password))

    if(auth === undefined){
      setMessageValidator('Usuário ou senha incorreto.');
      return;
    }
    
    context.setLogin({username: auth.username, photo: auth.photo})
    history.push('/home');
  }  

  return (
          <Container>
            <form onSubmit={handleSubmit}>
              <section>
                <img src={logo} alt="Logo"/>

                <div className="field">
                    <label htmlFor="username">Usuário</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="button-group">
                  <button type="submit">Entrar</button>
                  <Link to="/forgotpassword">Esqueci minha senha.</Link>
                </div>

                <div className="message-validator">
                  {messageValidator !== '' && <p>{messageValidator}</p>}
                </div>
              </section>
            </form>
          </Container>
  );
}

export default SignIn;
