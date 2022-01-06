import './Button.css'

const Button = ({ name, type, children, onClick, buttonClass }) => {
  return (
    <button className={buttonClass} type={type} name={name} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
