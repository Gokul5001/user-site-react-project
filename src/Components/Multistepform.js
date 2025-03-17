import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import CommunicationDetails from './CommunicationDetails';
import AddressDetails from './AddressDetails';
import EducationDetails from './EducationDetails';
import SalaryDetails from './SalaryDetails';
import axios from 'axios';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    PersonalDetails : {
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
      employeeStatus:'',
    },
    CommunicationDetails: {
      companyEmail: '',
      personalEmail: '',
      primaryMobile: '',
      contactPersonPrimary: '',
      secondaryMobile: '',
      contactPersonSecondary: '',
      additionalMobile: '',
      contactPersonAdditional: '',
    },
    AddressDetails: {
      presentAddress: '',
      permanentAddress: '',
    },
    EducationDetails: {
      qualification: '',
      institution: '',
      certificates: '',
      previousExperience: '',
    },
    SalaryDetails: {
      grossSalary: '',
      esi: '',
      pf: '',
      netSalary: '',
      pfNumber: '',
      esiNumber: '',
      uan: '',
    },
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/submit', formData);
      console.log('Data submitted successfully', response.data);
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };

  switch (step) {
    case 1:
      return (
        <PersonalDetails
          nextStep={nextStep}
          formData={formData.personalDetails}
          setFormData={(data) => setFormData({ ...formData, personalDetails: data })}
        />
      );
    case 2:
      return (
        <CommunicationDetails
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData.communicationDetails}
          setFormData={(data) => setFormData({ ...formData, communicationDetails: data })}
        />
      );
    case 3:
      return (
        <AddressDetails
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData.addressDetails}
          setFormData={(data) => setFormData({ ...formData, addressDetails: data })}
        />
      );
    case 4:
      return (
        <EducationDetails
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData.educationDetails}
          setFormData={(data) => setFormData({ ...formData, educationDetails: data })}
        />
      );
    case 5:
      return (
        <SalaryDetails
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          formData={formData.salaryDetails}
          setFormData={(data) => setFormData({ ...formData, salaryDetails: data })}
        />
      );
    default:
      return null;
  }
};

export default MultiStepForm;
