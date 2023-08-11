import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
const PostDetails = () =>{
    //console.log(props);
    let params = useParams();
    let[searchParams] = useSearchParams();
    return(
        <div className="panel panel-danger">
            <div className="panel-heading">{params.topic} Page</div>
            <div className="panel-body">{params.topic} Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</div>
            <h3>You are on page number {searchParams.getAll('page')}</h3>
        </div>
    )
}

export default PostDetails;