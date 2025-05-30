import React, { useState, useEffect } from "react";
import { auth } from "../lib/firebase";  // Adjust the relative path if needed
import { signInAnonymously, onAuthStateChanged, signOut } from "firebase/auth";
import { User } from "firebase/auth"; // make sure this import is at the top

export default function FirebaseAuthDemo() {
const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe; 
  }, []);

  const handleLogin = () => {
    signInAnonymously(auth).catch((error) => {
      console.error("Login error:", error);
    });
  };

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout error:", error);
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
          <p>Logged in anonymously as: {user.uid}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Not logged in</p>
          <button onClick={handleLogin}>Login Anonymously</button>
        </>
      )}
    </div>
  );
}
