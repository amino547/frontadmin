/*import React, { useState } from 'react';
import './TrainerShift.css'; // Import your custom styles here

const TrainerShift = () => {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'Aymen Amara',
      profilePic: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/462579507_925243906250590_2746080164372189834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=OGfJ6MljZGcQ7kNvgEfbbof&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&oh=03_Q7cD1QGpPj11yA-eAAW7jFHhAw7AAi67WZB03Anqxoc_IZM9aw&oe=6787DE35', // Replace with actual image URL
      mobile: '9572181024',
      experience: '1 year',
      shift: '10pm to 12pm',
    },
    {
      id: 2,
      name: 'Amir Majri',
      profilePic: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/462554524_897765038848926_4931494164303261972_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=A1HglqXs7ZcQ7kNvgH3JVxT&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&oh=03_Q7cD1QFiFNZctbyxmZny3yrtHNkZuny6lKdGNGFeCa1QgKKfZg&oe=6787E8AF', // Replace with actual image URL
      mobile: '8872181024',
      experience: '4 years',
      shift: '1pm to 6pm',
    },
    {
      id: 3,
      name: 'Amen Gharbi',
      profilePic: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/462582824_1557046524950681_3839251285244956597_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=3ZlegXms3a0Q7kNvgGY-UW1&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&oh=03_Q7cD1QFDbmWUgx634EOUjIKpQmC4ZUTeoCt6MA6be2Chn-OOdw&oe=6787D64F', // Replace with actual image URL
      mobile: '6572181024',
      experience: '2 years',
      shift: '9am to 2pm',
    },
  ]);

  const handleEditShift = (id) => {
    const trainerToEdit = trainers.find((trainer) => trainer.id === id);
    if (trainerToEdit) {
      const newShift = prompt('Enter new shift:', trainerToEdit.shift);
      if (newShift && newShift.trim()) {
        const updatedTrainers = trainers.map((trainer) =>
          trainer.id === id ? { ...trainer, shift: newShift } : trainer
        );
        setTrainers(updatedTrainers);
      }
    }
  };

  return (
    <div className="admin-dashboard1">
      <header className="head5">
        <div className="header-r5">
          <button className="logout-butt5 user-info-button">Logout</button>
        </div>
        <div className="welcome-s5">
          <div className="logo-c5">
            <img
              src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')}
              alt="Log5"
              className="log5"
            />
          </div>
          <div className="welcome-t5">
            <h1>Trainer Shift</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
      </header>
      <main>
        <section>
          <table className="trainer-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Profile Pic</th>
                <th>Mobile</th>
                <th>Experience</th>
                <th>Shift</th>
                <th>Edit Shift</th>
              </tr>
            </thead>
            <tbody>
              {trainers.map((trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.name}</td>
                  <td>
                  <td><img src={trainer.profilePic} alt={trainer.name} style={{ width: '50px', height: '50px' }} /></td>
                    
                  </td>
                  <td>{trainer.mobile}</td>
                  <td>{trainer.experience}</td>
                  <td>{trainer.shift}</td>
                  <td>
                    <button
                      className="edit-shift-button"
                      onClick={() => handleEditShift(trainer.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default TrainerShift;*/


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainerShift.css';

const TrainerShift = () => {
  const [trainerShifts, setTrainerShifts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainerShifts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trainerShifts');
        const data = await response.json();
        setTrainerShifts(data);
      } catch (error) {
        console.error('Error fetching trainer shifts:', error);
      }
    };

    fetchTrainerShifts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/trainerShifts/${id}`, {
        method: 'DELETE',
      });
      setTrainerShifts(trainerShifts.filter(shift => shift._id !== id));
    } catch (error) {
      console.error('Error deleting trainer shift:', error);
    }
  };

  return (
    <div className="admin-dashboard1">
      <header className="head5">
        <div className="header-r5">
          <button className="logout-butt5 user-info-button">Logout</button>
        </div>
        <div className="welcome-s5">
          <div className="logo-c5">
            <img
              src={require('../assets/images/human-biceps-hand-on-white-vector.jpg')}
              alt="Log5"
              className="log5"
            />
          </div>
          <div className="welcome-t5">
            <h1>Trainer Shift</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Trainer Name</th>
            <th>Shift Start</th>
            <th>Shift End</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {trainerShifts.map((shift) => (
            <tr key={shift._id}>
              <td>{shift.trainerId.name}</td>
              <td>{new Date(shift.shiftStart).toLocaleString()}</td>
              <td>{new Date(shift.shiftEnd).toLocaleString()}</td>
              <td>
                <button className="edit-button" onClick={() => navigate(`/edit-trainer-shift/${shift._id}`)}>Edit</button>
              </td>
              <td><button onClick={() => handleDelete(shift._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerShift;




