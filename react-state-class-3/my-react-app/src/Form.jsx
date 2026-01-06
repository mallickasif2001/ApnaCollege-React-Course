import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

    // submitted data list
    const [submittedData, setSubmittedData] = useState([]);

    // common input handler
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // submit handler
    const handleSubmit = (event) => {
        event.preventDefault();

        // save data
        setSubmittedData((prev) => [...prev, formData]);

        // clear form
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <br />
                <input
                    type="text"
                    name="fullName"
                    placeholder="enter full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />

                <br /><br />

                <label>Username</label>
                <br />
                <input
                    type="text"
                    name="username"
                    placeholder="enter username"
                    value={formData.username}
                    onChange={handleInputChange}
                />

                <br /><br />

                <label>Password</label>
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            <hr />

            {/* submitted output */}
            <h3>Submitted Data</h3>

            {submittedData.map((item, index) => (
                <div key={index}>
                    <p><strong>Full Name:</strong> {item.fullName}</p>
                    <p><strong>Username:</strong> {item.username}</p>
                    <p><strong>Password:</strong> {item.password}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
