const express = require ('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get ('/',(req,res)=>{
    res.send('Hello from node!! we are learning nodemon.');
})

const users = [
    {
        id: 0,
        name: 'Nushrat',
        laptop:'HP',
        email:'n@gmail.com'
    },
    {
        id: 1,
        name: 'Emu',
        laptop:'Dell',
        email:'e@gmail.com'
    },
    {
        id: 2,
        name: 'Badhon',
        laptop:'Asus',
        email:'b@gmail.com'
    }
]

app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users);
    }
   
})

app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id= users.length;
    users.push(newUser)
    console.log('hitting the post',req.body);
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    const  id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mangoes','oranges','apples','bananas'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummy yummy fazli !!')
})

app.listen(port,()=>{
    console.log('Listening to port',port)
})