'use strict'

console.log('starting function')

const AWS = require('aws-sdk'),
  S3 = new AWS.S3(),
  BUCKET_NAME = 'blobstore.webutil.in'



exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  cb(null, {
    hello: 'world'
  })
}

