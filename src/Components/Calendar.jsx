import React from "react";
import {format, subMonths, endOfWeek, addMonths, isSameDay, isSameMonth, startOfWeek, addDays, startOfMonth, endOfMonth} from "date-fns";
import '../Style/Calendar.scss'

export class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    daysLetter: ["S", "M", "T", "W", "T" , "F", "S"],
    open: false,
    date: null
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="calendar__header">
        <div className="icon" onClick={this.prevMonth}>
          chevron_left
        </div>
          <span>{format(this.state.currentMonth, dateFormat)}</span>
          <div className="icon" onClick={this.nextMonth}>chevron_right</div>
      </div>
    );
  }

  getDate = (...args) => {
    this.setState({
      open: !this.state.open,
      date: args
    },this.getInfo())
  }

  closeMenu = () => {
    this.setState({
      open: !this.state.open
    })
  }

  getInfo = () => {
    console.log(this.state.date);
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day.toString();
        const words = cloneDay.split(' ')
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.getDate(words[1], words[2], words[0])}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">
      {rows}
      {this.renderDays()}
    </div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  renderDays = () => {
    return <div className="footer">{this.state.daysLetter.map((item, index) => (
      <div key={index} className="letter">
        <span className="">{item}</span>
      </div>
    ))}</div>;
  }

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderCells()}
        {this.state.date !== null ? (
          <div  className={this.state.open ? "popUp" : "popUp close"} >
            <div className="popUp__content">
              <div className="popUp__title">
                Month
              </div>
              <div className="popUp__container">
                {this.state.date[0]}
              </div>
            </div>
            <div className="popUp__content">
            <div className="popUp__close" onClick={() => this.closeMenu()}>X</div>
              <div className="popUp__title">
                Day
              </div>
              <div className="popUp__container">
                {this.state.date[1]}
                {' '}
                {this.state.date[2]}
              </div>
            </div>
          </div>
        ) : (
          null
        )}
      </div>
    );
  }
}
