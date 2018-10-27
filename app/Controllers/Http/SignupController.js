'use strict'

const Persona = use('Persona')

class SignupController {
  async index({request, auth, response}) {
    request.request.headers['accept'] = 'application/json'
    const payload = request.only(['email', 'password', 'password_confirmation'])
    const user = await Persona.register(payload)
    await auth.login(user)
    return 'loggedin'
  }
}

module.exports = SignupController
