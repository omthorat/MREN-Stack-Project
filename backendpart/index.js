const express = require ('express');
require ('./db/config')
const User = require('./db/User')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());

app.post('/adduser',async (req,resp)=>{
    let user = new User(req.body)
    let result = await user.save();
    resp.send(result)
});
app.get('/userlist',async(req,resp)=>{
    let user = await User.find();
    resp.send(user)
})
app.delete("/userinfos/:id",async (req,resp)=>{
 const result = await User.deleteOne({_id:req.params.id})
 resp.send(result);
})
app.get("/userinfos/:id",async (req,resp)=>{
    const result = await User.find({_id:req.params.id})
    resp.send(result);
 
})
app.put("/userinfos/:id",async(req,resp)=>{
    const result = await User.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
        )
        resp.send(result)
})


app.listen(4000,console.log(`server is running`))