const url = require('url')

const myUrl = new URL('http://google.com:8000/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString())

//Host name (root domain)
console.log(myUrl.host);

//Hostname (no port)
console.log(myUrl.hostname)

//Pathname
console.log(myUrl.pathname)

//Serilized query
console.log(myUrl.search)

//Params object
console.log(myUrl.searchParams)

//Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))