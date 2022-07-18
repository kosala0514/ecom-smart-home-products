// import React from 'react';
import './form.css'

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps} = props;
  return (
    <div className='form__input'>
        {/* <label htmlFor="">{props.placeholder}</label> */}
        {/* <input placeholder={props.placeholder}
        name={props.name}
        // ref={props.refer}
        // onChange={(e) => props.setUsername(e.target.value)}
        /> */}
        {/* <label>{label}</label> */}
        <input {...inputProps} onChange={onChange} />
        
    </div>
  );
};

export default FormInput