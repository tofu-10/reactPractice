import { useState } from "react"

export default function LoginSection(){

    const [UserName, setUserName]= useState("");
    const [Email, setEmail]= useState("");
    const [Password, setPassword]= useState("");

    function handleSubmit(){
        
        console.log("submitted");
    }  
    return (
        <>
             <div className="LoginContainer">
                <h1>PLEASE LOG IN TO YOUR ACCOUNT</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="UserName">UserName</label>
                    <input type="text" 
                    id="UserName"
                    value={UserName}
                    onChange={(e)=>{setUserName(e.target.value)}}
                    />


                    <label htmlFor="Email">Email</label>
                    <input type="text" 
                    id="Email"
                    value={Email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />

                    <label htmlFor="Password">Password</label>
                    <input type="text" 
                    id="Password"
                    value={Password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <button type="submit" >SUBMIT</button>

                </form>

             </div>
        </>
    )
}