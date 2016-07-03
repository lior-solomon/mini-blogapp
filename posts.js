import React from 'react';
import {Link} from 'react-router';
import posts from './data/posts.js'

const Posts = (props) => {
    const currentPost = posts.map((post) => {
        return(
            <li className="post-item" key={post.link}>
                <Link className="post-link" to={`/posts/post/${post.link}`}>{post.headline}</Link>
            </li>
        )
    });

    return (
        <div>
            <h3>Posts List</h3>
            <div className="post-box">
                <ul>
                    {currentPost}
                </ul>
            </div>
            {props.children}
        </div>
    );
};

export default Posts;