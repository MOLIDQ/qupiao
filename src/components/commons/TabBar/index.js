import React,{Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
class TabBar extends Component{
    render(){
        let{isShowTabBar}=this.props
        return(
            <div className="TabBar" style={{position: isShowTabBar ? 'fixed' : 'static'}}>
                <div className="up">
                    <NavLink to='/login'>登录&nbsp;/&nbsp;LOGIN</NavLink>
                    <NavLink to='/register'>注册&nbsp;/&nbsp;REGISTER</NavLink>
                    <img src="/img/logo.png" alt=''/>
                </div>
                <ul className="down">
                    <NavLink exact to='/'  className='active2'><i></i><span>首页&nbsp;&nbsp;/&nbsp;HOME</span></NavLink>
                    <NavLink to = '/vip'><i></i><span>会员&nbsp;&nbsp;/&nbsp;VIP</span></NavLink>
                    <NavLink to = '/show-time'><i></i><span>演出&nbsp;&nbsp;/&nbsp;SHOW</span></NavLink>
                    <NavLink to = '/movie'><i></i><span>电影&nbsp;&nbsp;/&nbsp;MOVIE</span></NavLink>
                    <NavLink to = '/checking'><i></i><span>验票&nbsp;&nbsp;/&nbsp;CHECKING</span></NavLink>
                    <NavLink to = '/service-center'><i></i><span>客服&nbsp;&nbsp;/&nbsp;ONNavLinkNE SERVICE</span><p>工作日9:00~20:00 周末9:30~18:30</p></NavLink>
                </ul>
            </div>
        )

    }
}
export default TabBar