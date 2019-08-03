import MesaConsignadoLoginPage from '/workspace - Cypress/cypress/fixtures'
class MesaConsignadoLoginPage {
    visit(){
      cy.visit('http://webmesa.ystvx7s6di.us-east-1.elasticbeanstalk.com/auth/login')
    }
    setUser(){
      cy.get('.app-input__input').type(JSON.parse)
    } 

    setPassword(){
      cy.get('.password__input').type('qwert@12345')
    }

    btnEntrar(){
      cy.get('.btn > span').click()
    }

    validateMessage(){
      cy.get('.nav-bar__titles__title')
      cy.contains('Mesa para análise de formalização e antifraude.')
    }

    validateStatus(){
      cy.request('http://webmesa.ystvx7s6di.us-east-1.elasticbeanstalk.com/auth/login').its('status').should('eq', 200)
    }  

    errorMessage(){
      cy.get('.login-form__error')
      cy.contains('Credenciais inválidas.')
    }

  }
  export default MesaConsignadoLoginPage;