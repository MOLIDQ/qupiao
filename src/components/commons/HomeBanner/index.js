import React,{Component} from 'react'
import Swiper from 'swiper'
import './index.scss'

class HomeBaner extends Component{
    constructor(props){
        super(props)
        this.state={
            homebanner:[
                {id:1,url:'/img/ban1.jpg'},
                {id:2,url:'/img/ban2.jpg'},
                {id:3,url:'/img/ban3.jpg'},
                {id:4,url:'/img/ban4.jpg'},
                {id:5,url:'/img/ban5.jpg'},
                {id:6,url:'/img/ban6.jpg'},
                {id:7,url:'/img/ban7.jpg'},
                {id:8,url:'/img/ban8.jpg'},
                {id:9,url:'/img/ban9.jpg'}
            ],
            moviebanner:[
                {id:1,url:'/img/movie1.jpg'},
                {id:2,url:'/img/movie2.jpg'}
            ]
        }
    }
    renderHomeBanner(){
        let{homebanner}=this.state
        return homebanner.map(item=> {
                return <div  className="swiper-slide" key={item.id} >
                            <img  src={item.url} alt=""/>
                        </div>
            }
        )
       
    }
    componentDidMount(){
        new Swiper(this.el,{
            pagination:{el:'.swiper-pagination'},
            loop:true,
            autoplay:true
        })
    }
    render(){
        return(
            <div ref={el=>this.el=el} className="homebanner swiper-container">
                <div className="swiper-wrapper">
                    {  this.renderHomeBanner() }
                </div>
                <div className="swiper-pagination">
                </div>
            
            </div>
        )
    }
}
export default HomeBaner






