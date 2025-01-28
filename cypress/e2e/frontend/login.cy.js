import LoginPage from '../../support/pages/LoginPage';

describe('Login - Frontend', () => {
  beforeEach(() => {
    LoginPage.visit(); 
  });

  it('Deve realizar login com sucesso', () => {
    LoginPage.fillEmail('fulano@qa.com'); 
    LoginPage.fillPassword('teste'); 
    LoginPage.submit(); 
    LoginPage.validateLoginSuccess(); 
  });

  it('Deve exibir erro ao tentar logar com credenciais inválidas', () => {
    LoginPage.fillEmail('email@invalido.com');
    LoginPage.fillPassword('senhaerrada'); 
    LoginPage.submit(); 
    LoginPage.validateErrorMessage('Email e/ou senha inválidos'); 
  });

  it('Deve exibir erro ao tentar logar sem preencher os campos obrigatórios', () => {
    LoginPage.clearEmail(); 
    LoginPage.clearPassword(); 
    LoginPage.submit(); 
    LoginPage.validateErrorMessage('Email é obrigatório');
    LoginPage.validateErrorMessage('Password é obrigatório')
  });
});
