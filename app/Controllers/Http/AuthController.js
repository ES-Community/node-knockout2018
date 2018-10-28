'use strict'

class AuthController {

    async SignUp({request, auth, response}) {
        request.request.headers['accept'] = 'application/json'
        const payload = request.only(['email', 'password', 'password_confirmation'])
        const user = await Persona.register(payload)
        await auth.login(user)
        return 'loggedin'
      }

      async login ({ request, auth, response }) {
        const payload = request.only(['uid', 'password'])
        const user = await Persona.verify(payload)
      
        await auth.login(user)
        response.redirect('/dashboard')
      }

}

module.exports = AuthController
