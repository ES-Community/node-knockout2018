'use strict'

const Persona = use('Persona')

class SignupController {
  async index({request, auth, reponse}) {
    const payload = request.only(['email', 'password', 'password_confirmation'])
    const user = Persona.register(payload)
    await auth.login(user)
    response.redirect('/dashboard')
  }
}

module.exports = SignupController
