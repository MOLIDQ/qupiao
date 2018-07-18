import React ,{Component} from 'react'
import {Link} from 'react-router-dom' 

class ShowHot extends Component{
    renderShowHot(){//渲染热门演出的方法
        let{show_hot}=this.props
      return show_hot.map(curr=>{
            return (
                    <Link to={'/detial/'+curr.id} className="show_hot_item" key={curr.id}>
                        <div className="left img-box">
                            <img width="100%" src={curr.pic} alt=""/>
                        </div>

                        <div className="right info-box">
                            <div className="info-title">{curr.show_name}</div>
                            <div className="time">{curr.display_show_time}</div>
                            <div className="city-address">
                                <span>[{curr.city_name}]</span>
                                <span>{curr.venue_name}</span>
                            </div>
                            <div className="price">
                                ￥<span>{curr.show_price}</span>
                            </div>
                            
                        </div>
                
                    </Link>

            )
        })

    }
    render(){
        return (
            <div className="show_hot">
                <div className="title">
                        <span>热门演出</span><span>更多></span>
                </div>
                {this.renderShowHot()}  
            </div>
        )
    }
}
export default ShowHot