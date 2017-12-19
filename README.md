# blobstore

A simple blob store which supports the following API

The size limit for a request is 1MB

  POST /blobs/
  {id: "....", key: "..."}

  POST/PUT /blobs/:id?key=...
  {}

  DELETE /blobs/:id?key=...
  {}

  GET /blobs/:id


Show how users can send a compressed file in the input which reduces the file size.

# premium features

 1. Increased file size limit
 2. Creation of namespaces?
