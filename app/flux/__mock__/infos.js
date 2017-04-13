/* global Promise */

const _infos = {
    ID: 10000000,
    URL: '',
    description: '',
    name: ''
}

export default function fetchSiteInfos () {

    return new Promise ((resolve) => {
        resolve(_infos)
    })

}
