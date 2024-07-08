// src/components/MyComponent.js
import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../Context__API/DataContaxt';
import Posts from './Posts';
import { UserContext } from '../Context__API/UserContext.js';
import { UserCommentContext } from '../Context__API/UserComment.js';
const MyComponent = () => {
  const { data, loading, error } = useContext(DataContext);
  const { fetchUserDetails } = useContext(UserContext);
  const { fetchUserComments } = useContext(UserCommentContext)
  
  const GetDetailsComments = (id) => {
    fetchUserDetails(id)
    fetchUserComments(id)
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className='container mt-5'>
      <h1>Data from API</h1>
      <div className='d-flex flex-wrap justify-content-evenly'>
        {data && data.map((item) => <Posts key={item.id} data={item} GetDetailsComments={GetDetailsComments} />)}
      </div>
    </div>
  );
};

export default MyComponent;
