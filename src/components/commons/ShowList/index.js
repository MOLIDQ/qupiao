import React,{Component} from 'react'

import ShowHot from './ShowHot'
import ShowMovie from './ShowMovie'

import './index.scss'

class ShowList extends Component {
    constructor(props){
        super(props)
        this.state={
            show_hot:[],
            show_movie:[],
           
        }
    }
    renderShowItem(){//渲染哪一个item
        let {isFilter} =this.props
        return isFilter ===1 ? <ShowHot show_hot={this.state.show_hot} title='演出'/> : <ShowMovie show_movie={this.state.show_movie} title='电影'/>

    }
    getShowHot(){//获取热门演出数据的方法
        this.Post({
            secret:'/juooo',
            url:'/index/hotsShowList',
            methods:"post",
            data:{
                city_id:6
            }
        }).then(res=>{
            this.setState({
                show_hot:res.data.data
            })  
        })
       
    }
    getShowMovie(){//获取热门电影数据的方法
        this.Get({url:'/ajax/movieOnInfoList',data:{token:''}
            }).then(res=>{
                this.setState({
                    show_movie:res.data.movieList
                })
            })
    }
    componentDidMount(){
        this.getShowMovie()
       this.getShowHot()
    }
    render(){
        return (
            <div className="show_list">
                {this.renderShowItem()}
                
            </div>
        )
    }
}
export default ShowList