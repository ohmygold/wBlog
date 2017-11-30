import React from 'react';
import { Card } from 'antd';


class Work extends React.Component{
  render(){
    return(
        <div style={{width:'100%'}}>
     
	        <Card bordered={true} style={{ margin:'40px', background: '#ECECEC', padding: '30px' }}>
	        	<h1>北京金马莲花电子商务有限公司<span style={{ fontSize:'20px'}}>2016.3-2017.10</span></h1>
	        	<p style={{marginTop:'30px'}}>负责产品的前端开发，优化代码，提升产品兼容性和易用性，根据产品需求，架构前端解决方案，与产品经理和后端工程师密切合作，实现产品交互流程和视觉开发，把控代码质量，维护产品前端开发框架和开发规范，优化工作流程，支撑面向web，移动端和大屏幕应用的交互应用开发</p>
	        </Card>
	       
	        <Card bordered={true} style={{ margin:'40px', background: '#ECECEC', padding: '30px' }}>
	        	<h1>北京牵引力广告有限公司<span style={{ fontSize:'20px'}}>2014.10-2016.3</span></h1>
	        	<p style={{marginTop:'30px'}}>根据产品需求和UI效果图利用atom编程软件进行div/css标准网页制作，Js逻辑设计与开发、jQuery特效编写；解决主流浏览器兼容性问题，对网站用户体验性能进行优化，完成产品前端展示效果和交互功能，完成线上产品用户体验改进工作。</p>
	        </Card>
	       
	        <Card bordered={true} style={{ margin:'40px', background: '#ECECEC', padding: '30px' }}>
	        	<h1>作品链接：</h1>
	        	<a href='http://www.fschool365.cn/' style={{paddingLeft:'20px',fontSize:'20px',marginTop:'20px',textDecoration:'none'}}>卓聚教育</a>
	        	<a href='http://morethan.cc/index.php?c=index&a=index' style={{paddingLeft:'20px',fontSize:'20px',marginTop:'20px',textDecoration:'none'}}>魔赞商城</a>
	        	<a href='http://www.gotosoft.net/' style={{paddingLeft:'20px',fontSize:'20px',marginTop:'20px',textDecoration:'none'}}>Gotosoft</a>
	        	<a href='http://www.safeofzone.cn/' style={{paddingLeft:'20px',fontSize:'20px',marginTop:'20px',textDecoration:'none'}}>电商虚拟产业园</a>
	        	<a href='https://www.cherongzi.com/' style={{paddingLeft:'20px',fontSize:'20px',marginTop:'20px',textDecoration:'none'}}>车融资</a>
	        </Card>
        
      </div>
    )
  }
}

export default Work;
