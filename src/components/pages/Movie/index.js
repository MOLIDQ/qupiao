import React ,{Component} from 'react'
import HomeHeader from '../../commons/HomeHeader'
import TabBar from '../../commons/TabBar'
import HomeNav from '../../commons/HomeNav'
import MovieBanner from '../../commons/MovieBanner'
import ShowList from '../../commons/ShowList'
import './index.scss'

class Movie extends Component{
    constructor(props){
        super(props)
        this.state={
            isShowTabBar:false,
            isFilter:1
        }
        this.changeTabBar=this.changeTabBar.bind(this)
        this.changeComponent = this.changeComponent.bind(this)
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
    changeComponent(id){//修改控制显示组件的数据
        this.setState({
            isFilter:id
        })
    }
    render(){
        return(
            <div className="movie">
                 {this.renderTabBar()}
                <div className="show_movie">
                    <HomeHeader filter={2}
                     isShowTabBar={this.state.isShowTabBar}
                     changeTabBar={this.changeTabBar}
                    />
                    <HomeNav
                    isShowTabBar={this.state.isShowTabBar}
                    isFilter={this.state.isFilter}
                    changeComponent={this.changeComponent}
                    />
                    <MovieBanner/>
                    <ShowList isFilter={this.state.isFilter}/>
                </div>
               
            </div>
        )
    }
}
export default Movie