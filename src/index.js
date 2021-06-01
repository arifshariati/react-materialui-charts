import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//MUI
import { Paper, Card, CardHeader, CardContent, Grid } from '@material-ui/core'
// React-Number-Format
import NumberFormat from 'react-number-format'
// Recharts
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis
} from 'recharts'

// This section of code is for PieChart Onley
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
// This section of code for PieChart Ends Here

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  h2: {
    color: theme.palette.default
  },
  cardContent: {
    padding: 0
  }
}))

export const PaperLineChart = (props) => {
  const classes = useStyles()
  return (
    <Paper
      className={classes.root}
      style={{
        maxWidth: props.width,
        background: props.backgroundGradient
          ? `linear-gradient(${
              props.backgroundGradient[2] ? props.backgroundGradient[2] : 45
            }deg, ${props.backgroundGradient[0]} 30%, ${
              props.backgroundGradient[1]
            } 90%)`
          : props.backgroundColor
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} xl={12} lg={12}>
          <Grid container spacing={0}>
            <Grid item xs={6} sm={6} xl={6} lg={6}>
              <h2 style={{ float: 'left' }} className={classes.h2}>
                {props.title}
              </h2>
            </Grid>
            <Grid item xs={6} sm={6} xl={6} lg={6}>
              <h2 style={{ float: 'right' }}>
                <NumberFormat
                  value={props.value}
                  displayType={'text'}
                  thousandSeparator={true}
                />
              </h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} xl={12} lg={12}>
          <ResponsiveContainer width='100%' height={props.height}>
            <LineChart
              data={props.data}
              margin={{ top: 5, right: 5, bottom: 2, left: 5 }}
            >
              <XAxis
                dataKey='date'
                hide={true}
                allowDataOverflow={false}
                allowDuplicatedCategory={false}
                interval={'preserveStartEnd'}
                axisLine={true}
              />
              {props.dataLines.map((lines, index) => (
                <Line
                  type='monotone'
                  dataKey={props.dataLines[index]}
                  stroke={props.chartColor[index]}
                  dot={false}
                  strokeWidth={3}
                  connectNulls={true}
                  key={index}
                />
              ))}
              <Tooltip cursor={false} />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Paper>
  )
}

