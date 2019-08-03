import MesaConsignadoLoginPage from '../Page/MesaConsignadoLoginPage'

describe('Login com sucesso', () => {
  it('Login', () => {
    const login = new MesaConsignadoLoginPage();
    login.visit();
    login.setUser();
    login.setPassword();
    login.btnEntrar();
    login.validateMessage();
    login.validateStatus();
  });
});