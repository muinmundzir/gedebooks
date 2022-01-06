import './TextInput.css'

const TextInput = ({ value, name, type, placeholder, onChange, label }) => {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        className="form__input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}

export default TextInput
