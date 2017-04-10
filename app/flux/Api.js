/* global Headers, fetch, console */

import config from 'config'

class Api {

    constructor () {
        this.baseUrl = config.path
    }

    fetchSiteInfos () {
        const callback = this._formatInfos
        return this._fetchData('/', callback)
    }

    fetchAllPosts () {
        const callback = this._formatPosts.bind(this)
        return this._fetchData('/posts?order=ASC', callback)
    }

    fetchAllTags () {
        const callback = this._formatTags.bind(this)
        return this._fetchData('/tags/', callback)
    }

    _formatInfos (json) {
        return json
    }

    _formatPosts (json) {
        const data = json.posts
        if (!data) {
            return {}
        }

        return data.map(post => {
            return {
                id: post.ID,
                slug: post.slug,
                thumbnail: post.featured_image,
                title: post.title,
                tags: this._formatTags(post.tags),
                content: post.content,
                excerpt: post.excerpt
            }
        })
    }

    _formatTags (json) {
        const data = json.tags
        if (!data) {
            return {}
        }

        const rawTags = Object.keys(data).map(key => {
            return data[key]
        })

        const tags = rawTags.map(rawTag => {
            return {
                id: rawTag.ID,
                slug: rawTag.slug,
                name: rawTag.name
            }
        })

        return tags
    }

    _fetchData (path, callback) {
        var url = this.baseUrl + path
        var request = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        }

        return fetch(url, request).then(response => {
            return response.json().then(json => {
                return callback(json)
            })
        }).catch(error => {
            console.log('app/flux/Api - There was an error when fetching Wordpress ' + path + ': ' + error.message)
        })
    }
}

const instance = new Api()
export default instance
