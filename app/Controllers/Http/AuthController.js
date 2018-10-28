'use strict'

const Persona = use('Persona')

class AuthController {

    async signup ({request, auth}) {
        const payload = request.only(['email', 'password', 'password_confirmation'])
        const user = await Persona.register(payload)
        await auth.login(user)
        return 'loggedin'
      }

    async login ({ request, auth }) {
      const payload = request.only(['uid', 'password'])
      const user = await Persona.verify(payload)

      await auth.login(user)
      return 'loggedin'
    }

    async logout ({auth}) {
      await auth.logout()
      return 'loggedout'
    }

    async isconnected({auth, response}) {
      try {
        await auth.check()
        return 'connected'
      } catch(e) {
        return response.json(e)
      }
    }
}

module.exports = AuthController
