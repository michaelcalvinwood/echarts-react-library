import lodash from 'lodash';

export const template = {
    color: [
      '#c23531',
      '#2f4554',
      '#61a0a8',
      '#d48265',
      '#91c7ae',
      '#749f83',
      '#ca8622',
      '#bda29a',
      '#6e7074',
      '#546570',
      '#c4ccd3'
    ],
    info: {
      containerWidth: 0,
      containerHeight: 0,
    },
    tooltip: {},
    title: {
        text: "hello"
    },
    legend: [],
    grid: [],
    xAxis: [],
    yAxis: [],
    graphic: [],
    series: [],
    toolbox: {
      feature: {
        
        dataView: {
          readOnly: false,
        },
        saveAsImage: {},
      }
    },
  };

  /*
   * data: array
   * labels: array
   */

export const render = (myChart, option) => {
    option && myChart.setOption(option);
}

export const createHorizontalBarChart = (index, data, labels, option, setOption) => {
    if (option.grid.length !== index) return;
    const copy = lodash.cloneDeep(option)

    copy.grid.push({id: index})

    copy.yAxis.push({
        type: 'category',
        gridIndex: index
    })
    if (labels.length) copy.yAxis[index].data = lodash.cloneDeep(labels);
    
    copy.xAxis.push({
        type: 'value',
        gridIndex: index
    })


    copy.series.push({
        type: 'bar',
        xAxisIndex: index,
        yAxisIndex: index,
        data: data.map(d => {
            return ({
                value: d,
                itemStyle: {
                    color: template.color[0]
                }
            })
        })
    })

    console.log('here')
    setOption(copy);
    console.log('there')
}

export const changeBarColor = (gridIndex, barIndex, color, option, setOption) => {
    if (option.series[gridIndex].data[barIndex].itemStyle.color === color) return;
    const copy = lodash.cloneDeep(option)
    copy.series[gridIndex].data[barIndex].itemStyle.color = color;
    setOption(copy)
}