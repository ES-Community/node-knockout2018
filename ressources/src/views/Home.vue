<template>
  <v-container id="home">
    <v-layout row wrap>
      <v-img width="600" src="/bookman.png" alt="Bookman logo"></v-img>
    </v-layout>
    <br><br>
    <h1>This is your bookmark manager 🚀</h1>
    <br>
    <p>We create this webapp to allow you to manage your bookmarks easily <br>
      We also did it for the <a href="https://www.nodeknockout.com/entries/76-es-community-junior/vote">Node Knockout</a> hackathon</p>
    <v-btn flat to="/login" color="info">Login</v-btn>
    <v-btn flat to="/signup" color="info">Signup</v-btn>
    <div id="hackbit-vote-widget"></div>
  </v-container>
</template>

<script>
  import router from '@/router'

  export default {
    mounted () {
      fetch('/isconnected')
      .then(res => res.text())
      .then(body => body == 'connected' ? router.push('dashboard') : false)
    }
  }

</script>

<style>
#home {
  text-align: center;
  padding: 7%;
  padding-bottom: 0%;
  display: inline-block;
}

</style>

