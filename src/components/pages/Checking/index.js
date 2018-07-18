import React ,{Component} from 'react'
import HomeHeader from '../../commons/HomeHeader'
import TabBar from '../../commons/TabBar'
import './index.scss'

class Checking extends Component{
    constructor(props){
        super(props)
        this.state={
            isShowTabBar:false
        }
        this.changeTabBar=this.changeTabBar.bind(this)
    }
    changeTabBar(){//修改控制显示侧栏的数据
        this.setState({
            isShowTabBar:!this.state.isShowTabBar
        })
    }
    renderTabBar(){//渲染侧部栏的方法
        let{isShowTabBar}=this.state
        if(!isShowTabBar) return ''
        return <TabBar/>
    }
    render(){
        let{isShowTabBar}=this.state
        console.log(isShowTabBar)
        return(
            <div className="checking">
                {this.renderTabBar()}
                <div className="show_checking">
                    <HomeHeader 
                    filter={3}
                    isShowTabBar={this.state.isShowTabBar}
                    changeTabBar={this.changeTabBar}
                    />
                     <div className='check_main' style={{marginTop: isShowTabBar ? '' : '.5rem'}}>
                    <img src='/img/chpic.png' alt=''/>
                    <div className='check_text'>
                        趣票销售的所有商品（票品）保证安全 有效，您可放心购买。当您从其他渠道 购买了带有趣票logo的门票时，您可以 通过输入票面验证码查询票品信息。
                    </div>
                    <div className='check_icon'>
                        <a className='icon_left'><i className='fa fa-ticket'></i><em className='icon_left_text'>纸质票</em></a>
                        <a className='icon_right'><i className='fa fa-qrcode '></i><em className='icon_right_text'>电子票</em></a>
                    </div>
                    <input placeholder='请输入票面防伪编码'/>
                    <button className='check_immed'>立即验证</button>
                </div>
                <div className='check_footer'>
                    <div className='footer_text'>
                        <div className='footer_logo'></div>
                        <div className='footer_phone'>
                            <a href="">
                                 客服热线 :
                                <strong>4007-180-666</strong>
                            </a>
                            <p className='footer_company'>深圳趣票网科技有限公司</p>
                        </div>
                    </div>
                    <div className='copyright'>Copyright © 2017 粤ICP备10036146号</div>
                </div>
                </div>
                
            </div>
        )
    }
}
export default Checking