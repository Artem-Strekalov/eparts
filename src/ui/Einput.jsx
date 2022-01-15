import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const Einput = ({ onChange }) => {
  const styledInput = {
    minWidth: "333px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    height: "40px",
    paddingRight: "10px",
    borderRadius: "10px",
    input: {
      outline: "none",
      border: "none",
      width: "100%",
      padding: "0 10px 0 10px",
    },
    icon: {
      color: "#999",
      cursor: "pointer",
      marginTop: "4px",
    },
  };

  let [showPassword, setShowPassword] = useState(false);
  function heandlInput(event) {
    onChange(event.target.value);
  }
  function chekShowPassword() {
    setShowPassword((showPassword = !showPassword));
  }
  let showIcon = true; /* props */
  return (
    <div className="input" style={styledInput}>
      <input
        style={styledInput.input}
        type={showPassword ? "text" : "password"}
        placeholder="props"
        onChange={heandlInput}
      />
      {showIcon ? (
        <div>
          {showPassword ? (
            <RemoveRedEyeIcon style={styledInput.icon} onClick={chekShowPassword} />
          ) : (
            <VisibilityOffIcon style={styledInput.icon} onClick={chekShowPassword} />
          )}
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
export default Einput;
