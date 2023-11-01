const axios = require('axios');

const newStudent = {
  id: '1003',
  name: 'axmed',
  email: 'axmed@gamil.com',
};

axios
  .post('http://localhost:3000/students', newStudent)
  .then((response) => {
    console.log('Student created successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error creating student:', error);
  })
