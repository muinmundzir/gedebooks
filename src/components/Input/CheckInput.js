import './CheckInput.css'

const CheckInput = ({ name, label, onChange, value }) => {
  return (
    <label className="check__label" htmlFor={name}>
      {' '}
      <input
        checked={value}
        className="form__check"
        type="checkbox"
        name={name}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

export default CheckInput
