import React from 'react';
import {Link} from 'react-router-dom';

const Post = () =>{
    return(
        <div className="panel panel-success">
            <div className="panel-heading">Post Page</div>
            <div className="panel-body">
                Post Page Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
                <h2>Javascript</h2>
                <Link to="/post/Javascript?page=1" className="btn btn-success">Details</Link>

                <h2>Nodejs</h2>
                <Link to="/post/Nodejs?page=2" className="btn btn-warning">Details</Link>

                <h2>React</h2>
                <Link to="/post/Reactjs?page=3" className="btn btn-danger">Details</Link>
            
            </div>
        </div>
    )
}

export default Post;