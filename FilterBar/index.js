import React, { Component } from 'react';
import { Form, Row, Col, DatePicker, Select, Button, InputNumber } from 'antd';
import moment from 'moment';
import styles from './index.less';

const RangePicker = DatePicker.RangePicker;
const FormItem = Form.Item;
const Option = Select.Option;

class FilterBar extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  componentWillReceiveProps(props){
    this.props = props;
  }
  render(){
    // console.log(this.props);
    return (
        <Form layout="inline" className={styles['mbd10']}>
        {
          !_.isEmpty(this.props.layerNodesCascader) &&
          <FormItem style={{marginBottom:10}}>
            <div style={{display:'flex'}}>
              <div>
                <Select
                  //showSearch
                  placeholder="请选择"
                  optionFilterProp="children"
                  onChange={this.props.layerNodesCascader.layerChange}
                  defaultValue={this.props.layerNodesCascader.layerValue}
                  //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {
                    this.props.layerNodesCascader.layerData.map((item,key) => {
                      return (
                        <Option
                          key={item.value + key}
                          value={item.value}
                        >
                          {item.name}
                        </Option>
                      )
                    })
                  }
                </Select>
              </div>
              {
                !_.isEmpty(this.props.layerNodesCascader.nodesValue) &&
                <div>
                  <Select
                    //showSearch
                    mode="multiple"
                    placeholder="请选择"
                    optionFilterProp="children"
                    onChange={this.props.layerNodesCascader.nodesChange}
                    value={this.props.layerNodesCascader.nodesValue}
                    //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    {
                      this.props.layerNodesCascader.nodesData.map((item,key) => {
                        //console.log(item,item.value,item.value + key,item.name);
                        return (
                          <Option
                            key={item.value + key}
                            value={item.value}
                          >
                            {item.name}
                          </Option>
                        )
                      })
                    }
                  </Select>
                </div>
              }
            </div>
          </FormItem>
        }
        {
          !_.isEmpty(this.props.multiSelect) &&
          this.props.multiSelect.map((item,key) => {
            return (
              <FormItem style={{marginBottom:10}} key={key + 'mulitS'}>
                <Select
                  //showSearch
                  mode="multiple"
                  placeholder="请选择"
                  key={key + 'mulitS'}
                  optionFilterProp="children"
                  onChange={item.onChange}
                  defaultValue={item.defaultVal}
                  style={{minWidth:92}}
                  //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {
                    item.data.map((obj) =>{
                      return (
                        <Option
                          key={obj.value}
                          value={obj.value}
                        >
                          {obj.name}
                        </Option>
                      )
                    })
                  }
                </Select>
              </FormItem>
            )
          })
        }
        {
          !_.isEmpty(this.props.singleSelect) &&
          this.props.singleSelect.map((item,key) => {
            return (
              <FormItem style={{marginBottom:10}} key={key + 'single'}>
                <Select
                  key={key + 'single'}
                  showSearch
                  placeholder="请选择"
                  optionFilterProp="children"
                  onChange={item.onChange}
                  defaultValue={item.defaultVal}
                  //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {
                    item.data.map((obj) =>{
                      return (
                        <Option
                          key={obj.value}
                          value={obj.value}
                        >
                          {obj.name}
                        </Option>
                      )
                    })
                  }
                </Select>
              </FormItem>
            )
          })
        }
        {
          !_.isEmpty(this.props.top) &&
          <FormItem style={{marginBottom:10}}>
            <label>{this.props.top.name}</label>
            <InputNumber min={this.props.top.min} max={this.props.top.max} defaultValue={this.props.top.defaultVal} onChange={this.props.top.onChange} />
          </FormItem>
        }
        {
          !_.isEmpty(this.props.dateRangePicker) &&
          <FormItem style={{marginBottom:10}}>
            <RangePicker
              ranges={{
                '7天' : [moment().subtract(7,'days').startOf('day'),moment().subtract(1,'days').endOf('day')],
                '1个月' : [moment().subtract(1,'months').subtract(1,'days').startOf('day'),moment().subtract(1,'days').endOf('day')],
                '3个月' : [moment().subtract(3,'months').subtract(1,'days').startOf('day'),moment().subtract(1,'days').endOf('day')]
              }}
              format="YYYY-MM-DD"
              disabledDate={(current) => {
                return current > moment() && moment();
              }}
              defaultValue={this.props.dateRangePicker.defaultDate}
              onChange={this.props.dateRangePicker.onChange}
              onOpenChange={(status) => {
                /*console.log(status);*/
              }}
            />
          </FormItem>
        }
        {
          !_.isEmpty(this.props.search) &&
          <FormItem style={{marginBottom:10}}>
            <Button type="primary" icon="search" onClick={this.props.search.onClick}>查询</Button>
          </FormItem>
        }
        </Form>
    )
  }

}

export default FilterBar;
