const Login = () => {
    return <>
     <h3>LOGIN</h3>
     <div>
     <div className="input-wrapper">
     <input  type="text" placeholder='Enter your email ' className="input-field" />
     </div>
     <div  className="input-wrapper"> 
     <input  type="text" placeholder='Enter your Password' className="input-field" />
     </div>
     <div  className="input-wrapper">
      <button className="button">Login</button>
     </div>
     </div>
    </>;
  };
  export default Login;