import React, { useState } from "react";
import Button from "./Button";
import SignInModal from "./SignInModal";

const Login = () => {
  const [openModal, setopenModal] = useState(false);
 

  return (
    <div>
      <div className="sign-in-posting">
        <Button onClick={()=>{setopenModal(true)}} className="signin sign" label="Log In" />
        <Button
        onClick={()=>{setopenModal(true)}}
          className="signin posting"
          label="Make a posting"
        />
      </div>
      {openModal && <SignInModal closeModal={setopenModal}/>}
    </div>
  );
};

export default Login;
