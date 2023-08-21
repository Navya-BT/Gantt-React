import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TimeLine from 'react-gantt-timeline';
import './style.css';

const config = {
  header: {
    top: {
      style: {
        backgroundColor: '#95aacd',
        color: 'white',
        fontSize: 12,
      },
    },
    middle: {
      style: {
        backgroundColor: 'lightgrey',
        fontSize: 9,
      },
    },
    bottom: {
      style: {
        background: 'white',
        fontSize: 9,
        color: 'grey',
      },
      selectedStyle: {
        background: 'linear-gradient( #d011dd ,#d011dd)',
        fontWeight: 'bold',
        color: 'white',
      },
    },
  },
  taskList: {
    title: {
      label: 'Stages',
      style: {
        backgroundColor: '#5b7bb2',
        color: 'White',
      },
    },
    task: {
      style: {
        backgroundColor: '',
        color: 'black',
      },
    },
    verticalSeparator: {
      style: {
        backgroundColor: '#fbf9f9',
      },
      grip: {
        style: {
          backgroundColor: '#5b7bb2',
        },
      },
    },
  },
  dataViewPort: {
    rows: {
      style: {
        backgroundColor: 'white',
        borderBottom: 'solid 0.1px lightgrey',
      },
    },
    task: {
      showLabel: true,
      style: {},
    },
  },
};

class Gantt extends Component {
  constructor(props) {
    super(props);
    let d1 = new Date();
    let d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
    this.data = [
      {
        id: 1,
        start: d1,
        end: '2020.04.23',
        name: 'Setup',
        color: '#81c784',
      },
      {
        id: 2,
        start: d3,
        end: d4,
        name: 'Task 2',
        color: '#ffab00',
      },
      {
        id: 3,
        start: d3,
        end: d4,
        name: 'Task 2',
        color: '#ffab00',
      },
      {
        id: 4,
        start: d3,
        end: d4,
        name: 'Task 2',
        color: '#ffab00',
      },
    ];
  }

  render() {
    return (
      <div className='app-container'>
        <div className='time-line-container'>
          <TimeLine data={this.data} links={this.links} config={config} />
        </div>
      </div>
    );
  }
}

export default Gantt;
