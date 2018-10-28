<template>
  <v-container>
    <h1>Dashboard page</h1>
    <v-btn @click="logout" color="danger">
      logout
    </v-btn>
  </v-container>
</template>

<script>
  import router from '@/router'

  export default {
    methods: {
      logout() {
        fetch('/logout')
        .then(res => res.text())
        .then(body => body == 'loggedout' ? router.push('/') : console.log('not logged out'))
      }
    }
  }

</script>
