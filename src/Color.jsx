import CustomButton from "./shared/CustomButton";

function Color(props){
    console.log(props);
    return (
        <div className="card p-3 text-center shadow">
      <h5 className="card-title">ID: {props.id}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Color: {props.name}</h6>
      <CustomButton text="Details" type="secondary" />
      <CustomButton text="Remove" type="danger" />
    </div>
    );
}
export default Color ;