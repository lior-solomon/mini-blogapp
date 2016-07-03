import React from 'react';
import Posts from './data/posts.js';

const Post = (props) => {

    var post = Posts.filter((single)=> single.link === props.params.num)[0];
    return (
        <div>
            <h2 className="post-header">{post.headline}</h2>
            <p className="post-text">{post.text}</p>
        </div>
    )
};

export default Post;