import React from 'react';

function DisplayComponent(props){

    const rederRest = ({restData}) =>{
        if(restData){
            return restData.map((item)=>{
                return(
                    <div key={item._id}>
                        {item.restaurant_name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>restaurants</h2>
                {rederRest(props)}
            </center>
        </div>
    )
}

export default DisplayComponent;