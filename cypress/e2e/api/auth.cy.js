import AuthService from '../../support/services/AuthService';

describe('Autenticação - API', () => {
  it('Deve fazer login com credenciais corretas', () => {
    const loginData = {
      email: 'fulano@qa.com',
      password: 'teste',
    };

    AuthService.login(loginData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.not.be.null;
    });
  });

  it('Deve retornar erro ao logar com credenciais inválidas', () => {
    const loginData = {
      email: 'email@invalido.com',
      password: 'senhaerrada',
    };

    AuthService.login(loginData).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });
});
