import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import { Line } from 'react-chartjs-2';

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex != prevProps.updateIndex) {
      this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.state.performanceData != null) {
      dataIndex = (
        <div id="index">
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.distance}m, {item.data.message}</div>
          })}
        </div>
      )
    }
    const distances = []
    const labels = []

    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
      })
    }

    let dataForLineDiagram = {
      datasets: [
        {
          data: distances,
          label: "Historical Data",
          fill: true, 
          borderColor: "#A28C74",
          backgroundColor: "#DDCCAF",
          pointBackgroundColor: "#3D2C23"
        }
      ],
      labels: labels
    };

    return (
      <div>
        {dataIndex}
        <Line data={dataForLineDiagram}/>
      </div>
    )
  }      
}

export default DisplayPerformanceData;