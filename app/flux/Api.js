/* global Headers, fetch, Promise, console */

import Actions from 'flux/Actions'
import config from 'config'

const _baseUrl = config.path

function _formatInfos (json) {
    return json
}

function _formatPosts (json) {
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
            tags: _formatTags(post.tags),
            content: post.content,
            excerpt: post.excerpt
        }
    })
}

function _formatTags (json) {
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

function _fetchData (path, callback) {
    var url = _baseUrl + path
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

class Api {

    fetchContent () {
        const promises = [this.fetchSiteInfos(), this.fetchAllPosts()]

        Promise.all(promises).then(response => {
            const content = {
                infos: response[0],
                posts: response[1]
            }

            Actions.receiveContent(content)
        })
    }

    fetchSiteInfos () {
        const callback = _formatInfos
        return _fetchData('/', callback)
    }

    fetchAllPosts () {
        const callback = _formatPosts.bind(this)
        return _fetchData('/posts?order=ASC', callback)
    }
}

const instance = new Api()
export default instance
