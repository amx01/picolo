import React, { Component } from 'react'
import TableRow from '../utility/table/tableRow'
import InputMoment from 'input-moment'
import moment from 'moment'
import {
  NumberInput,
  TextInput,
  DateTime,
} from '../utility/inputs'
import { bindActionCreators } from 'redux'

class PlaceBets extends Component {
  constructor(props){
    super(props)

    this.state = {
      showDateTimePicker: false,
      selectedDate: moment(),
      dateTimePlaceholder: "",
      addBetMenu: [
        {
          text: "Coin you'd like to bet on",
          placeholder: "Select coin",
          type: "text"
        },
        {
          text: "Price prediction (USD)",
          placeholder: "Enter dollar amount",
          type: "num"
        },
        {
          text: "Your bet amount (PIC)",
          placeholder: "Enter PIC amount",
          type: "num"
        },
        {
          text: "Bet end date (PST)",
          placeholder: "Click for time picker",
          type: "datetime"
        },
      ]
    }
    this.renderBetRows = this.renderBetRows.bind(this)
    this.confirmBet = this.confirmBet.bind(this)
    this.showDateTimePicker = this.showDateTimePicker.bind(this)
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this)
    this.handleDateTimeSave = this.handleDateTimeSave.bind(this)
  }

  shouldComponentUpdate(){
    return true
  }

  showDateTimePicker(){
    this.setState({
      showDateTimePicker: true
    })
  }

  renderBetRows(){
    const addBetMenu = this.state.addBetMenu
    return addBetMenu.map((ele, idx) => {
      const { text, type, placeholder } = ele
      let inputType
      let dateTimeInput
      switch(type) {
       case "text":
         inputType = <TextInput placeholder={placeholder}/>
         break
       case "num":
         inputType = <NumberInput placeholder={placeholder}/>
         break
       case "datetime":
         inputType = <DateTime inputValue={this.state.dateTimePlaceholder || "Click for time picker"} onClickHandler={this.showDateTimePicker}/>
         dateTimeInput = 'date-time-input'
         break
       default:
        return ""
      }
      return (
        <div className="content" key={idx}>
          <div className="cell left-padding">
            <div className="left-float medium-bold">{text}</div>
          </div>
          <div className={"cell " + dateTimeInput}>
            <div className="input">{ inputType }</div>
          </div>
        </div>
      )
    })
  }

  confirmBet(){

  }

  handleDateTimeChange(moment){
    let selectedDateTime = moment.format("MM/DD/YYYY HH:mm")
    let formattedDateTime = selectedDateTime.split(" ")
    formattedDateTime.splice(1, 0, 'at')
    formattedDateTime.join(" ")
    this.setState({
      dateTimePlaceholder: selectedDateTime
    })
  }

  handleDateTimeSave(){
    console.log("handleSave")
    this.setState({
      showDateTimePicker: false
    })
  }

  render() {
    const { showDateTimePicker } = this.state
    return (
      <div className="relative">
        <div className="calendar">
        { showDateTimePicker &&
          <InputMoment
              moment={this.state.selectedDate}
              onChange={this.handleDateTimeChange}
              minStep={5}
              onSave={this.handleDateTimeSave}
          />
        }
        </div>
        <div className="table medium-width">
          <div className="name">New Bets</div>
          <div className="body transparent-background">
          <div className="card">
            {this.renderBetRows()}
          </div>
          <div className="text right-float">
            <div className="btn orange" onClick={this.confirmBet}>Confirm Bet</div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  // props: state.foo,
}

const mapDispatchToProps = dispatch => bindActionCreators({
  // action,
}, dispatch)

export default PlaceBets
