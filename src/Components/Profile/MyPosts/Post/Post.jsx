import React from "react";
import s from './Post.module.css';

const Post = (props)=>{
    return(
<div className={s.item}>
    <img src="https://s3.eu-central-1.amazonaws.com/img.hromadske.ua/posts/140209/mv5bnmizyjzjotutzgm2ms00yzbilthiogetzdzjywnlmjczzgqyxkeyxkfqcgdeqxvynjczote0mzmv1sx1777cr001777999aljpg/medium.jpg" alt="avatar" />
    {props.message}
    <div>
        <span>Like </span>{props.likesCount}
    </div>
</div>
    );
}
export default Post;