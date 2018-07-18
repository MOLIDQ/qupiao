import React ,{Component} from 'react'
import HomeHeader from '../../commons/HomeHeader'
import TabBar from '../../commons/TabBar'

import MobileLogin from './mobilelogin'
import './index.scss'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            isShowTabBar:false
        }
        this.changeTabBar=this.changeTabBar.bind(this)
    }
    changeTabBar(){//修改控制显示侧栏的数据
        this.setState({
            isShowTabBar:!this.state.isShowTabBar
        })
    }
    renderTabBar(){//渲染侧部栏的方法
        let{isShowTabBar}=this.state
        if(!isShowTabBar) return ''
        return <TabBar/>
    }
    render(){
        return(
            <div className="login">
                {this.renderTabBar()}
                <div className="show_login">
                    <HomeHeader
                    filter={4}
                    isShowTabBar={this.state.isShowTabBar}
                    changeTabBar={this.changeTabBar}
                    />
                    <div className='login_method'>
                            <div className='mobile_login'>
                                <i className='fa fa-mobile'></i>
                                <span>短信快捷登录</span>
                            </div>
                            <div className='account_login'>
                                 <i className='fa fa-user'></i>
                                <span>账号登录</span>
                            </div>
                    </div>
                    <MobileLogin/>
                </div>
               
            </div>
        )
    }
}
export default Login