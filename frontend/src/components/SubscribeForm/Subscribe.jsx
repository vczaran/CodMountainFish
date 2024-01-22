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
                <input placeholder="Name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                <input placeholder="Email" type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                <button>Subscribe</button>
            </form>
        </div>
    )
}