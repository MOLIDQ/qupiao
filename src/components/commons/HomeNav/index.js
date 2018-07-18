import React ,{Component} from 'react'
import './index.scss'
class HomeNav extends Component {
    render(){
        let {isShowTabBar,isFilter,changeComponent}=this.props
        return(
            <div className="homenav" style={{marginTop:isShowTabBar ? 0 :'.5rem'}}>
                <div onClick={changeComponent.bind(null,1)} className="left_show" style={{background:isFilter ===1 ? '#e5004f' :'#242424'}}>
                    <b></b><span>演出/Show</span>
                </div>
                <div onClick={changeComponent.bind(null,2)} className="right_movie" style={{background:isFilter ===2 ? '#e5004f' :'#242424'}}>
                    <b></b><span>电影/Movie</span>
                </div>
            </div>
        )
    }
}
export default HomeNav