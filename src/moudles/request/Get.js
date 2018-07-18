import axios from 'axios'
 
const Get = ({url,data})=>{
    return axios.get('/superstar'+url,{
        params:data
    })
}
export default Get