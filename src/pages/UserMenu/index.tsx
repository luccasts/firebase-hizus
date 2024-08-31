import { useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";



const UserMenu = () => {
    const auth = getAuth();
    const [userEmail, setUserEmail]:any = useState("")
    onAuthStateChanged(auth, (user) => {
        if(user){
            setUserEmail(user.email)
            

        }else{
            console.log('signed out')
        }
    })
   
  
    return (
        <main>
            <h1>User menu</h1>
            <p>user email ={userEmail}
                </p>
        </main>
    )
}


export default UserMenu;