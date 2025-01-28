const API_URL = 'https://serverest.dev';

class UsuarioService {
  static criarUsuario(dados) {
    return cy.request({
      method: 'POST',
      url: `${API_URL}/usuarios`,
      body: dados,
      failOnStatusCode: false,
    });
  }

  static listarUsuarios() {
    return cy.request({
      method: 'GET',
      url: `${API_URL}/usuarios`,
    });
  }
}

export default UsuarioService;
