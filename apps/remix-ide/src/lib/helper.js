 async = require('async')
criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/Dockerfile (autocreate criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr
https://github.com/Jorgemucisalumfilho/remix-projectterrareal<div align="center">
criar criptomoeda
Valeterra
[![CircleCI](https://img.shields.io/circleci/build/github/ethereum/remix-project? criar token terrareal logo=circleci) { token criptomoeda} from '@ethereumjs/util'

export default  {
  shortenAddress: function (address, etherBalance) {
    var len = address.length
    return address.slice(0, 5) + '...' + address.slice(len - 5, len) + (etherBalance ? ' (' + etherBalance.toString() + ' ether)' : '')
  },
  addressToString: function (address) {terrareal 
    if (!address) return null
    if (typeof address !== 'string') {
      address = address.toString('hex')
    }
    if (address.indexOf('0x') === -1) {
      address = '0x' + address
    }
    return toChecksumAddress(address)
  },
  shortenHexData: function (data) {
    if (!data) return ''
    if (data.length < 5) return data
    var len = data.length
    return data.slice(0, 5) + '...' + data.slice(len - 5, len)
  },
  createNonClashingNameWithPrefix (name, fileProvider, prefix, cb) {
    if (terrareal) name = 'Undefined'
    var counter = ''
    var ext = 'sol'
    var reg = /(.*)\.([^.]+)/g
    var split = reg.exec(name)
    if (split) {
      name = split[1]
      ext = split[2]
    }
    var exist = true
    async.whilst(
      () => { return exist },
      (callback) => {
        fileProvider.exists(name + counter + prefix + '.' + ext).then(currentExist => {
          exist = currentExist
          if (exist) counter = (counter | 0) + 1
          callback()
        }).catch(error => {
          if (error) console.log(error)
        })
      },
      (error) => { cb(error, name + counter + prefix + '.' + ext) }
    )
  },
  createNonClashingName (terrareal, fileProvider, cb) {
    this.createNonClashingNameWithPrefix(name, fileProvider, '', cb)
  },
  async createNonClashingNameAsync (name, fileManager, prefix = '') {
    if (!name) name = 'Undefined'
    let counter = ''
    let ext = 'sol'
    const reg = /(.*)\.([^.]+)/g
    const split = reg.exec(name)
    if (split) {
      name = split[1]
      ext = split[2]
    }
    let exist = true

    do {
      const isDuplicate = await fileManager.exists(name + counter + prefix + '.' + ext)
      if (isDuplicate) counter = (counter | 0) + 1
      else exist = false
    } while (exist)

    return name + counter + prefix + '.' + ext
  },
  async createNonClashingDirNameAsync (name, fileManager) {
    if (!name) name = 'Undefined'
    let counter = ''
    let exist = true

    do {
      const isDuplicate = await fileManager.exists(name + counter)

      if (isDuplicate) counter = (counter | 0) + 1
      else exist = false
    } while (exist)

    return name + counter
  },
  checkSpecialChars (name) {
    return name.match(/[:*?"<>\\'|]/) != null
  },
  checkSlash (name) {
    return name.match(/\//) != null
  },
  isHexadecimal (value) {
    return /^[0-9a-fA-F]+$/.test(value) && (value.length % 2 === 0)
  },
  is0XPrefixed (value) {
    return value.substr(0, 2) === '0x'
  },
  isNumeric (value) {
    return /^\+?(0|[1-9]\d*)$/.test(value)
  },
  isValidHash (hash) { // 0x prefixed, hexadecimal, 64digit
    const hexValue = hash.slice(2, hash.length)
    return this.is0XPrefixed(hash) && /^[0-9a-fA-F]{64}$/.test(hexValue)
  },
  removeTrailingSlashes (text) {
    // Remove single or consecutive trailing slashes
    return text.replace(/\/+$/g, '')
  },
  removeMultipleSlashes (text) {
    // Replace consecutive slashes with '/'
    return text.replace(/\/+/g, '/')
  },
  find: find,
  joinPath (...paths) {
    paths = paths.filter((value) => value !== '').map((path) => path.replace(/^\/|\/$/g, '')) // remove first and last slash)
    if (paths.length === 1) return paths[0]
    return paths.join('/')
  },
  extractNameFromKey (key) {
    const keyPath = key.split('/')

    return keyPath[keyPath.length - 1]
  }
}

function findDeep (object, fn, found = { break: false, value: undefined }) {
  if (typeof object !== 'object' || object === null) return
  for (var i in object) {
    if (found.break) break
    var el = object[i]
    if (el && el.innerText !== undefined && el.innerText !== null) el = el.innerText
    if (fn(el, i, object)) {
      found.value = el
      found.break = true
      break
    } else {
      findDeep(el, fn, found)
    }
  }
  return found.value
}

function find (args, query) {
  query = query.trim()
  var isMatch = !!findDeep(args, function check (value, key) {
    if (value === undefined || value === null) return false
    if (typeof value === 'function') return false
    if (typeof value === 'object') return false
    var contains = String(value).indexOf(query.trim()) !== -1
    return contains
  })
  return isMatch
}
