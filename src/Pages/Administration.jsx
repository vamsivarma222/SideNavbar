import React, { useState } from 'react';

const Administration = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    subject: '',
    resume: '',
    url: '',
    about: '',
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    setValues({
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      subject: '',
      resume: '',
      url: '',
      about: '',
    }); 
  };

  return (
    <div className='container'>
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="firstname">First name:</label>
        <input type="text" placeholder='Enter the first name' name='firstname'
          value={values.firstname} onChange={handleChanges} required />

        <label htmlFor="lastname">Last name:</label>
        <input type="text" placeholder='Enter the last name' name='lastname'
          value={values.lastname} onChange={handleChanges} required />

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder='Enter the email' name='email'
          value={values.email} onChange={handleChanges} required />

        <label htmlFor="contact">Contact:</label>
        <input type="number" placeholder='Enter the contact' name='contact'
          value={values.contact} onChange={handleChanges} />

        <label htmlFor="gender">Gender:</label>
        <input type="radio" name='gender' value="Male" onChange={handleChanges} /> Male
        <input type="radio" name='gender' value="Female" onChange={handleChanges} /> Female
        <input type="radio" name='gender' value="Other" onChange={handleChanges} /> Other

        <label htmlFor='subject'>Subject:</label>
        <select name='subject' id='subject' value={values.subject} onChange={handleChanges}>
          <option value='Maths'>Maths</option>
          <option value='Science'>Science</option>
          <option value='English'>English</option>
        </select>

        <label htmlFor='resume'>Resume:</label>
        <input type="file" name='resume' onChange={handleChanges} />

        <label htmlFor='url'>URL:</label>
        <input type="url" placeholder='Enter the URL' name='url'
          value={values.url} onChange={handleChanges} />

        <label htmlFor='about'>About:</label>
        <textarea name='about' id='about' cols='30' rows='10'
          value={values.about} onChange={handleChanges} placeholder='Enter About you'></textarea>

        <button 
          type='button' onClick={() => setValues({firstname: '', lastname: '', email: '', contact: '', subject: '', resume: '', url: '', about: ''})}> Reset
        </button> 

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Administration;
