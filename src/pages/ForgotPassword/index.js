import React, { useState } from 'react';
import { Container } from './styles';
import logo from '../../assets/icon-starctron_600x600.png';
import { users } from '../../services/users';
import { Link } from 'react-router-dom';
import Column from '../../components/Column';

function ForgotPassword() {

  const [messageValidator, setMessageValidator] = useState('');

  const [formData, setFormData] = useState({
      username: '',
      password: ''
  });
  
  function handleInputChange(event){
      const { name, value } = event.target;
      setFormData({
          ...formData, [name]: value
      });
  }

  async function handleSubmit(event){
    event.preventDefault();
    const { email } = formData;
    
    if(email === ''){
      setMessageValidator('E-mail não informado.');
      return;
    }

    const auth = users.find(user => (user.email === email))

    if(auth === undefined){
      setMessageValidator('Usuário não encontrado.');
      return;
    }

    if(auth){
      setMessageValidator('E-mail de alteração de senha enviado.');
      return;
    }
    
  }  

  return (
          <Container>
            <Column width={70}>
              <img src={logo} alt="Logo"/>
            </Column>
            <Column width={30}>
              <form onSubmit={handleSubmit}>
                <section>
                  <img src={logo} alt="Logo"/>

                  <div className="field">
                      <label htmlFor="email">E-mail</label>
                      <input 
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className="button-group">
                    <button type="submit">Resetar senha</button>
                    <Link to="/signin">Voltar</Link>
                  </div>

                  <div className="message-validator">
                    {messageValidator !== '' && <p>{messageValidator}</p>}
                  </div>
                </section>
              </form>
            </Column>
          </Container>
  );
}

export default ForgotPassword;
