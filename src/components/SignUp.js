import React, { Component } from 'react';
import axios from 'axios';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, password_confirmation } = this.state;

    // Verifica se as senhas coincidem antes de enviar a solicitação
    if (password !== password_confirmation) {
      console.log('As senhas não coincidem.');
      return;
    }

    // Crie um objeto com os dados do usuário para enviar à API
    const user = {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    };

    axios
      .post('http://localhost:4000/signup', user)
      .then((response) => {
        // Lógica para tratar o sucesso do cadastro
        console.log('Cadastro realizado com sucesso!', response.data);
      })
      .catch((error) => {
        // Lógica para tratar erros de cadastro
        console.error('Erro ao cadastrar:', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Cadastro de Usuário</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Confirme a senha:</label>
            <input
              type="password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default Signup;
