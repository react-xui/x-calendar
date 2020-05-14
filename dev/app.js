import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from '../src/index';
// import {DatePicker} from 'antd'
import moment from 'moment';
import '../src/_index';

var appElement = document.getElementById('example');
function dateFtt(fmt, date) { //author: meizz   
  if (!date) return '';
  date = new Date(date)
  var o = {
      "M+": date.getMonth() + 1,                 //月份   
      "d+": date.getDate(),                    //日   
      "h+": date.getHours(),                   //小时   
      "m+": date.getMinutes(),                 //分   
      "s+": date.getSeconds(),                 //秒   
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
function setDateFtt(value) {
  if (!value) return '';
  let nv = value.replace(/[\-\/\:]/gi, '');
  let ex = /(\d{4})(\d{2})(\d{2})/;
  var d = new Date();
  if (nv.length == 6) {
      ex = /(\d{2})(\d{2})(\d{2})/;
  }
  ex.test(value);
  d.setFullYear(RegExp.$1);
  d.setMonth(RegExp.$2 - 1);
  d.setDate(RegExp.$3);
  if (nv.length == 14) {
      ex = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
      ex.test(value);
      d.setHours(RegExp.$4)
      d.setMinutes(RegExp.$5);
      d.setSeconds(RegExp.$6);
  }
  console.log(nv.length, RegExp.$1, RegExp.$2, RegExp.$3, d)
  return d;
  // if(fmt)
}
function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
      result.push(i);
  }
  return result;
}
function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}
function disabledDateTime() {
  return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
  };
}
function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showTime: true,
          showDateInput: true,
          disabled: false,
          value: setDateFtt(props.defaultValue),
      };
  }
  componentWillReceiveProps(newProps) {
      if (newProps.value != this.state.value) {
          this.setState({ value: newProps.value });
      }
  }
  onChange = (value) => {
      this.setState({
          value,
      });
  }
  render() {
      return (
          <div>
               <DatePicker/>
          </div>
      )
  }
}
ReactDOM.render(<App />, appElement);