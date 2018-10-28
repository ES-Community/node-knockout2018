<template>
  <div>
    <v-container v-if="isConnected">
      <h1>Dashboard page</h1>
      <v-btn @click="logout" color="danger">
        logout
      </v-btn>
    </v-container>
    <v-container v-else>
      <v-alert :value="!isConnected" type="error">
              SYou are not loggedin
            </v-alert>
    </v-container>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    data () {
      return {
        isConnected: false
      }
    },
    methods: {
      logout() {
        fetch('/logout')
        .then(res => res.text())
        .then(body => body == 'loggedout' ? router.push('/') : console.log('not logged out'))
      }
    },
    mounted () {
      fetch('/isconnected')
      .then(res => res.text())
      .then(body => body == 'connected' ? this.isConnected = true : this.isConnected = false)
    }
  }

</script>
