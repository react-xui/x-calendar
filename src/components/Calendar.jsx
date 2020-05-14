/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-seed
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'antd/lib/date-picker';  // 加载 JS
import 'antd/lib/date-picker/style/css';        // 加载 CSS
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// import Calendar from 'rc-calendar';
// import 'rc-calendar/assets/index.css';
export default class Calendar extends Component{
    constructor(props){
        super(props);
        this.state={value : props.value}
        this.onChange = this.onChange.bind(this);
    }
    onChange(date,dateString){
        // console.log(date,dateString)
        this.setState({value:date},()=>{
            this.props.onChange && this.props.onChange(date,dateString);
        });
    }
    render(){
        return <DatePicker {...this.props} value={this.state.value} onChange={this.onChange}></DatePicker>
    }
}
// import DatePicker from 'rc-calendar/lib/Picker';
// import RangePicker from 'rc-calendar/lib/range-calendar';
// module.exports = { Calendar, DatePicker };
