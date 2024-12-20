/*import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MemberContext } from '../context/MemberContext'; // Adjust based on your context structure
import './AddMember.css';

const AddMember = () => {
  const { addMember } = useContext(MemberContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    age: '',
    joined: '',
    joinedDate: '',
    packageTaken: '',
    packageAmount: '',
    trainer: '',
    username: '',
    password: '',
    profilePic: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      addMember(data); // Update context with the new member
      navigate('/view-member'); // Navigate to view the member list or member details
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="headerB">
        <div className="header-rightB">
          <button className="logout-buttonB user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-sectionB">
        <div className="logo-containerB">
          <img src={require('../assets/images/OIP.jpg')} alt="LogoB" className="logoB" />
        </div>
        <div className="welcome-textB">
          <h1>Add Member</h1>
          <p>Fill in the details to add a new member</p>
        </div>
      </div>
      <main className="admin-main">
        <section className="add-member">
          <h2>ADD MEMBER</h2>
          <form className="add-member-form" onSubmit={handleSubmit}>
           
            <div className="form-section">
              <h3>Personal Details</h3>
              <div className="form-groupB">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

           
            <div className="form-section">
              <h3>Membership Details</h3>
              <div className="form-groupB">
                <label>Joined</label>
                <input
                  type="text"
                  name="joined"
                  value={formData.joined}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Joined Date</label>
                <input
                  type="date"
                  name="joinedDate"
                  value={formData.joinedDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Package Taken</label>
                <input
                  type="text"
                  name="packageTaken"
                  value={formData.packageTaken}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Package Amount</label>
                <input
                  type="number"
                  name="packageAmount"
                  value={formData.packageAmount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Trainer</label>
                <input
                  type="text"
                  name="trainer"
                  value={formData.trainer}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            
            <div className="form-section">
              <h3>Account Details</h3>
              <div className="form-groupB">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupB">
                <label>Profile Picture URL</label>
                <input
                  type="url"
                  name="profilePic"
                  value={formData.profilePic}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="add-member-button">Add Member</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AddMember;*/



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMember.css';

const AddMember = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    age: '',
    packageAmount: '',
    packageTaken: '',
    username: '',
    password: '',
    profilePic: '',
    joined: '',
    trainer: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      navigate('/view-member');
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="headerB">
        <div className="header-rightB">
          <button className="logout-buttonB user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-sectionB">
        <div className="logo-containerB">
          <img src={require('../assets/images/OIP.jpg')} alt="LogoB" className="logoB" />
        </div>
        <div className="welcome-textB">
          <h1>Add Member</h1>
          <p>Fill in the details to add a new member</p>
        </div>
      </div>
    <div className="add-member">
      <h2>Add Member</h2>
      <form className="add-member-form" onSubmit={handleSubmit}>
        <div className="form-groupB">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Package Amount:</label>
          <input
            type="number"
            name="packageAmount"
            value={formData.packageAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Package Taken:</label>
          <input
            type="text"
            name="packageTaken"
            value={formData.packageTaken}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Profile Picture URL:</label>
          <input
            type="text"
            name="profilePic"
            value={formData.profilePic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Joined:</label>
          <input
            type="text"
            name="joined"
            value={formData.joined}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupB">
          <label>Trainer:</label>
          <input
            type="text"
            name="trainer"
            value={formData.trainer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
    </div>
    </div>
  );
};

export default AddMember;




