const axios = require('axios')

const studentIdToDelete='1003';

axios.delete(`http://localhost:3000/students/${studentIdToDelete}`).then(()=>
{
    console.log('student deleted succesfully');

}).catch((error)=>{
    console.error('there is an error for deletin student:',error)
})