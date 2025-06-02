function CustomInput(props) {
    return (
      <div className="mb-3">
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
        <input
          name={props.name}
          type={props.type}
          id={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    );
  }
  
  export default CustomInput;
  