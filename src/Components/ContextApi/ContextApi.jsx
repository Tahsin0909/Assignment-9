/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../FIreBase/SDK";

const AuthContext = createContext()
const ContextApi = ({ children }) => {
    // Services data
    const [ServicesData, setServicesData] = useState([])
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])
    // Services data

    // emailAndPassword Authentication
    const [user, setUser] = useState({})

    // sign up
    const PasswordSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in
    const PasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Save user
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // console.log(user)

            } else {
                // console.log(user)
            }
        });
        return () => Unsubscribe()
    }, [])

    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () =>{
        return signInWithPopup(auth, GoogleProvider)
    }
    //Sign out
    const SignOut = () => {
         signOut(auth)
            .then(
                setUser({}),

            )
            .catch(error => console.log(error.message))
    }
    // emailAndPassword Authentication

    const Data = {
        ServicesData,
        PasswordSignUp,
        PasswordSignIn,
        user,
        SignOut,
        GoogleSignUp,
    }
    return (
        <AuthContext.Provider value={Data}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };