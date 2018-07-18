import React,{Component} from 'react'
import HomeHeader from '../../commons/HomeHeader'
import TabBar from '../../commons/TabBar'
import HomeNav from '../../commons/HomeNav'
import HomeBanner from '../../commons/HomeBanner'
import MovieBanner from '../../commons/MovieBanner'
import HomeCake from '../../commons/HomeCake'
import ShowList from '../../commons/ShowList'
import './index.scss'
class Home extends Component{
    constructor(props){
        super(props)
         this.state={
             isShowTabBar:false,
             isFilter:1
         }
        this.changeTabBar = this.changeTabBar.bind(this)
        this.changeComponent = this.changeComponent.bind(this)
    }
    changeTabBar(){//修改控制显示侧栏的数据
        this.setState({
            isShowTabBar:!this.state.isShowTabBar
        })
    }
    changeComponent(id){//修改控制显示组件的数据
        this.setState({
            isFilter:id
        })
    }
    componentDidMount(){
        let{isShowTabBar}=this.state
        if(isShowTabBar){
            document.ontouchstart=function(){
                return false;
            }
        }
    }
    render(){
        let{isFilter,isShowTabBar}=this.state
        return(
           <div className="container">
                { isShowTabBar ? <TabBar isShowTabBar={this.state.isShowTabBar}/> : ''}
                <div className="home" style={{ marginLeft: isShowTabBar ? '80%' : ''}}>
                     {/* 头部 */}
                    <HomeHeader 
                        filter={0} 
                        isShowTabBar={this.state.isShowTabBar}
                        changeTabBar={this.changeTabBar}
                     />
                     <HomeNav 
                        isShowTabBar={this.state.isShowTabBar}
                        isFilter={this.state.isFilter}
                        changeComponent={this.changeComponent}
                    /> 
                    { isFilter ===1 ? <HomeBanner/> : <MovieBanner/> }
                    <HomeCake 
                    isShowTabBar={this.state.isShowTabBar}
                    isFilter={this.state.isFilter}
                    />
                    <ShowList isFilter={this.state.isFilter}/>
                   
                </div>
                  
            </div>
        )
    }
}
export default Home
//changeTabBar={this.changeTabBar}


