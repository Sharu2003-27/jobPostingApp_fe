import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import AddjobPost from './pages/AddjobPost.jsx';
import JobDetails from './pages/JobDetails.jsx';

export default function App() {
  return (
    <>
     <Nav />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/jobPosting' element={<Home />}/>
        <Route path='/addJobPost' element={<AddjobPost />}/>
        <Route path='/jobDetails/:id' element={<JobDetails />}/>
      </Routes>
    </>
  )
}

