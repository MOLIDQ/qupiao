import React,{Component} from   'react'

class ShowTimeNav extends Component{
    constructor(props){
        super(props)
        this.state={
            showTimeNav:[
                {id:1,url:'/img/sp3.png',desc:'演出/SHOW'},
                {id:2,url:'/img/sp3.png',desc:'日期/DATE'},
                {id:3,url:'/img/sp3.png',desc:'地点/LOCATION'},
            ]
        }
    }
    renderShowTimeNav(){
        let{showTimeNav}=this.state
      return  showTimeNav.map(item=>{
            return (<li key={item.id}>
                        <i style={{backgroundImage:'url('+ item.url+')'}}></i>
                        <p>{item.desc}</p>
                    </li>)

        })
    }
    render(){
        let{isShowTabBar}=this.props
        return(
            <ul className='showTimeNav' style={{position: isShowTabBar ? 'static' : 'fixed', top:isShowTabBar ? '' : '.5rem'}}>
                {this.renderShowTimeNav()}
            </ul>
        )
    }
}
export default ShowTimeNav