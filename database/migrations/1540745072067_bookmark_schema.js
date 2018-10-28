'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookmarkSchema extends Schema {
  up () {
    this.create('bookmarks', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title', 250).notNullable()
      table.string('subtitle', 250).notNullable()
      table.string('link', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bookmarks')
  }
}

module.exports = BookmarkSchema
