import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context__API/UserContext';
import UseCommentUi from './UseCommentUi';
import img from '../images/Color-wheel-light-color-spectrum.webp'

const Users = () => {
    const { id } = useParams();
    const { user, userLoading, userError, fetchUserDetails } = useContext(UserContext);

    useEffect(() => {
        fetchUserDetails(id);
    }, [id]);

    if (userLoading) return <div>Loading...</div>;
    if (userError) return <div>Error: {userError?.message}</div>;
    return (
        <div className='container mt-5 text-center'>
            <hr />
            <h5>Post Details</h5>
            <hr />
            {user && (
                <div className="card m-auto text-start" style={{ maxWidth: '50rem' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={img} class="img-fluid h-100 w-100 rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                                <p className="card-text"><strong>Username:</strong> {user.username}</p>
                                <p className="card-text"><strong>City:</strong> {user.address.city}, {user.address.street}, {user.address.zipcode}</p>
                                <p className="card-text"><strong>Company Name:</strong> {user.company.name}</p>
                                <p className="card-text"><strong>Company BS:</strong> {user.company.bs}</p>
                                <p className="card-text"><strong>Website:</strong> {user.website}</p>
                                <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='container mt-3'>

                <h5>Comments</h5>
                <hr />
                <UseCommentUi />
            </div>
        </div>
    );
};

export default Users;
