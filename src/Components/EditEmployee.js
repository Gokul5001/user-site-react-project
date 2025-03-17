import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Step1 from '../Components/step1';
import Step2 from '../Components/step2';
import Step3 from '../Components/step3';
import Step4 from '../Components/step4';
import Step5 from '../Components/step5';
import Step6 from '../Components/step6';


const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ecode: '',
    fid: '',
    name: '',
    designation: '',
    dob: '',
    gender: '',
    bg: '',
    fhname: '',
    employeeStatus:'',
    cemail: '',
    pemail: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    person1: '',
    person2: '',
    person3: '',
    address1: '',
    address2: '',
    qual: '',
    inst: '',
    cert: '',
    aadhar: '',
    att1: '',
    pan: '',
    att2: '',
    vid: '',
    att3: '',
    foldername: '',
    accnumber: '',
    bname: '',
    branch: '',
    ifsc: '',
    passbook: '',
    gs: '',
    pf: '',
    esi: '',
    netsal: '',
    cdate: '',
    team: '',
    user: '',
    userpassword: '',
    role: '',
    ugroup: '',
    cip: '',
    mdate: '',
    mip: '',
    username: '',
    password: '',
    cby: '',
    mby: '',
    doj: '',
    dor: '',
    ms: '',
    uan: '',
    pfn: '',
    esin: '',
    exp: '',
    fcm_id: '',
    old_password: '',
    work_from_home: '',
  
  });


  useEffect(() => {
    fetch(`http://localhost:3001/employees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => console.error('Error fetching employee details:', error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Employee details updated successfully!');
        navigate('/employees');
      } else {
        console.log('Failed to update employee details');
      }
    } catch (error) {
      console.error('Error updating employee details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 6));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  return (
    <div className="container mx-auto flex-items-center justify-center">
      <h1 className="text-3xl font-bold my-4">Update Employee</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex-items-center justify-center">
        {step === 1 && <Step1 formData={formData}  setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 6 && <Step6 formData={formData} handleChange={handleChange} prevStep={prevStep} />}
      </form>
    </div>
  );
};

export default EditEmployee;




