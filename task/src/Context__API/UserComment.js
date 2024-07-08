// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserCommentContext = createContext();

export const UserCommentProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserComments = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            setUser(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserCommentContext.Provider value={{ user, loading, error, fetchUserComments }}>
            {children}
        </UserCommentContext.Provider>
    );
};
