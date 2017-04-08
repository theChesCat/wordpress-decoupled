/* global Headers, fetch, console */

import Constants from './Constants'

class Api {

    constructor() {
        this.baseUrl = Constants.WORDPRESS_URL + Constants.WORDPRESS_ID
    }

    fetchAllPosts() {
        var postsUrl = this.baseUrl + '/posts/'
        var request = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        }

        return fetch(postsUrl, request).then(response => {
            return response.json().then(json => {
                return this.formatPosts(json.posts)
            })
        }).catch(error => {
            console.log('app/flux/Api - There was an error when fetching Wordpress posts: ' + error.message)
        })
    }

    fetchAllTags() {
        var tagsUrl = this.baseUrl + '/tags/'
        var request = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        }

        return fetch(tagsUrl, request).then(response => {
            return response.json().then(json => {
                return this.formatTags(json.tags)
            })
        }).catch(error => {
            console.log('app/flux/Api - There was an error when fetching Wordpress tags: ' + error.message)
        })
    }

    formatPosts(data) {
        return data.map(post => {
            return {
                id: post.ID,
                slug: post.slug,
                thumbnail: post.featured_image,
                title: post.title,
                tags: this.formatTags(post.tags)
            }
        })
    }

    formatTags(data) {
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
}

const instance = new Api()
export default instance
