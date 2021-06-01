import { Divider } from 'material-ui'
import React from 'react'

import { PaperLineChart } from 'react-materialui-charts'
import 'react-materialui-charts/dist/index.css'
const data = require('./data')
const App = () => {
  return (
    <div class='root'>
      <PaperLineChart
        width={345}
        title='Arif Shariati'
        value='54999'
        data={data}
        chartColor='#f50057'
        backgroundColor='#f9f9f9'
      />
    </div>
  )
}

export default App
