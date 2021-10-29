import { GoogleAuthProvider,signInWithPopup, getAuth } from "firebase/auth";


const useFirebase=()=>{

const googleProvider= new GoogleAuthProvider()
const auth = getAuth();
const signGoogle=()=>{
    signInWithPopup(auth, googleProvider)
    .then(result=>{
        const user= result.user
    })
}

}
export default useFirebase;