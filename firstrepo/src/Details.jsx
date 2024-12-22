
// creating and acessing nested object in component
function Details(){

const Student={
    name:"Ram",
    age:21,
    height:5.4,
    address:{
      "city":"Sambalpur",
      "state":"odisha",
      "pincode":768017
    }}
  
          return (<>
          <h1>Hello friend {Student.name}</h1>
          <p>you r {Student.age} years old</p>
          <p>you height is {Student.height}feet tall </p>
           <p> 
           You r living at {Student.address.city}, {Student.address.state}, {Student.address.pincode} 
           </p>
           
          </>); 
        }
        export default Details;
  