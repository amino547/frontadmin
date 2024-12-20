import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import AdminDashboard from './components/Admin';
import SignIn from './components/SignIn';
import Membres from './compo/Membres';
import Trainers from './compo/Trainers';
import Equipment from './compo/Equipment';
import Packages from './compo/Packages';
import AddTrainer from './List/AddTrainer';
import ViewTrainer from './List/ViewTrainer';
import ApproveTrainer from './List/ApproveTrainer'
import EditTrainer from './Edit/EditTrainer'
import TrainerShift from './List/TrainerShift';
import AddMember from './List1/AddMember';
import ViewMembers from './List1/ViewMember';
import MemberPackage from './List1/MemberPackage';
import ApproveMember from './List1/ApproveMember';
import AddEquipment from './List2/AddEquipment';
import ViewEquipment from './List2/ViewEquipment';
import ViewPackage from './List3/ViewPackage';
import AddPackage from './List3/AddPackage';
import { TrainerProvider } from './context/TrainerContext';
import { MemberProvider } from './context/MemberContext';
import { EquipmentProvider } from './context/EquipmentContext';
import EditEquipment from './Edit/EditEquipment';
import EditPackage from './Edit/EdiPackage';
import { PackageProvider } from './context/PackageContext';
import './App.css';
import EditMember from './Edit/EditMember';

const App = () => {
  // State for managing members

  // State for managing equipment
  
  // State for managing packages




  // Function to add a new member

  // Function to add a new equipment






  return (
    <TrainerProvider>
      <MemberProvider>
      <EquipmentProvider>
        <PackageProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboardadmin" element={<AdminDashboard />} />
          <Route path="/members" element={<Membres />} />
          <Route path="/view-trainer" element={<ViewTrainer />} />
          <Route path="/approve-trainer" element={<ApproveTrainer  />} />
          <Route path="/edit-trainer/:id" element={<EditTrainer  />} />
          <Route path="/trainer-shift" element={<TrainerShift />} />
          <Route path="Trainers" element={<Trainers/>}/>
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/add-trainer" element={<AddTrainer  />} />
          <Route path="/add-member" element={<AddMember/>} />
          <Route path="/view-member" element={<ViewMembers/>} />
          <Route path="/edit-member/:id" element={<EditMember />} />
          <Route path="/member-package" element={<MemberPackage />} />
          <Route path="/approve-member" element={<ApproveMember/>} />
          <Route path="/add-equipment" element={<AddEquipment  />} />
          <Route path="/view-equipment" element={<ViewEquipment />} />
          <Route path="/edit-equipment/:id" element={<EditEquipment />} />
          <Route path="/view-package" element={<ViewPackage />} />
          <Route path="/add-package" element={<AddPackage  />} />
          <Route path="/edit-package/:id" element={<EditPackage />} />
        </Routes>
       
      </div>
      </PackageProvider>
      </EquipmentProvider>
      </MemberProvider>
      </TrainerProvider>
    
  );
};

export default App;







