/*import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MemberContext } from '../context/MemberContext';
import './EditMember.css';

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { members, editMember } = useContext(MemberContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    membershipType: '',
    joinedDate: '',
    username: '',
    password: '',
    image: null,
  });

  useEffect(() => {
    const member = members.find(m => m.id === parseInt(id));
    if (member) {
      setFormData(member);
    }
  }, [id, members]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editMember(formData);
    navigate('/view-member');
  };

  return (
    <div className="edit-member">
      <h2>Edit Member</h2>
      <form className='D' onSubmit={handleSubmit}>
        <div className='D'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Membership Type:</label>
          <input
            type="text"
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Joined Date:</label>
          <input
            type="date"
            name="joinedDate"
            value={formData.joinedDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
        <label>Picture Url:</label>
        <input
          type="text"
          name="profilePic"
          value={formData.profilePic}
          onChange={handleChange}
          required
        />
        </div>
        <button className='DA' type="submit">Update Member</button>
      </form>
    </div>
  );
};

export default EditMember;*/



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMember.css';

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    age: '',
    username: '',
    password: '',
    profilePic: '',
    joined: '',
    trainer: ''
  });

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/members/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching member:', error);
      }
    };

    fetchMember();
  }, [id]);

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
      await fetch(`http://localhost:5000/api/members/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      navigate('/view-member');
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  return (
    <div className="edit-member">
      <h2>Edit Member</h2>
      <form className='D' onSubmit={handleSubmit}>
        <div className='D'>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Profile Picture URL:</label>
          <input
            type="text"
            name="profilePic"
            value={formData.profilePic}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Joined:</label>
          <input
            type="text"
            name="joined"
            value={formData.joined}
            onChange={handleChange}
            required
          />
        </div>
        <div className='D'>
          <label>Trainer:</label>
          <input
            type="text"
            name="trainer"
            value={formData.trainer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Member</button>
      </form>
    </div>
  );
};

export default EditMember;

