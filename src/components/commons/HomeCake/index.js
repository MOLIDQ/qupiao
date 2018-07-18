import React,{Component} from 'react'
import './index.scss'
class HomeCake extends Component{
    constructor(props){
        super(props)
        this.state={
            home_cake:[
                {id:1,url:'/img/icon.png',desc:"演唱会"},
                {id:2,url:'/img/icon.png',desc:"音乐会"},
                {id:3,url:'/img/icon.png',desc:"话剧歌剧"},
                {id:4,url:'/img/icon.png',desc:"体育赛事"},
                {id:5,url:'/img/icon.png',desc:"亲子儿童"},
                {id:6,url:'/img/icon.png',desc:"戏曲舞蹈"},
                {id:7,url:'/img/icon.png',desc:"限量周边"},
                {id:8,url:'/img/icon.png',desc:"曲艺杂谈"},
                {id:9,url:'/img/icon.png',desc:"休闲度假"},
                {id:10,url:'/img/icon.png',desc:"全部类型"}
            ],
            movie_cake:[
                {id:1,url:"/img/sp3.png",desc:'正在热映'},
                {id:2,url:"/img/sp3.png",desc:'选择影院'},
                {id:3,url:"/img/sp3.png",desc:'即将上映'}
            ]
        }
    }
    renderCake(){
        let{home_cake}=this.state
        return home_cake.map(curr=>{
            return (
                <li key={curr.id} className='home_cake_item'>
                    <em style={{backgroundImage:'url('+curr.url+')'}}></em>
                    <p>{curr.desc}</p>
                </li>
            )
        })
    }
    renderMovieCake(){
        let{movie_cake}=this.state
        return movie_cake.map(curr=>{
            return (
                <li key={curr.id} className='movie_cake_item'>
                    <span><em style={{backgroundImage:'url('+curr.url+')'}}></em></span>
                    <p>{curr.desc}</p>
                </li>
            )
        })
    }
    render(){
        let {isFilter}=this.props//style={{marginTop:isTop ? '' : '1.07rem'}}
        return(
            <ul className="home_cake" >
               {isFilter ===1 ? this.renderCake() : this.renderMovieCake()}     
            </ul>
        )
    }
}
export default HomeCake