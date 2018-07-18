import React,{Component} from 'react'
import Swiper from 'swiper'
import './index.scss'

class MovieBanner extends Component{
    constructor(props){
        super(props)
        this.state={
            moviebanner:[
                {id:1,url:'/img/movie1.jpg'},
                {id:2,url:'/img/movie2.jpg'}
            ]
        }
    }
    
    renderMovieBanner(){
        let{moviebanner}=this.state
        return moviebanner.map(item=> {
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
                    {  this.renderMovieBanner() }
                </div>
                <div className="swiper-pagination">
                </div>
            
            </div>
        )
    }
}
export default MovieBanner