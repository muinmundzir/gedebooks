import './TextAreaInput.css'

const TextArea = ({ name, placeholder, onChange, label, value }) => {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <textarea
        defaultValue={value}
        className="form__input"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </>
  )
}

export default TextArea
