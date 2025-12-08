import { useState } from "react";
import "./AddJobPost.css";

function AddjobPost () {
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        location: "",
        salary: "",
        jobType: "",
        jobDescription: "",
        jobQualification: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("Posting job..."); 
        try {
            const response = await fetch("https://job-posting-app-be.vercel.app/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if(response.ok) {
                setMessage("Job Posted Successfully!");
                setFormData({
                    jobTitle: "",
                    companyName: "",
                    location: "",
                    salary: "",
                    jobType: "",
                    jobDescription: "",
                    jobQualification: ""
                });
            }
        } catch(error) {
            console.error("Error in posting job", error);
        }
    };

    return (
        <main className="add-job-post-section">

            {message && <div className="toast-msg">{message}</div>}

            <h1 className="py-3">Post a Job</h1>

            <form className="job-post-form" onSubmit={handleSubmit}>

                <label>Job Title:</label>
                <input 
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="form-control"
                />
                <br />

                <label>Company Name:</label>
                <input 
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-control" 
                    required
                />
                <br />

                <label>Location:</label>
                <input 
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                <br />

                <label>Salary:</label>
                <input 
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                <br />

                <label>Job Type:</label>
                <select 
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    className="form-select"
                    required
                >
                    <option value="">Select job type</option>
                    <option value="Full-time (On-site)">Full-time (On-site)</option>
                    <option value="Part-time (On-site)">Part-time (On-site)</option>
                    <option value="Full-time (Remote)">Full-time (Remote)</option>
                    <option value="Part-time (Remote)">Part-time (Remote)</option>
                </select>
                <br />

                <label>Job Description:</label>
                <textarea
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                ></textarea>
                <br />

                <label>Job Qualifications:</label>
                <textarea
                    name="jobQualification"
                    value={formData.jobQualification}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required 
                ></textarea>
                <br />

                <button className="btn btn-primary post-btn">Post Job</button>
            </form>
        </main>
    );
}

export default AddjobPost;
