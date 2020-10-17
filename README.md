# react-materialui-charts

React Material UI Card and Papper component with reCharts ( for now supports Line Chart, Bar Chart and Pie Chart ). More Chart patterns will be implemented in near future. Do update your npm package for latest package updates.

### Features

1. Integration of reChart with Material UI Paper and Card component
2. solid and gradient background
3. variable width and height property

[![NPM](https://img.shields.io/npm/v/react-materialui-charts.svg)](https://www.npmjs.com/package/react-materialui-charts) [![downloads](https://img.shields.io/npm/dw/react-materialui-charts)](https://www.npmjs.com/package/react-materialui-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-materialui-charts
```

## Usage

```jsx
import React, { Component } from 'react'

import { PaperLineChart } from 'react-materialui-charts'

class Example extends Component {
  render() {
    return (
      <PaperLineChart
        width={500}
        height={150}
        title='Paper Line Chart'
        value='3990'
        data={data}
        dataLines={['like', 'comment', 'contest']}
        chartColor={['#f50057', '#2196f3', '#ff5722']}
        backgroundGradient={['#FE6B8B', '#FF8E53']}
      />
    )
  }
}
```

### PaperLineChart & CardLineChart

1. width, height, data, dataLines and chartColor props must be supplied.
2. if backgroundGradient props is not provided, default white background will be picked. Also, if only one color provided, it will pick that as solid backgound color.

```jsx
<PaperLineChart
  width={500}
  height={150}
  title='Paper Line Chart'
  value='3990'
  data={data}
  dataLines={['like', 'comment', 'contest']}
  chartColor={['#f50057', '#2196f3', '#ff5722']}
  backgroundGradient={['#FE6B8B', '#FF8E53']}
/>
```

### PaperBarChart & CardBarChart

1. width, height, data, dataLines and chartColor props must be supplied.
2. if backgroundGradient props is not provided, default white background will be picked. Also, if only one color provided, it will pick that as solid backgound color.

```jsx
<PaperBarChart
  width={500}
  height={150}
  title='Paper Bar Chart'
  value='3990'
  data={data}
  dataLines={['like', 'comment']}
  chartColor={['#f50057', '#2196f3']}
  backgroundGradient={['#FE6B8B', '#FF8E53']}
/>
```

### PaperPieChart & CardPieChart

1. width, height, data, dataLines and chartColor props must be supplied.
2. if backgroundGradient props is not provided, default white background will be picked. Also, if only one color provided, it will pick that as solid backgound color.

```jsx
<PaperPieChart
  width={500}
  height={500}
  title='Paper Pie Chart'
  value='450'
  data={PieChartData}
  chartColor={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
  backgroundGradient={['#FE6B8B', '#FF8E53']}
/>
```

### Line & Bar Chart Data Structure

1. width, height, data, dataLines and chartColor props must be supplied.
2. if backgroundGradient props is not provided, default white background will be picked. Also, if only one color provided, it will pick that as solid backgound color.

```bash
[
  {
    date: '1/9/2020',
    like: 120,
    comment: 50,
    contest: 70
  }
]
```

### Pie Chart Data Structure

1. width, height, data, dataLines and chartColor props must be supplied.
2. if backgroundGradient props is not provided, default white background will be picked. Also, if only one color provided, it will pick that as solid backgound color.

```bash
[
  {
    name: 'Google',
    value: 400
  },
  {
    name: 'Facebook',
    value: 300
  },
  {
    name: 'Twitter',
    value: 300
  },
  {
    name: 'LinkedIn',
    value: 200
  }
]
```

## Package Upate

```bash
npm update
```

## License

MIT © [arifshariati](https://github.com/arifshariati)
