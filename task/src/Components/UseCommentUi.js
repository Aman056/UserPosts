import React, { useContext, useEffect } from 'react';
import { UserCommentContext } from '../Context__API/UserComment'

export default function UseCommentUi() {
  const { user, userLoading, userError } = useContext(UserCommentContext)
  if (userLoading) return <div>Loading...</div>;
  if (userError) return <div>Error: {userError?.message}</div>;

  return (
    <div>
      {user && user.map((item, index) => (
        <div key={index} className="card border-warning mb-3 text-start p-3 m-auto" style={{ maxWidth: "50rem" }}>
          <h5 className="card-title">
            {item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : ''}
          </h5>
          <span className="opacity-75">{item.email}</span>
          <div className="card-body">
            <p className="card-text p-0 m-0">{item.body}</p>
          </div>
        </div>
      ))}


    </div>
  )
}
