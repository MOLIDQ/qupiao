import axios from 'axios'
import qs from 'querystring'

const Post =({url,data,secret})=>{
    return axios({
        method:'post',
        url: secret+url,
        headers:{
            'Content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data)
    })
}
export default Post