import "./home.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Home() {
    const location = useLocation();
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [gmail, setGmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [enteredOtp, setEnteredOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDobChange = (event) => {
        setDob(event.target.value);
    };

    const handleAgeChange = (event) => {
        const inputAge = event.target.value.replace(/\D/g, '');
        setAge(inputAge);
    };

    const handleGmailChange = (event) => {
        setGmail(event.target.value);
    };

    const handleContactNumberChange = (event) => {
        const inputContactNumber = event.target.value.replace(/\D/g, '');
        setContactNumber(inputContactNumber);
    };

    const generateOtp = () => {
        const newOtp = Math.floor(100000 + Math.random() * 900000);
        setOtp(newOtp.toString());
        setOtpSent(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (enteredOtp === otp) {
            console.log("OTP Verified!");
           
        } else {
            console.log("OTP Verification Failed!");
        }
    };

    return (
        <>
            <div className="homeContainer">
                <h1 className="home">Hello {location.state.id} !!</h1>
                <div className="loginRight">
                    <div className="loginBox">
                        <div className='sign'>Profile</div>
                        <input type="text" placeholder="Name*" className="loginInput" value={name} onChange={handleNameChange} />
                        <input type="date" placeholder="Date of Birth*" className="loginInput" value={dob} onChange={handleDobChange} />
                        <input type="text" placeholder="Age*" className="loginInput" value={age} onChange={handleAgeChange} pattern="[0-9]*" />
                        <input type="email" placeholder="Gmail*" className="loginInput" value={gmail} onChange={handleGmailChange} />
                        <input type="text" placeholder="Contact Number*" className="loginInput" value={contactNumber} onChange={handleContactNumberChange} />
                        <button type="button" className="otpButton" onClick={generateOtp}> OTP</button>
                        {otpSent && (
                            <>
                                <input type="text" placeholder="Enter OTP" className="loginInput" value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} />
                            </>
                        )}
                        <button type='login' className='loginButton' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
