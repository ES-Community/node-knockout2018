<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card>
        <v-toolbar dark color="black">
          <v-toolbar-title>Signup</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-alert :value="error" type="error">
            Something got wrong with your credentials
          </v-alert>
          <v-form ref="form">
            <v-container>
              <v-text-field prepend-icon="person" v-model="email" label="E-mail" required solo></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password" label="Password" :append-icon="show1 ? 'visibility_off' : 'visibility'"
                :type="show1 ? 'text' : 'password'" name="password" @click:append="show1 = !show1" required solo></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password_confirmation" label="Password confirmation"
                :append-icon="show2 ? 'visibility_off' : 'visibility'" :type="show2 ? 'text' : 'password'" name="password_confirmation"
                @click:append="show2 = !show2" required solo></v-text-field>
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
        password_confirmation: '',
        show1: false,
        show2: false,
        error: false
      }
    },

    methods: {
      submit() {
        fetch('http://localhost:3333/signup', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
              email: this.email,
              password: this.password,
              password_confirmation: this.password_confirmation
            }),
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(res => res.text())
          .then(body => body == 'loggedin' ? router.push('dashboard') : this.error = true)
      }
    }
  }

</script>
