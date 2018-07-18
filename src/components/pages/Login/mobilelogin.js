import React ,{Component} from 'react'
import './index.scss'

class MobileLogin extends Component{
    render(){
        return(
            <div className='mobilelogin'>
                <div className='mobilelogin_content'>
                    <div className='content_top'>
                        <a><i className='fa fa-mobile'></i></a>
                        <a><i className='fa fa-flag'></i></a>
                        <input placeholder='手机号码'/>
                    </div>
                    <div className='content_bottom'>
                        <div className='content_left'>
                            <a><i className='fa fa-commenting'></i></a>
                            <input type='text'/>
                        </div>
                        <button className='getcode'>获取验证码</button>
                    </div>
                </div>
                <button className='login_in'>登录 / LOGIN</button>
                
            </div>
        )
    }
}
export default MobileLogin