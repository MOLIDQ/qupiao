import React ,{Component} from 'react'
import HomeHeader from '../../commons/HomeHeader'
import TabBar from '../../commons/TabBar'
import ShowTimeNav from './ShowTimeNav'
import HomeCake from '../../commons/HomeCake'
import ShowList from '../../commons/ShowList'
import './index.scss'


class ShowTime extends Component{
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
        let {isShowTabBar}=this.state
        return(
            <div className="showtime">
                {this.renderTabBar()}
                <div className="show_showtime" style={{paddingTop:isShowTabBar ? '' : '1.07rem'}}>
                    <HomeHeader filter={1}
                     isShowTabBar={this.state.isShowTabBar}
                     changeTabBar={this.changeTabBar}
                     changeTop={this.changeTop}
                    />
                    <ShowTimeNav isShowTabBar={this.state.isShowTabBar}/>
                    <HomeCake isFilter={1}
                    isTop={this.state.isTop}
                    />
                    <ShowList isFilter={1}/>
                </div>
                
               
            </div>
        )
    }
}
export default ShowTime