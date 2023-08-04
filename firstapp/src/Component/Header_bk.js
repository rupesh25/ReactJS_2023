import React,{Component, Fragment} from 'react';

class Header extends Component{
    render(){

        const myStyle ={
            header:{
                backgroundColor:'tomato',
                textAlign:'center'
            },
            logo:{
                fontSize:'20px',
                color:'white'
            }
        }

        return(
            <Fragment>
                <header style={myStyle.header}>
                    <div style={myStyle.logo}>React App</div>
                    <input/>
                    <div style={{color:'white', fontSize:'15px'}}>User Text Here</div>
                </header>
                <hr/>
            </Fragment>
        )

    }
}


export default Header;



// const Header = () =>{
//     return(
//         <div>
//             <center>
//                 <h2>React App</h2>
//             </center>
//         </div>
//     )
// }