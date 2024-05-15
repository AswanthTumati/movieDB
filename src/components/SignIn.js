import React, { useEffect } from 'react';
import { auth, provider } from '../firebase-config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthorized } from '../store/reducers/movieSlice';

const SignIn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const signInWithGoogleOnMount = async () => {
      try {
        // Check if user is already signed in
        if (auth.currentUser) {
          navigate('/'); // Redirect to home if already signed in
        } else {
          // If not signed in, initiate Google sign-in directly
          await signInWithPopup(auth, provider);
          
          localStorage.setItem("isAuth", true); // Set authentication status
          dispatch(setAuthorized(true));
          navigate('/'); // Redirect to home after successful sign-in
        }
      } catch (error) {
        // Handle errors if any
        console.error("Error signing in with Google:", error);
      }
    };

    signInWithGoogleOnMount();
  }, [navigate]);

  return <div>Signing In...</div>; // Optionally, you can show a loading indicator while signing in
};

export default SignIn;
