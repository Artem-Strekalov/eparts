import {useState} from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Einput = ({
  type,
  title,
  email,
  required,
  onChange,
  placeholder,
  customStyle,
}) => {
  const styledInput = {
    width: '100%',
    inputBlock: {
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      height: '40px',
      paddingRight: '10px',
      borderRadius: '10px',
    },
    label: {
      fontSize: '12px',
      marginTop: '40px',
    },
    input: {
      width: '100%',
      border: 'none',
      outline: 'none',
      padding: '0 10px 0 10px',
    },
    icon: {
      color: '#999',
      marginTop: '4px',
      cursor: 'pointer',
    },
  }
  let [typeInput, setTypeInput] = useState(type)
  let [showPassword, setShowPassword] = useState(false)
  function valueInput(event) {
    onChange(event.target.value)
  }
  function passwordVisibilitySwitch() {
    setShowPassword((showPassword = !showPassword))
    setTypeInput(showPassword ? (typeInput = 'text') : (typeInput = 'password'))
  }

  return (
    <div className='input' style={Object.assign({}, styledInput, customStyle)}>
      {title ? <label style={styledInput.label}>{title}</label> : ''}
      <div style={styledInput.inputBlock}>
        <input
          email={email}
          type={typeInput}
          required={required}
          onChange={valueInput}
          style={styledInput.input}
          placeholder={placeholder}
        />
        {type == 'password' ? (
          <div>
            {showPassword ? (
              <RemoveRedEyeIcon
                style={styledInput.icon}
                onClick={passwordVisibilitySwitch}
              />
            ) : (
              <VisibilityOffIcon
                style={styledInput.icon}
                onClick={passwordVisibilitySwitch}
              />
            )}
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  )
}
export default Einput
