# Job Posting App

A full-stack job board application designed for companies to efficiently post and manage job openings, allowing candidates to search, view, and apply to them. Built with React (UI), Node.js + Express (API), and MongoDB (Database).

---

## Demo Link

[Live Demo](https://job-posting-app-fe.vercel.app/)  

---

## Quick Start

```
git clone https://github.com/Sharu2003-27/jobPostingApp_fe.git
cd <jobPostingApp_fe>
npm install
npm run dev  
```

## Technologies
- **Frontend**: React JS, React Router, Bootstrap, Custom CSS
- **Backend**: Node.js, Express.js, CORS, Mongoose
- **Database**: MongoDB

## Demo Video
Watch a walkthrough (5 minutes) of all major features of this app:
[Loom Video Link]()

## Features

**Job Postings Page (Home)**
- Displays job listings in a responsive card format.
- Details Displayed: Job Title, Company Name, Location, and Job Type.
- Search Bar: Allows users to filter job cards by Job Title.
- See Details Button: Navigates to the detailed view of the specific job.
- Delete Button: Instantly removes the job post from the listing using an API call.

**Job Details Page**
- Displays comprehensive information for a selected job.
- Information Included: Job Title, Company Name, Location, Salary, Job Type, and Job Description.
- Qualifications: Renders qualifications as an ordered list.

**Post a Job**
- Dedicated form for employers to submit new job listings.
- Form Fields: Job Title, Company Name, Location, Salary (Number), Job Type (Dropdown), Job Description, and Required Qualifications.

- Validation: Ensures all fields are correctly filled before submission.
- Toast Messages: Provides user feedback (e.g., "Job Posted Successfully!").

**Responsive Design**
- The application and navigation bar adapt seamlessly to different screen sizes.

## API Reference

### **GET /jobs**
Fetch all available job postings..<br>	 
Sample Response:<br>
```[{ _id, jobTitle, companyName, location, ... }, …]```

### **GET /jobs/:id**
Get detailed information for a single job posting by ID.<br>
Sample Response: <br>
```[{ _id, jobTitle, jobDescription, salary, jobQualification, ... }]```

### **POST	/jobs**	
Create a new job posting.<br>	
Sample Response:<br>
```{ _id, jobTitle, companyName, location, jobDescription, salary, jobQualification, }```

### **DELETE /jobs/:id**<br>  	
Delete a job posting by ID.<br> 	 
Sample Response:<br> 
```{ "message": "Job deleted successfully" }```

## Contact
For bugs or feature requests, please reach out to sharayu.borude27@gmail.co