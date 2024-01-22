// import { useState } from "react";

// export default function Subscribe () {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     const handleSubmit = async (event: React.FormEvent) => {
//         // TODO when backend/DB connection is set up
//     }

//     const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { value } = event.target;
//         setEmail(value)
//     }

//     const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { value } = event.target;
//         setName(value)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input placeholder="Name" type="text" onChange={handleNameChange} value={name}/>
//             <input placeholder="Email" type="text" onChange={handleEmailChange} value={email}/>
//             <button>Subscribe</button>
//         </form>
//     )
// }