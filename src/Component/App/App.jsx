import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddFunction, ClearFunction, RemoveFunction } from '../actions/index'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '@fortawesome/fontawesome-free'

class App extends Component {
  state = {
    text: '',
    date: new Date(),
  }

  mapOnData = () => {
    const { data } = this.props
    return (
      <ul className='list-group'>
        {data.map((dataItem) => {
          return (
            <li
              key={dataItem.id}
              className='list-group-item d-flex flex-row shadow p-3 mb-3 rounded'
            >
              <span className='p-2 bd-highlight border-right border-top'>
                {dataItem.text}
              </span>
              <span className='p-2 bd-highlight border-right border-bottom'>
                {moment(new Date(dataItem.date)).fromNow()}
              </span>
              <span onClick={() => this.props.RemoveFunction(dataItem.id)}>
                <i className='fas fa-window-close'></i>
              </span>
            </li>
          )
        })}
      </ul>
    )
  }
  render() {
    return (
      <main className='app'>
        <div className='container'>
          <div className='input mb-2'>
            <div className='icon'>
              <i className='fab fa-react'></i>
            </div>
            <h1 className='text-center'>To Do List & Reminder</h1>
            <input
              type='text'
              value={this.state.text}
              placeholderText='Add Your Plan !!'
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <DatePicker
              placeholderText='Enter Date'
              selected={this.state.date}
              value={this.state.date}
              onChange={(date) => this.setState({ date: date })}
              showTimeSelect
            />

            <button
              className='btn btn-primary btn-block'
              onClick={() => {
                this.props.AddFunction(this.state.text, this.state.date)
                this.setState({
                  text: '',
                  date: '',
                })
              }}
            >
              Add
            </button>
            {this.mapOnData()}
            <button
              className='btn btn-danger btn-block'
              onClick={this.props.ClearFunction}
            >
              Clear
            </button>
          </div>
        </div>
      </main>
    )
  }
}

// function MapDispatchToProps(dispatch) {
//   return {
//     add_reminder: dispatch(Add_Reminder()),
//   }
// }
function mapStateToProps(state) {
  return { data: state }
}
export default connect(mapStateToProps, {
  AddFunction,
  RemoveFunction,
  ClearFunction,
})(App)
