import React,{Component} from 'react'
import './index.scss'
class HomeHeader extends Component{
    isFilter(){
        let{filter}=this.props
        switch(filter){
            case 0 :
                return ''
            break;
            case 1 :
                return(<span className="filter">演出列表</span>)
            break;
            case 2 :
                return(<span className="filter">电影</span>)
            break;
            case 3 :
                return(<span className="filter">验票查询</span>)
            break;
            case 4 :
                return(<span className="filter">账号登录</span>)
            break;
            case 5 :
                return(<span className="filter">注册</span>)
            break;
            default:break;
        }
    }
    renderIcon(){//渲染顶部右边图标
        let {filter}=this.props
        if( filter===3 || filter===4|| filter===5)
            return( <i className='fa fa-user-circle-o'></i>)
        else
            return( <i className='fa fa-search'></i>)

    }
    render(){
        let{isShowTabBar,changeTabBar}=this.props
        return (
            <div className="home_header" style={{position: isShowTabBar ? 'static' : 'fixed' }}>
                <div className="left">
                    <i onClick={changeTabBar} className='fa fa-bars'></i>
                </div>
                <div className="center">
                    <b></b>
                    {this.isFilter()}
                </div> 
                
                <div className="right">
                   {this.renderIcon()}
                </div>
            </div>
        )
    }
}
 export default HomeHeader