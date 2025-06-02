import { useState } from "react";
import Color from "./Color.jsx"
import CustomButton from "./shared/CustomButton.jsx";
import CustomInput from "./shared/CustomInput.jsx";
function App(){

const[colors,setColors]=useState([
  {"id":1,"name":"red"},
  {"id":2,"name":"green"},
  {"id":3,"name":"yallow"},
  {"id":4,"name":"gray"},
]);
const [showForm, setShowForm] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  age: "",
  status: "",
});

function handleAddClick() {
  setShowForm(true);
}
function handleChange(e) {
  setFormData({ ...formData, [e.target.name]: e.target.value });
}


function handleSubmit(e) {
  e.preventDefault();
  const newColor = {
    id: colors.length + 1,
    name: formData.name,
  };
  setColors([...colors, newColor]);
  setFormData({ name: "", email: "", age: "", status: "" });
  setShowForm(false);
}
  return (
    
    <div className="colors">
     <CustomButton text="add" type="primary" onClick={handleAddClick}/>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <CustomInput
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <CustomInput
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />
          <CustomInput
            label="Status"
            name="status"
            type="text"
            value={formData.status}
            onChange={handleChange}
          />
          <CustomButton text="Submit" type="success" submit={true} />
        </form>
      )}

      {colors.map((color)=>(<Color id= {color.id} name={color.name} key={color.id}/>
      )
        
      )}
      
     
 </div>     
);
}
export default App;