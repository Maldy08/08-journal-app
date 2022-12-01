import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        //console.log({ credentials });

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);
        //TODO: actualizar el displayName en Firebase

        await updateProfile(FirebaseAuth.currentUser, { displayName });
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, displayName, photoURL } = resp.user;
        console.log(resp.user);
        return {
            ok: true,
            uid,
            displayName,
            photoURL
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}