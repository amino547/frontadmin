/*import React, { useState, useContext } from 'react';
import { TrainerContext } from '../context/TrainerContext';
import './ApproveTrainer.css';

const ApproveTrainer = () => {
  const { trainers, setTrainers } = useContext(TrainerContext);
  const [approvedTrainers, setApprovedTrainers] = useState([]);

  const handleApprove = (id) => {
    const trainerToApprove = trainers.find(trainer => trainer.id === id);
    setApprovedTrainers([...approvedTrainers, trainerToApprove]);
    setTrainers(trainers.filter(trainer => trainer.id !== id));
  };

  const handleReject = (id) => {
    const updatedTrainers = trainers.filter(trainer => trainer.id !== id);
    setTrainers(updatedTrainers);
  };

  return (
    <div className="user">
      <div className="hea">
        <div className="hea-right">
          <button className="logout-but user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-se">
        <div className="logo-co">
          <img
            src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')}
            alt="Logo"
            className="lo"
          />
        </div>
        <div className="welcome-te">
          <h1>Approve Trainer</h1>
          <p>Review and approve the trainer</p>
        </div>
      </div>
      <main className="admin-main1">
        <section className="pending-trainer-list">
          <h2>Pending Trainer List</h2>
          <table className='tab'>
            <thead className='the'>
              <tr>
                <th>Name</th>
                <th>Profile Pic</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>Experience</th>
                <th>Requested Date</th>
                <th>Approve</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {trainers.map((trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.name}</td>
                  <td><img src={trainer.profilePic} alt={trainer.name} style={{ width: '50px', height: '50px' }} /></td>
                  <td>{trainer.mobile}</td>
                  <td>{trainer.age}</td>
                  <td>{trainer.experience}</td>
                  <td>{trainer.requestedDate}</td>
                  <td>
                    <button onClick={() => handleApprove(trainer.id)}>Approve</button>
                  </td>
                  <td>
                    <button onClick={() => handleReject(trainer.id)}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="approved-trainer-list">
          <h2>Approved Trainer List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Profile Pic</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>Experience</th>
                <th>Requested Date</th>
              </tr>
            </thead>
            <tbody>
              {approvedTrainers.map((trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.name}</td>
                  <td><img src={trainer.profilePic} alt="Profile" /></td>
                  <td>{trainer.mobile}</td>
                  <td>{trainer.age}</td>
                  <td>{trainer.experience}</td>
                  <td>{trainer.requestedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ApproveTrainer;*/


import React, { useEffect, useState } from 'react';
import './ApproveTrainer.css';

const ApproveTrainer = () => {
  const [pendingTrainers, setPendingTrainers] = useState([]);

  useEffect(() => {
    const fetchPendingTrainers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trainers');
        const data = await response.json();
        setPendingTrainers(data);
      } catch (error) {
        console.error('Error fetching pending trainers:', error);
      }
    };

    fetchPendingTrainers();
  }, []);

  const handleApprove = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/trainers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ approved: true }),
      });
      setPendingTrainers(pendingTrainers.filter(trainer => trainer._id !== id));
    } catch (error) {
      console.error('Error approving trainer:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/trainers/${id}`, {
        method: 'DELETE',
      });
      setPendingTrainers(pendingTrainers.filter(trainer => trainer._id !== id));
    } catch (error) {
      console.error('Error rejecting trainer:', error);
    }
  };

  return (
    <div className="user">
      <div className="hea">
        <div className="hea-right">
          <button className="logout-but user-info-button">Logout</button>
        </div>
      </div>
      <div className="welcome-se">
        <div className="logo-co">
          <img src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')} alt="LogoB3" className="logoB3" />
        </div>
        <div className="welcome-te">
          <h1>Approve Trainer</h1>
          <p>Fill in the details to add a approve trainer</p>
        </div>
      </div>
      <div className="pending-trainer-list">
        <h2>Pending Trainer List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profile Pic</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Experience</th>
              <th>Salary</th>
              <th>Joined</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {pendingTrainers.map((trainer) => (
              <tr key={trainer._id}>
                <td>{trainer.name}</td>
                <td><img src={trainer.profilePic} alt={trainer.name} style={{ width: '50px', height: '50px' }} /></td>
                <td>{trainer.mobile}</td>
                <td>{trainer.age}</td>
                <td>{trainer.experience}</td>
                <td>{trainer.salary}</td>
                <td>{trainer.joined}</td>
                <td>
                  <button className="approve-button" onClick={() => handleApprove(trainer._id)}>Approve</button>
                </td>
                <td>
                  <button className="reject-button" onClick={() => handleReject(trainer._id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveTrainer;



