import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

function JobDetails () {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`https://job-posting-app-be.vercel.app/jobs/${id}`);
                if(response.ok) {
                    const data = await response.json()
                    setJob(data)
                }
            } catch (error) {
                console.error("Error in fecthing job details:", error);
        }
    };

        fetchJobDetails();

    }, [id]);   

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <>
         <section className="job-details-section">
            <div className="mt-4">
                <h2>{job.jobTitle}</h2>
                <div className="card p-4 mt-4">
                    <p><strong>Company:</strong> {job.companyName}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Job Type:</strong> {job.jobType}</p>
                    <p><strong>Description:</strong> {job.jobDescription}</p> 
                    <p><strong>Qualifications:</strong>
                        <ol>
                            {job.jobQualification.split(",").map((qual, index) => (
                                <li key={index}>{qual}</li>
                            ))}
                        </ol>
                    </p>  

                </div>
            </div>
         </section>
        </>
    )
}

export default JobDetails;