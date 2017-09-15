const __api__ = 'https://api.dribbble.com/v1/'
module.exports = {
  serialize(url, obj) {
    obj = {
      ...obj,
      access_token: 'e9dacdeb9c9806a2bced5ef4e90914855247b9f621fd8576db2b26761caf600a'
    }
    let res = []
    for(let i in obj) {
      res.push(`${i}=${encodeURIComponent(obj[i])}`)
    }
    return `${__api__}${url}?${res.join('&')}`
  }
}