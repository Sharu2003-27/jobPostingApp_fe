# Job Posting App

A full-stack job board application designed for companies to efficiently post and manage job openings, allowing candidates to search, view, and delete it. Built with React (UI), Node.js + Express (API), and MongoDB (Database).

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
[Loom Video Link](https://drive.google.com/file/d/1RS5gRJbxdaPbJDl3vRb5VUxRfze0RMJA/view?usp=sharing)

## Features

**Job Postings Page (Home)**
- Displays job listings in a responsive card layout
- Shows key job details including job title, company name, location, and job type
- Allows users to search jobs by job title using a search bar
- Navigates users to a detailed job view using the “See Details” button
- Deletes a job posting instantly using an API call

**Job Details Page**
- Displays complete information for a selected job
- Shows job title, company name, location, salary, job type, and job description
- Renders required qualifications as an ordered list

**Post a Job**
- Provides a dedicated form for employers to post new job listings
- Accepts job details such as title, company name, location, salary, job type, description, and qualifications
- Validates all form fields before submission
- Displays toast messages for user feedback (e.g., successful job posting)

**Responsive Design**
- Adapts the application layout and navigation bar across all screen sizes

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