export const CardLineChart = (props) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.root}
      style={{
        maxWidth: props.width,
        background: props.backgroundGradient
          ? `linear-gradient(${
              props.backgroundGradient[2] ? props.backgroundGradient[2] : 45
            }deg, ${props.backgroundGradient[0]} 30%, ${
              props.backgroundGradient[1]
            } 90%)`
          : props.backgroundColor
      }}
    >
      <CardHeader
        title={props.title ? props.title : null}
        subheader={props.subheader ? props.subheader : null}
      />
      <CardContent className={classes.cardContent}>
        <ResponsiveContainer width='100%' height={props.height}>
          <LineChart
            data={props.data}
            margin={{ top: 5, right: 5, bottom: 2, left: 5 }}
          >
            <XAxis
              dataKey='date'
              hide={true}
              allowDataOverflow={false}
              allowDuplicatedCategory={false}
              interval={'preserveStartEnd'}
              axisLine={true}
            />
            {props.dataLines.map((lines, index) => (
              <Line
                type='monotone'
                dataKey={props.dataLines[index]}
                stroke={props.chartColor[index]}
                dot={false}
                strokeWidth={3}
                connectNulls={true}
                key={index}
              />
            ))}
            <Tooltip cursor={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export const PaperBarChart = (props) => {
  const classes = useStyles()

  return (
    <Paper
      className={classes.root}
      style={{
        maxWidth: props.width,
        background: props.backgroundGradient
          ? `linear-gradient(${
              props.backgroundGradient[2] ? props.backgroundGradient[2] : 45
            }deg, ${props.backgroundGradient[0]} 30%, ${
              props.backgroundGradient[1]
            } 90%)`
          : props.backgroundColor
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} xl={12} lg={12}>
          <Grid container spacing={0}>
            <Grid item xs={6} sm={6} xl={6} lg={6}>
              <h2 style={{ float: 'left' }}>{props.title}</h2>
            </Grid>
            <Grid item xs={6} sm={6} xl={6} lg={6}>
              <h2 style={{ float: 'right' }}>
                <NumberFormat
                  value={props.value}
                  displayType={'text'}
                  thousandSeparator={true}
                />
              </h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} xl={12} lg={12}>
          <ResponsiveContainer width='100%' height={props.height}>
            <BarChart
              data={props.data}
              margin={{ top: 5, right: 5, bottom: 2, left: 5 }}
            >
              <XAxis dataKey='date' hide={true} />
              {props.dataBars.map((bars, index) => (
                <Bar
                  dataKey={props.dataBars[index]}
                  stackId='a'
                  fill={props.chartColor[index]}
                  key={index}
                />
              ))}

              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Paper>
  )
}

export const CardBarChart = (props) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.root}
      style={{
        maxWidth: props.width,
        background: props.backgroundGradient
          ? `linear-gradient(${
              props.backgroundGradient[2] ? props.backgroundGradient[2] : 45
            }deg, ${props.backgroundGradient[0]} 30%, ${
              props.backgroundGradient[1]
            } 90%)`
          : props.backgroundColor
      }}
    >
      <CardHeader
        title={props.title ? props.title : null}
        subheader={props.subheader ? props.subheader : null}
      />
      <CardContent className={classes.cardContent}>
        <ResponsiveContainer width='100%' height={props.height}>
          <BarChart
            data={props.data}
            margin={{ top: 5, right: 5, bottom: 2, left: 5 }}
          >
            <XAxis dataKey='date' hide={true} />
            {props.dataBars.map((bars, index) => (
              <Bar
                dataKey={props.dataBars[index]}
                stackId='a'
                fill={props.chartColor[index]}
                key={index}
              />
            ))}

            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export const PaperPieChart = (props) => {
  const classes = useStyles()
  return (
    <Paper
      className={classes.root}
      style={{
        maxWidth: props.width,
        background: props.backgroundGradient
          ? `linear-gradient(${
              props.backgroundGradient[2] ? props.backgroundGradient[2] : 45
            }deg, ${props.backgroundGradient[0]} 30%, ${
              props.backgroundGradient[1]
            } 90%)`
          : props.backgroundColor
      }}
    >
      <Grid container spacing={0} justify='center'>
        <Grid item xs={12} sm={12} xl={12} lg={12}>
          <Grid container spacing={0}>
            <Grid item xs={6} sm={6} xl={6} lg={6}>
              <h2 style={{ float: 'left' }} className={classes.h2}>
                {props.title}
              </h2>
            </Grid>
            <Grid item xs={6} sm={6} xl={6} lg={6}>
              <h2 style={{ float: 'right' }}>
                <NumberFormat
                  value={props.value}
                  displayType={'text'}
                  thousandSeparator={true}
                />
              </h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} xl={12} lg={12}>
          <ResponsiveContainer width='100%' height={props.height}>
            <PieChart width={props.width}>
              <Pie
                data={props.data}
                cx={props.width / 2}
                cy={props.width / 2}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={props.width / 2 - 10}
                fill='#8884d8'
              >
                {props.data.map((entry, index) => (
                  <Cell
                    fill={props.chartColor[index % props.chartColor.length]}
                    key={index}
                  />
                ))}
              </Pie>
              <Tooltip cursor={true} />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Paper>
  )
}

export const CardPieChart = (props) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.root}
      style={{
        maxWidth: props.width,
        background: props.backgroundGradient
          ? `linear-gradient(${
              props.backgroundGradient[2] ? props.backgroundGradient[2] : 45
            }deg, ${props.backgroundGradient[0]} 30%, ${
              props.backgroundGradient[1]
            } 90%)`
          : props.backgroundColor
      }}
    >
      <CardHeader
        title={props.title ? props.title : null}
        subheader={props.subheader ? props.subheader : null}
      />
      <CardContent className={classes.cardContent}>
        <ResponsiveContainer width='100%' height={props.height}>
          <PieChart width={props.width}>
            <Pie
              data={props.data}
              cx={props.width / 2}
              cy={props.width / 2}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={props.width / 2 - 10}
              fill='#8884d8'
            >
              {props.data.map((entry, index) => (
                <Cell
                  fill={props.chartColor[index % props.chartColor.length]}
                  key={index}
                />
              ))}
            </Pie>
            <Tooltip cursor={true} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
