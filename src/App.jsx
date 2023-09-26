import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as echartUtils from './utils/echarts';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [option, setOption] = useState(echartUtils.template)
  
  const theChart = useRef(null)
  const myChart = useRef(null)

  const data = [205, 150, 80, 70, 110, 130, 24];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];



  useEffect(() => {
    var chartDom = theChart.current;
    if (!myChart.current) myChart.current = echarts.init(chartDom);
    const gridId = echartUtils.createHorizontalBarChart(0, data, labels, option, setOption)
    echartUtils.changeBarColor(0, 1, 'blue', option, setOption)

    echartUtils.changeBarColor(0, 3, 'yellow', option, setOption)

    option && myChart.current && myChart.current.setOption(option);
    })

  return (
    <>
      <div id="myChart" ref={theChart} style={{width: "500px", height: "500px"}}></div>
       
    </>
  )
}

export default App
