<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="productSum" style="width: 1200px;height:500px;"></div>
<div id="productCnt" style="width: 1200px;height:500px;"></div>
<div id="productSumOfCate" style="width: 1200px;height:500px;"></div>
<script type="text/javascript">
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
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

// 상품 카테고리별 상품가 총합
ajax("/showSumOfProduct", param, function(returnData){
	var gridDataSum = returnData.codeList;
	gridDataSum.forEach(function(data) {
		list4.push(data[0]); // 상품 카테고리
		list5.push(data[1]); // 상품가격 sum
		var sumChartOfCate = echarts.init(document.getElementById('productSumOfCate'));
		var optionSum = {
		  title: {
		    text: '상품 카테고리별 상품가격 총합'
		  },
		  tooltip: {},
		  legend: {
		    data: ['상품가격합']
		  },
		  xAxis: {
			type: 'category',
		    data: list4
		  },
		  yAxis: {
			  type: 'value'
		  },
		  series: [
		    {
		      name: '상품가격합',
		      type: 'line',
		      data: list5
		    }
		  ]
		};
		sumChartOfCate.setOption(optionSum);
	});
	console.log("test")
	console.log(list4)
});

</script>