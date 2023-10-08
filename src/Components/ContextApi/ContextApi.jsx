/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../FIreBase/SDK"

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
    const [loading, setLoading] = useState(true)

    // sign up
    const PasswordSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in
    const PasswordSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google Sign In
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    // Google Sign In

    // Save user
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user),
                    setLoading(false)

                // console.log(user)


            } else {
                // console.log(user)
            }
        });
        return () => Unsubscribe()
    }, [])
    //Sign out
    const SignOut = () => {
        setLoading(true)
        signOut(auth)
            .then(
                setUser({}),
                setLoading(false)

            )
            .catch(error => console.log(error.message))
    }
    // emailAndPassword Authentication

    // For toast

    const Data = {
        ServicesData,
        PasswordSignUp,
        PasswordSignIn,
        user,
        SignOut,
        GoogleSignUp,
        loading,
    }
    return (
        <AuthContext.Provider value={Data}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };