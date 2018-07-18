import React ,{Component} from 'react'

class ShowHot extends Component{
    renderItem(){//渲染热门演出列表
        let {show_movie}=this.props
      return   show_movie.map(item=>{
          let html= ''
          if(item.sc>0)
            html=<i>观众评&nbsp;<span>{item.sc}</span></i>   
          else
            html=<i><span>{item.wish}</span>&nbsp;人想看</i>
            return (
                <dl className="show_item" key={item.id}>
                        <dt >
                           <img src={(item.img).replace('/w.h','')} alt=""/> 
                        </dt>
                        <dd>
                            <p>{item.nm}</p>
                            <p >{html}</p>
                            <p>{item.star}</p>
                            <p>{item.showInfo}</p>
                        </dd>
                </dl>
            )
        })
        
    }
    render(){
        return (
            <div className="show_movie">
                <div className="title">
                    <span>热门电影</span><span>更多></span>
                </div>
                {this.renderItem()}
            </div>
        )
    }
}
export default ShowHot