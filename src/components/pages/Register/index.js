import React ,{Component} from 'react'
import HomeHeader from '../../commons/HomeHeader'
import TabBar from '../../commons/TabBar'
import './index.scss'

class Register extends Component{
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
            <div className="register">
                {this.renderTabBar()}
                <div className="show_register">
                    <HomeHeader filter={5}
                     isShowTabBar={this.state.isShowTabBar}
                     changeTabBar={this.changeTabBar}
                    />
                </div>
               
            </div>
        )
    }
}
export default Register