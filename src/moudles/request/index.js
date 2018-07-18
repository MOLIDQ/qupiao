import react from 'react'

import Post from './Post'
import Get from './Get'

react.Component.prototype.Post=Post
react.Component.prototype.Get=Get

export{
    Post,
    Get
}
export default{
    Post,
    Get
}
