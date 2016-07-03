import React from 'react';
import {Link} from 'react-router';

const Links = (props) => {
    return(
        <div>
            <div className="nav-box">
                <h1 className="header">Mini BlogApp</h1>
                <ul>
                    <li className="list-item">
                        <Link className="link" to="/home">Home</Link>
                    </li>
                    <li className="list-item">
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li className="list-item">
                        <Link className="link" to="/posts">Posts</Link>
                    </li>
                </ul>
            </div>
                    {props.children}
        </div>
    );
};

export default Links;