import UsuarioService from '../../support/services/UsuarioService';

describe('Usuários - API', () => {
  it('Deve criar um usuário com sucesso', () => {
    const userData = {
      nome: 'Fulano QA',
      email: `fulano${Date.now()}@qa.com`,
      password: 'teste',
      administrador: 'true',
    };

    UsuarioService.criarUsuario(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  it('Deve retornar erro ao tentar criar um usuário com email inválido', () => {
    const invalidUserData = {
      nome: 'Fulano Invalido',
      email: 'emailinvalido.com',
      password: 'teste',
      administrador: 'true',
    };

    UsuarioService.criarUsuario(invalidUserData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.email).to.eq('email deve ser um email válido');
    });
  });
});
