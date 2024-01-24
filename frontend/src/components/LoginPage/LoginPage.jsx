import React, { useState } from "react";
// import { useDispatch } from "react-redux";

export default function LoginPage() {

    // const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = await dispatch(login(email, password));
        // if (data) {
        //   setErrors(data);
        // } else {
        //     closeModal()
        // }
      };


    return (
        <>
            <h1>Welcome back Captain!</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {/* {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))} */}
                </ul>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log In</button>
            </form>
        </>
    );
}
