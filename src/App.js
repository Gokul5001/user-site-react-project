// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbarr';
import PersonalDetails from './Components/PersonalDetails';
import CommunicationDetails from './Components/CommunicationDetails';
import AddressDetails from './Components/AddressDetails';
import EducationDetails from './Components/EducationDetails';
import SalaryDetails from './Components/SalaryDetails';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import EmployeeList from './Components/EmployeeList';
import EditEmployee from './Components/EditEmployee';
import ProductPage from './Components/ProductPage';
import ChatBot from 'react-chatbotify';
import TeamMaster from './Components/TeamMaster';
import FinalDetails from './Components/FinalDetails';
import MyAccount from './Components/MyAccount'; 

function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employeeCode: '',
    fingerprintID: '',
    name: '',
    designation: '',
    dateOfBirth: '',
    dateOfJoining: '',
    dateOfRelease: '',
    maritalStatus: '',
    gender: '',
    bloodGroup: '',
    fatherOrHusbandName: '',
    eStatus: '', 
    companyEmail: '',
    personalEmail: '',
    primaryMobile: '',
    contactPersonPrimary: '',
    secondaryMobile: '',
    contactPersonSecondary: '',
    additionalMobile: '',

    contactPersonAdditional: '',
    presentAddress: '',
    permanentAddress: '',
    qualification: '',
    institution: '',
    certificates: '',
    previousExperience: '',
    grossSalary: '',
    esi: '',
    pf: '',
    netSalary: '',
    pfNumber: '',
    esiNumber: '',
    uan: '',
    teamname: '', 
    passwordnew: '' 
  });

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        navigate('/employees'); // Redirect to employee list after successful submission
      } else {
        console.log("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <PersonalDetails
          nextStep={handleNext}
          prevStep={handlePrev}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 2 && (
        <CommunicationDetails
          prevStep={handlePrev}
          nextStep={handleNext}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 3 && (
        <AddressDetails
          prevStep={handlePrev}
          nextStep={handleNext}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 4 && (
        <EducationDetails
          prevStep={handlePrev}
          nextStep={handleNext}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 5 && (
        <SalaryDetails
          prevStep={handlePrev}
          nextStep={handleNext}
          formData={formData}
          setFormData={setFormData}
         
        />
      )}
       {currentStep === 6 && (
        <FinalDetails
          prevStep={handlePrev}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit} // Submit on final step
        />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/team-master" element={<TeamMaster/>}/>
          <Route path="/support" element={<ChatBot/>}/>
          <Route path="/MyAccount" element={<MyAccount />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
