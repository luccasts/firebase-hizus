import { useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";



const UserMenu = () => {
    const auth = getAuth();
    const [email, setEmail]:string | null = useState("")
    onAuthStateChanged(auth, (user) => {
        if(user){
            const uid = user.uid;
            
            setEmail(user.email)
            

        }else{
            console.log('signed out')
        }
    })
   
  
    return (
        <main>
            <h1>User menu</h1>
            <p>user email ={email}
                </p>
        </main>
    )
}


export default UserMenu;