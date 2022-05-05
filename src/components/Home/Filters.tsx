import React from "react";
import { Radio } from 'antd';

interface props {
  filters: {
    star?: string,
    createdAt?: string,
    cool?: string,
    cute?: string,
    confidence?: string,
    control?: string
  },
  setFilters: Function
}

function Filters({filters, setFilters}: props) {
  const options = [
    { label: 'Decreasing', value: 'dec' },
    { label: 'Increasing', value: 'inc' },
  ];

  const dateOptions = [
    { label: 'New First', value: 'dec' },
    { label: 'Old First', value: 'inc' },
  ];

  function radio(field: string) {
    return <><h6>
      {field.charAt(0).toUpperCase() + field.slice(1)}
    </h6><Radio.Group
      options={options}
      onChange={(e) => {
        setFilters({[field]: e.target.value});
      }}
      value={Object(filters)[field]}
      optionType="button"
      buttonStyle="solid"/></>
  }

  return (
    <div>
      {radio('star')}
      <h6>
        Date
      </h6>
      <Radio.Group
        options={dateOptions}
        onChange={(e) => {setFilters({createdAt: e.target.value})}}
        value={filters.createdAt}
        optionType="button"
        buttonStyle="solid"
      />
      {radio('cool')}
      {radio('cute')}
      {radio('confidence')}
      {radio('control')}
    </div>
  )
}

export default Filters;
