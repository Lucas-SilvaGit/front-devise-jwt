import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    // Crie um objeto com os dados de login do usuário para enviar à API
    const user = {
      user: {
        email: email,
        password: password,
      }
    };

    try {
      const response = await axios.post('http://localhost:4000/login', user);

      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);

        // Após receber a resposta de login bem-sucedida
        const token = response.data.token;

        // Armazena o token no localStorage
        localStorage.setItem('token', token);

      } else {
        console.error('Erro no login:', response.data);
        // Adicione qualquer tratamento de erro ou feedback ao usuário.
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      // Adicione qualquer tratamento de erro, como exibir uma mensagem de erro.
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
