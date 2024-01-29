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
            <h3>Subscribe to our newsletter</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-1 mt-1">
                    <input placeholder="Name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                </div>
                <div>
                    <input placeholder="Email" type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                </div>
                <button className="mb-1 mt-1 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-1 px-2 rounded">Subscribe</button>
            </form>
        </div>
    )
}