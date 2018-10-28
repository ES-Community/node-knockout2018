<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card>
        <v-toolbar dark color="black">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-alert :value="error" type="error">
            Something got wrong with your credentials
          </v-alert>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-text-field prepend-icon="person" v-model="email" label="E-mail" name="email" required solo></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password" label="Password" :append-icon="show1 ? 'visibility_off' : 'visibility'" :type="show1 ? 'text' : 'password'"
                name="password" @click:append="show1 = !show1" required solo></v-text-field>
              <v-btn @click="submit">
                submit
              </v-btn>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import router from '@/router'

export default {
  data() {
      return {
        email: '',
        password: '',
        show1: false,
        error: false
      }
    },

    methods: {
      submit() {
        fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type':'application/json'},
          body: JSON.stringify({uid: this.email, password: this.password})
        })
        .then(res => res.text())
        .then(body => body == 'loggedin' ? router.push('dashboard') : this.error = trues)
      }
    }
}
</script>
