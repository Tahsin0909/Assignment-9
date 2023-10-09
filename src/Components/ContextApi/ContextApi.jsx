/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../FIreBase/SDK"
import axios from 'axios';

const AuthContext = createContext()
const ContextApi = ({ children }) => {
    // Services data
    const [ServicesData, setServicesData] = useState([])
    useEffect(
        function jsonData() {
            fetch('./Services.json')
                .then(res => res.json())
                .then(data => setServicesData(data))
        }

        // function jsonData() {
        //     axios.get('public/Services.json')
        //         .then(response => {J
        //             setServicesData(response.data);
        //         })
        //         .catch(error => {
        //             console.error('Error fetching Services.json:', error);
        //         });
        // }

        , [])

    // Services data

    // emailAndPassword Authentication
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(loading)
    // sign up
    const PasswordSignUp = (email, password) => {
        setLoading(true)
        console.log(loading)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in
    const PasswordSignIn = (email, password) => {
        setLoading(true)
        console.log(loading)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google Sign In
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    // Google Sign In

    // Save user
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user),
                    console.log(user)
                if (user.email) {
                    setLoading(false)
                }
                console.log(loading)



            } else {
                // console.log(user)
            }
        });
        return () => Unsubscribe()
    }, [loading])

    //Sign out
    const SignOut = () => {
        signOut(auth)
            .then(
                setUser({}),
                setLoading(false),
                console.log(loading)

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