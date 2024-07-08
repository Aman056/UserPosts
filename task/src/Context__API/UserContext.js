// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserDetails = async (id) => {
    console.log(id, 'IDdddddddd context')
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, error, fetchUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
