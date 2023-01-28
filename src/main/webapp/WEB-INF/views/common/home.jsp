<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="productSum" style="width: 600px;height:400px;"></div>
<div id="productCnt" style="width: 600px;height:400px;"></div>
<script type="text/javascript">
var list1 = [];
var list2 = [];
var list3 = [];
var param = {};
ajax("/showProductChart", param, function(returnData){
	var gridData = returnData.codeList;
	gridData.forEach(function(data) {
		list1.push(data[0]); // 판매단위
		list2.push(data[1]); // count
		list3.push(data[2]); // 상품가격 sum
		var sumChart = echarts.init(document.getElementById('productSum'));
		var option = {
		  title: {
		    text: '판매단위별 상품가격'
		  },
		  tooltip: {},
		  legend: {
		    data: ['상품가격합']
		  },
		  xAxis: {
			type: 'category',
		    data: list1
		  },
		  yAxis: {
			  type: 'value'
		  },
		  series: [
		    {
		      name: '상품가격합',
		      type: 'line',
		      data: list3
		    }
		  ]
		};
		sumChart.setOption(option);
		
		var cntChart = echarts.init(document.getElementById('productCnt'));
		var optionCnt = {
		  title: {
		    text: '판매단위별 상품개수'
		  },
		  tooltip: {},
		  legend: {
		    data: ['상품개수']
		  },
		  xAxis: {
			type: 'category',
		    data: list1
		  },
		  yAxis: {
			  type: 'value'
		  },
		  series: [
		    {
		      name: '상품개수',
		      type: 'line',
		      data: list2
		    }
		  ]
		};
		cntChart.setOption(optionCnt);
	});
});

</script>