const Student=[{
    name:"Ram",
    age:31,
    height:5.4,
    address:[{
      "city":"Sambalpur",
      "state":"odisha",
      "pincode":768017
    },
    ]
  }
  ];
  function Details(){
          return (<>
          <h1>Hello {Student.name}</h1>
          <p>you r {Student.age}</p>
          <p>you height is {Student.height}feet tall </p>
           <p> 
           You r staying at {Student.address.city}, {Student.address.state}, {Student.address.pincode} 
           </p>
           {/* <p>You r staying at {Student.address.city}, {Student.address.state}, {Student.address.pincode} 
           </p> */}
          </>); 
        }
        export default Details;
  