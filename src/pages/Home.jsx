import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home () {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [message, setMessage] = useState("")

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("https://job-posting-app-be.vercel.app/jobs")
                if(response.ok) {
                    const data = await response.json();
                    setJobs(data);
            } 
            } catch (error) {
                console.error("Error in fetching jobs:", error);
            }
        };

        fetchJobs();

     }, [])

     const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://job-posting-app-be.vercel.app/jobs/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setJobs(jobs.filter((job) => job._id !== id));
                setMessage("Job deleted successfully!");
                setTimeout(() => setMessage(""), 3000);
            } else {
                console.error("Failed to delete the job");
            }
        } catch (error) {
            console.error("Error in deleting job:", error);
        }
     };

     const filteredJobs  = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
     );

    return (
        <main className="home-main-section">

         { message && 
            <div className="toast-msg">
                {message}
            </div>
         }

         <section className="search-section py-4">
            <input type="text" placeholder="Search by job title..." 
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
             />
         </section>

         <section className="jobs-list">
            <h1 className="mb-4">All Jobs</h1>
            <div className="row">
                {filteredJobs.map((job) => (  
                        <div key={job.id} className="col-md-4 mb-4">
                            <div className="card p-2">
                              <div className="card-body">
                                <h4 className="card-title fw-bold">{job.jobTitle}</h4>
                                <p className="card-text mb-1">
                                   <strong>Company Name:</strong> {job.companyName}
                                </p>
                                <p className="card-text mb-1">
                                   <strong>Location:</strong> {job.location}
                                </p>
                                <p className="card-text mb-3">
                                   <strong>Job Type:</strong> {job.jobType}
                                </p>
                                <div className="button-group">
                                    <Link to={`/jobDetails/${job._id}`} className="btn btn-primary primary-btn">
                                      See Details
                                    </Link>
                                    <button className="btn btn-danger secondary-btn" onClick={() => handleDelete(job._id)}>
                                        Delete
                                    </button>
                                </div>
                              </div>
                            </div>
                        </div>
                    ))}
            </div>
         </section>
        </main>
    )
}

export default Home;