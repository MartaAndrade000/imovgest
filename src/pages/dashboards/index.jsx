import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../../firebase.js";
import {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";

const index = () => {

    const [user, loading, error] = useAuthState(auth);
    const [role, setRole] = useState('');

    useEffect(() => {
        if (!user) {return;}

        const userRole = getUserRole(user)

        setRole(userRole)

    }, [user]);

    const getUserRole = async (user) => {
        if (!user) return;

        try {

            // Create a reference to the "tokens" collection
            const usersCollection = collection(db, 'users');

            // Create a query to search for the token
            const q = query(usersCollection, where('uid', '==', user.uid));

            console.log(q);
            // Execute the query
            const querySnapshot = await getDocs(q);


            // Check if a document with the token exists
            if (querySnapshot.size === 1) {
                // Token is valid, retrieve the role from the document
                const docData = querySnapshot.docs[0].data();

                return docData.role; // Return the role

            } else {
                return ''; // Token is not found or not unique
            }
        } catch (error) {
            console.error('Error getting user role:', error);
        }
    };

}