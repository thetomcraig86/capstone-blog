import { useState } from "react";
import axios from "axios";
import './profile.css'

export default function Profile() {
    
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState(false);

        const handleupdateP = async (e)=> {
            e.preventDefault();
            setError(false);
            try{
              const res = await axios.put("/auth/update", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/");
            } catch(err) {
              setError(true);
              
            }
          };


    return (
        <div className="updateP">
        <span className="updatePTitle">Update Profile</span>
        <form className="updatePForm" onSubmit={handleupdateP}>
          <label>Username</label>
          <input 
            className="updatePInput" 
            type="text" 
            placeholder="Enter new username..." 
            onChange={e=>setUsername(e.target.value)}
          />
          <label>Email</label>
          <input 
            className="updatePInput" 
            type="text" 
            placeholder="Enter new email..." 
            onChange={e=>setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            className="updatePInput" 
            type="password" 
            placeholder="Enter new password..." 
            onChange={e=>setPassword(e.target.value)}
          />
          <button className="updatePButton" type="submit">
          Update
          </button>
        </form>
        
          {error && <span>Didn't Work...</span>}
      </div>
    )
}
