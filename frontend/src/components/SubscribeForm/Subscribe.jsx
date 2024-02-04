import { useState } from "react";

export default function Subscribe () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit (e) {
        e.preventDefault();
        // TODO when backend/DB connection is set up
    }

    return (
        <div>
            <h3>Subscribe to our newsletter!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-1 mt-1">
                    <label>Name: 
                        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                    </label>
                </div>
                <button className="mb-1 mt-1 bg-cyan-800 hover:bg-cyan-900 text-white font-bold py-1 px-2 rounded hover:underline">Subscribe</button>
            </form>
        </div>
    )
}