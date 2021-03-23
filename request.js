function validates(obj) {
    let { method, uri, version, message } = obj;
    //method
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!validMethods.includes(method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    //URI
    let uriPattern = /\w+\.\w+.\w+/g;
    let validUri = uriPattern.test(uri);
    if (!validUri && uri != '*') {
        throw new Error('Invalid request header: Invalid URI');
    }
    //version
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!validVersions.includes(version)) {
        throw new Error('Invalid request header: Invalid version');
    }
    //message
    let msgPattern = /[0-9A-Za-z\<\>\&\'\"\\]+/;
    let validMsg = msgPattern.test(message);
    if (!validMsg) {
        throw new Error('Invalid request header: Invalid message');
    }
    return obj;
}
module.exports = validates;
// let test = validates({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// })