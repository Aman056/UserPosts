import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/Color-wheel-light-color-spectrum.webp'

export default function Posts(props) {
    return (
        <div className="card mt-5" style={{ width: '18rem' }} onClick={() => props.GetDetailsComments(props.data.id)}>
            <Link to='/users' style={{ color: 'black', textDecoration: 'none' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h6 classNameName=''>{props.data.title}</h6>
                    <small className="card-text">{props.data.body}</small>
                </div>
            </Link>
        </div>
    )
}
