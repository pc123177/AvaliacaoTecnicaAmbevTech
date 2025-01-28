const API_URL = 'https://serverest.dev';

class AuthService {
  static login(dados) {
    return cy.request({
      method: 'POST',
      url: `${API_URL}/login`,
      body: dados,
      failOnStatusCode: false,
    });
  }
}

export default AuthService;
