'use strict'

const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Model')} User */
const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Model')} Bookmark */
const Bookmark = use('App/Models/Bookmark')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with bookmarks
 */
class BookmarkController {
  /**
   * Show a list of all bookmarks.
   * GET bookmarks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Auth} ctx.auth
   */
  async index ({ response, auth }) {
    await auth.getUser()
    let user = await User.find(auth.user.id)
    let bookmarks = await user.bookmarks().fetch()
    return response.json(bookmarks)
  }

  /**
   * Render a form to be used for creating a new bookmark.
   * GET bookmarks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, auth, response }) {
  }

  /**
   * Create/save a new bookmark.
   * POST bookmarks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const payload = request.only(['title', 'subtitle', 'link'])
    await auth.getUser()
    const user = await User.find(auth.user.id)
    const bookmark = await user.bookmarks().create(payload)
    await user.save()
    const bookmarks = await user.bookmarks().fetch()
    return response.json(bookmarks)
  }

  /**
   * Display a single bookmark.
   * GET bookmarks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing bookmark.
   * GET bookmarks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update bookmark details.
   * PUT or PATCH bookmarks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    const payload = request.only(['title', 'subtitle', 'link'])
    await auth.getUser()
    const user = await User.find(auth.user.id)
    const bookmark = await user.bookmarks().where('id', params.id).update(payload)
    const bookmarks = await user.bookmarks().fetch()
    return response.json(bookmarks)
  }

  /**
   * Delete a bookmark with id.
   * DELETE bookmarks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    await auth.getUser()
    const user = await User.find(auth.user.id)
    const bookmark = await user.bookmarks().where('id', params.id).delete()
    const bookmarks = await user.bookmarks().fetch()
    return response.json(bookmarks)
  }
}

module.exports = BookmarkController
