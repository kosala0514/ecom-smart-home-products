import React from 'react'
import { ProInput } from './input_styled';

const InputFields = (props) => {
    const { label, onChange, id, ...inputProps} = props;
  return (
    <ProInput>
        <input {...inputProps} onChange={onChange} />
    </ProInput>
  )
}

export default InputFields