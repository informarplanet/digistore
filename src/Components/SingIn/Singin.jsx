import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
import { FaGoogle } from "react-icons/fa";
import app from "../../firebaseconfig.init";
import { useState } from "react";



export default function Singin() {

    const [user, setUser] = useState();

    const handlegooglesing = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                // console.log(result)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }



    return (
        <div>
            <h1> This is SigIn</h1>
            <button type="button" onClick={handlegooglesing}><FaGoogle /></button>
            {
                user && <h1>Name:{user.displayName}</h1>
            }
            
            
        </div>
    )
}