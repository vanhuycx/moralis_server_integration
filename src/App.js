import React from "react";
import { useMoralis } from "react-moralis";


const App = () => {
    const {authenticate,isAuthenticated,user,logout} = useMoralis();


    console.log({authenticate,isAuthenticated,user,logout})
    
    // If the user has been log in to the session
    if (!isAuthenticated) {
        return (
            <div>
                <button onClick={()=> authenticate({signingMessage:'Hello World'})}> Authenticate</button>
            </div>
        )
    }

    // Log out function
  return (
      <div>
          <h1>Welcome {user.get('username')}</h1>
          <button onClick={()=>logout()}>Logout</button>
      </div>
  )
};

export default App;
