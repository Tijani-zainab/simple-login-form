import React from "react";
import "../../App.css";

export default function Login(){

     
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        formMarketting: false
    })
    
    // console.log(formData)
    
    function handleChange(event) {
        const {name, checked, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
            
        })

        // console.log(event)
    }


    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
            console.log("Succesfully signed up!")
        } else {
            console.log("password don't match")
        }
        
        if(formData.formMarketting === true) {
            console.log("thank you for joining our newsletter!")
        } else {
            console.log("please sign up for our news letter!")
        }
    }

    
    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={FormData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="formMarketting"
                        checked={formData.formMarketting}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}