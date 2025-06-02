function CustomButton(props){
return (
    <button
      className={`btn btn-outline-${props.type} btn-lg rounded-pill shadow me-2 mb-2`}
      onClick={props.onClick}
      type={props.submit ? "submit" : "button"}
 
    >
      {props.text}
    </button>
);
}
export default CustomButton;