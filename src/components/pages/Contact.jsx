import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log('Service ID:', emailjsServiceId);
console.log('Template ID:', emailjsTemplateId);
console.log('Public Key:', emailjsPublicKey);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]: value});
    setErrors({...errors, [id]: ''});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    return newErrors;
  };

  const formHandler = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      console.log(validateErrors);
      return;
    }
    
    emailjs
      .send(
        emailjsServiceId, 
        emailjsTemplateId, 
        formData, {publicKey: emailjsPublicKey,
        })
      .then((response) => {
        setSuccessMessage('Message sent successfully!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setErrors({});
        setTimeout(() => setSuccessMessage(''), 3000);
        },
        (error) => {
          setErrors({form: 'Failed to send message. Please try again.'});
        }
      );
  };

  return (
    <>
      <h1>Contact</h1>
      <form className='contact' onSubmit={formHandler}>
        <label htmlFor='name'>Name:</label>
        <input 
          type='text' 
          id='name' 
          value={formData.name} 
          onChange={handleChange} 
          placeholder='Enter your name'
          autoComplete='on' 
        />
        {errors.name && <p className='error'>{errors.name}</p>}
        <br/>
        <br/>

        <label htmlFor='email'>Email:</label>
        <input 
          type='email' 
          id='email' 
          value={formData.email} 
          onChange={handleChange} 
          placeholder='Enter your email'
          autoComplete='on' 
        />
        {errors.email && <p className='error'>{errors.email}</p>}
        <br/>
        <br/>
        
        <label htmlFor='message'>Message:</label>
        <textarea 
          id='message' 
          value={formData.message} 
          onChange={handleChange} 
          placeholder='Enter a message here'
        ></textarea>
        {errors.message && <p className='error'>{errors.message}</p>}
        <br/>
        <br/>

        <button id='formbutton' type='submit'>
          Submit
        </button>
      </form>
      {errors.form && <p className='error'>{errors.form}</p>}
      {successMessage && <p className='success'>{successMessage}</p>}
    </>
  );
};

export default Contact;