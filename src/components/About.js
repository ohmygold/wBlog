import React from 'react';
import echarts from 'echarts';
import { Card } from 'antd';

class About extends React.Component{
 componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
        text: '我的技能展示',
        textStyle:{
          color: 'teal'
        },
        left:'center'
      },
      tooltip: {},
      xAxis: {
          data: ['html','css','js','react','node','photoshop']
      },
      yAxis: {},
      series: [{
          name: '熟练度',
          type: 'bar',
          data: [90, 95, 65, 80, 70, 60]
      }]
    });
  }
  render(){
    return(
    	<div style={{width:'100%'}}>
    		<Card bordered={true} style={{ margin:'40px', background: '#ECECEC', padding: '30px' }}>
	        	<h1>个人简介：</h1>
	        	<h2 style={{marginTop:'30px'}}>王伟</h2>
	        	<p>电话：15801308941/15555514149</p>
			    <p>邮箱：499452621@qq.com</p>
			    <p>毕业院校：西南交通大学希望学院</p>
	        	<p style={{marginTop:'30px'}}>个人评价：一个幽默，踏实肯干的前端程序员</p>
	        </Card>
	      <div  style={{width:'100%',height:'50%'}}> 
	        <div id='main' style={{width:'100%',height:'80%',maxWidth:'600px',margin:'0 auto',minWidth:'400px'}}></div>
	      </div>
	    </div>
    )
  }
}

export default About;
