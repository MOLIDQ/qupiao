import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

class ServiceCenter extends Component{
    time(){
        let d=new Date()
        return (d.getHours()+':'+d.getMinutes()+':'+d.getSeconds())
        }
    render(){
        return(
            <div className="servicecenter">
                     <div className='top_arrow'>
                        <Link to="/">
                            <a className='top_arrow_right'><i className='fa fa-arrow-left'></i></a>
                    </Link>
                    </div>
                    <div className='main_time'>
                        {this.time()}
                    </div>
                    <div className='main_talk'>
                        <img src='/img/cus.png' alt=''/>
                        <div className='ser_name'>趣票客服01</div>
                        <div className='talk_detail'>我是今天的值班客服，很高兴为您服务。请问您需要咨询哪方面的问题？为了更好的跟踪服务效果，请在对话结束后对我的服务满意度进行评价，非常感谢您的支持。</div>
                    </div>
                    <div className='serve_footer'>
                        <input placeholder='我想问...'/>
                        <a className='top_arrow_left'><i className='fa fa-smile-o'></i></a>
                        <a className='top_arrow_right'><i className='fa fa-plus-circle'></i></a>
                    </div>
            
               
            </div>
        )
    }
}
export default ServiceCenter