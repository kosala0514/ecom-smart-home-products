import './form.css'

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps} = props;
  return (
    <div className='form__input'>
        <input {...inputProps} onChange={onChange} />        
    </div>
  );
};

export default FormInput