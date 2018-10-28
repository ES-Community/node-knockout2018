<template>
  <div>
    <v-container v-if="isConnected" id="title">
      <h1>Dashboard page</h1>
    </v-container>
    <v-container v-else>
      <v-alert :value="!isConnected" type="error">
        SYou are not loggedin
      </v-alert>
    </v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar dark color="black">

            <v-toolbar-title>My Bookmarks</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" persistent max-width="600px" @keydown.esc="dialog = false">
              <v-btn icon slot="activator">
                <v-icon>fas fa-plus</v-icon>
              </v-btn>
              <v-card>
                <v-card-title dark color="black">
                  <span class="headline">New Bookmark</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field solo v-model="title" label="Title" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-textarea solo v-model="subtitle" name="subtitle" label="Subtitle"></v-textarea>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field solo v-model="link" label="Link" required></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" flat @click.native="submit">Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>

          <v-list two-line subheader>

            <v-list-tile v-for="item in items" :key="item.title" avatar>

              <v-list-tile-content>
                <v-list-tile-title><a v-bind:href="item.link">{{ item.title }}</a></v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }} - <a v-bind:href="item.link">{{ item.link }}</a></v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-actions>
                <v-layout wrap>
                  <v-flex xs6>
                    <v-dialog v-model="edit_dialog" persistent max-width="600px" @keydown.esc="edit_dialog = false">
                      <v-btn icon ripple slot="activator" @click="editItem(item.id)">
                        <v-icon color="blue">fas fa-pencil-alt</v-icon>
                      </v-btn>
                      <v-card>
                        <v-card-title dark color="black">
                          <span class="headline">Edit Bookmark</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>
                              <v-flex xs12>
                                <v-text-field solo v-model="title" required></v-text-field>
                              </v-flex>
                              <v-flex xs12>
                                <v-textarea solo v-model="subtitle" name="subtitle" v-bind:label="item.subtitle" required></v-textarea>
                              </v-flex>
                              <v-flex xs12>
                                <v-text-field solo v-model="link" v-bind:label="item.link" required></v-text-field>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" flat @click.native="edit_dialog = false; this.title = ''; this.subtitle = ''; this.link = ''">Close</v-btn>
                          <v-btn color="blue darken-1" flat @click.native="updateItem(item.id)">Submit</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn icon ripple @click="deleteItem(item.id)" xs6>
                      <v-icon color="red">fas fa-trash</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-list-tile-actions>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container id="logout">
      <v-btn @click="logout" color="danger">
        logout
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    data() {
      return {
        isConnected: true,
        items: [],
        dialog: false,
        edit_dialog: false,
        title: '',
        subtitle: '',
        link: ''
      }
    },
    methods: {
      logout() {
        fetch('/logout')
          .then(res => res.text())
          .then(body => body == 'loggedout' ? router.push('/') : console.log('not logged out'))
      },
      submit() {
        fetch('/bookmarks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: this.title,
              subtitle: this.subtitle,
              link: this.link
            })
          })
          .then(res => res.json())
          .then(body => {
            this.items = body
            this.dialog = false
            this.title = ''
            this.subtitle = ''
            this.link = ''
          })
      },
      deleteItem(id) {
        fetch(`/bookmarks/${id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(body => this.items = body)
      },
      updateItem(id) {
        fetch(`/bookmarks/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
              title: this.title,
              subtitle: this.subtitle,
              link: this.link
            })
        })
        .then(res => res.json())
        .then(body => {
          this.items = body
          this.edit_dialog = false
          this.title = ''
          this.subtitle = ''
          this.link = ''
          })
      },
      editItem(id) {
        this.items.forEach(bookmark => {
          if (bookmark.id === id) {
            this.title = bookmark.title
            this.subtitle = bookmark.subtitle
            this.link = bookmark.link
          }
        })
      }
    },
    mounted() {
      fetch('/isconnected')
      .then(res => res.text())
      .then(body => body == 'connected' ? this.isConnected = true : this.isConnected = false)
      console.log(1);

      fetch('/bookmarks')
        .then(res => res.json())
        .then(body => {
          this.items = body;
          console.log(2);
        })
    }
  }

</script>

<style>
  #title,
  #logout {
    text-align: center;
  }

</style>
