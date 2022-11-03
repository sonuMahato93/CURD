const axios =require('axios');
const { response } = require('express');


exports.homeRoutes=(req,res)=>{

    axios.get('http://localhost:8000/save')
    .then(function(response){
        console.log(response)
    res.render('index',{users:response.data});
})
.catch(err=>{
    res.send(err)
})
}



exports.add_user=(req,res)=>{
    res.render('add_user')
}

exports.update_user=(req,res)=>{
    axios.get('http://localhost:8000/save',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('update_user',{user:userdata.data})
    })
   .catch(err=>{
    res.send(err)
   })
}