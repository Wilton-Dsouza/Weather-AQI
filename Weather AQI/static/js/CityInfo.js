const setGauge = (aqiValue) => {
    var chartDom = document.getElementById('aqiChart');
    var myChart = echarts.init(chartDom);
    var option;
  
    option = {
      series: [
        {
          type: 'gauge',
          min: 0,
          max: 350,
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.14285714285, '#00FF00'],
                [0.2857142857, '#ffff00'],
                [0.42857142855, '#ff8c00'],
                [0.5714285714, '#ff0000'],
                [0.8571428571, '#663399'],
                [1, '#7e0023']
              ]
            }
          },
          splitNumber: 7,
          pointer: {
            itemStyle: {
              color: 'auto'
            },
            length: '60%'
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'white',
            distance: 10,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} AQI',
            color: 'auto',
            fontSize: 20
          },
          data: [
            {
              value: aqiValue
            }
          ]
        }
      ]
    };
  
    myChart.setOption(option);
  }