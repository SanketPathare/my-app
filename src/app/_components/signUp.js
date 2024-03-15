const SignUp = () => {
    return <>
      <h3>SignUp</h3>
     <div>
     <div className="input-wrapper">
     <input  type="text" placeholder='Enter email id ' className="input-field" />
     </div>
     <div  className="input-wrapper"> 
     <input  type="text" placeholder='Enter Password' className="input-field" />
     </div>
     <div  className="input-wrapper"> 
     <input  type="text" placeholder='Confirm Password' className="input-field" />
     </div>
     <div  className="input-wrapper"> 
     <input  type="text" placeholder='Enter restaurant name' className="input-field" />
     </div>
     <div  className="input-wrapper"> 
     <input  type="text" placeholder='Enter City' className="input-field" />
     </div>
     <div  className="input-wrapper"> 
     <input  type="text" placeholder='Enter full address' className="input-field" />
     </div>
     <div  className="input-wrapper"> 
     <input  type="text" placeholder='Contact No.' className="input-field" />
     </div>
     
     <div  className="input-wrapper">
      <button className="button">SignUp</button>
     </div>
     </div>
    </>;
  };
  export default SignUp;