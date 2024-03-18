
const express = require("express")

const bodyParser = require("body-parser");

const rounter = express.Router()

var users = [
    {
        id:1,
        first_name : "Pranav",
        last_name : "Nalawade",
        age : 20
    },
    {
        id:2,
        first_name : "Sahil",
        last_name : "Jain",
        age : 34
    },
    {
        id:3,
        first_name : "Mahesh",
        last_name : "Pai",
        age : 43
    }
]

rounter.get('/',(req,res)=>{
    res.send(users)
})

rounter.post('/',(req,res)=>{
    const user = req.body
    users.push({...user})
    res.send(`${user.first_name} has been added to db`)
})

rounter.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id); // Use == for comparison
    res.send(foundUser);
});

rounter.delete('/:id', (req, res) => {
    const { id } = req.params;


    users = users.filter((user) => user.id !== id);

    res.send(`${id} deleted the user`);
});

rounter.patch('/:id', (req, res) => {
    const { id } = req.params;
  
    const { first_name, last_name, email} = req.body;
  
    const user = users.find((user) => user.id === id)
  
    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;
  
    res.send(`User with the ${id} has been updated`)
    
  });



module.exports =  rounter