<template>
  <v-toolbar dark color="black">
    <v-toolbar-title>Bookman</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/about">About</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Navbar',
    mounted() {
      console.log('Hello')
    }
  }

</script>
