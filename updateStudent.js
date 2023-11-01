const axios = require('axios');

const updatedStudent = {
  id:'1003',
  name: 'abdirahmaan',
  email: 'abdirahmaan@gmail.com',
};

const studentIdToUpdate = '1003';
axios
  .put(`http://localhost:3000/students/${studentIdToUpdate}`, updatedStudent) 
  .then((response) => {
    console.log('Student updated successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error updating student:', error);
  });
