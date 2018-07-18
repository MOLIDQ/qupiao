import React from 'react';
import ReactDOM from 'react-dom';


//全局引入rem
import './moudles/rem'

//引入get post方法
import './moudles/request'

//全局引入stylesheets样式
import './stylesheets/main.scss'

// swiper
import 'swiper/dist/css/swiper.min.css'
//根组件
import {
    BrowserRouter as Router
} from 'react-router-dom'
 
import App from './App';
//脚手架自带工具
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    
, document.getElementById('root'));
registerServiceWorker();
