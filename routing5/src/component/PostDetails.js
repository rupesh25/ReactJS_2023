import React from 'react';

const PostDetails = (props) =>{
    //console.log(props);
    return(
        <div className="panel panel-danger">
            <div className="panel-heading">{props.match.params.topic} Page</div>
            <div className="panel-body">{props.match.params.topic} Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</div>
            <h3>You are on page no.{props.location.search.split('=')[1]}</h3>
        </div>
    )
}

export default PostDetails;