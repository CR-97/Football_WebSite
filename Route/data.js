const express = require('express');

const router = express.Router();
const {News , Comp, Like} = require('../schema/schema');
const {BundesLiga,
  Liga,
  Ligue,
  Premier,
  Series,
  Uefa} = require('../schema/schema2');

/*----------- MongoDB Data Get -------------*/

/* GET TEAMS*/
router.get('/getTeam/2002',(req,res)=>{
  BundesLiga.find()
  .then(team=>{
    res.status(200).json(team);
  })
  .catch(err=>{
   
    res.status(404).json(err);
  })
})

router.get('/getTeam/2001',(req,res)=>{
  Uefa.find()
  .then(team=>{
    
    res.status(200).json(team);
  })
  .catch(err=>{
    
    res.status(404).json(err);
  })
})

router.get('/getTeam/2014',(req,res)=>{
 Liga.find()
  .then(team=>{
    
    res.status(200).json(team);
  })
  .catch(err=>{
    
    res.status(404).json(err);
  })
})

router.get('/getTeam/2015',(req,res)=>{
  Ligue.find()
  .then(team=>{
    
    res.status(200).json(team);
  })
  .catch(err=>{
    
    res.status(404).json(err);
  })
})

router.get('/getTeam/2019',(req,res)=>{
  Series.find()
  .then(team=>{
    
    res.status(200).json(team);
  })
  .catch(err=>{
    
    res.status(404).json(err);
  })
})

router.get('/getTeam/2021',(req,res)=>{
  Premier.find()
  .then(team=>{
    
    res.status(200).json(team);
  })
  .catch(err=>{
   
    res.status(404).json(err);
  })
})
/* End of GET TEAMS*/

router.get('/getComp',(req,res)=>{
  Comp.find()
  .sort({comp_name:'asc'})
  .then(comp=>{
   
    res.status(200).json(comp);
  })
  .catch(err=>{
    
    res.status(404).json(err);
  })
})

router.get('/getSaveNews', (req,res)=>{
  News.find()
  .then(data => {
    
    res.status(200).json(data);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

router.post('/getSaveNews/add', (req, res) => {
  const array =[{
    title:req.body.title,
    desc: req.body.desc,
    imageUrl: req.body.image,
    url: req.body.url
  }];
  News.insertMany(array)
  .then(res =>{
    res.send("Item added");
    res.status(200).json(res);
  })
  .catch(err=>{
    res.send("Add Failed");
    res.status(404).json(err);
  });
})

router.post('/getSaveNews/delete', (req, res) => {
  console.log(req.body.title);
  const query = {
    title : req.body.title
  };
  News.deleteOne(query)
  .then(res=>{
    res.send("Item deleted");
    res.status(200).json(res);
  })
  .catch(err=>{
    res.send("Delete Failed");
    res.status(400).json(err);
  });
})

router.get('/getSaveTeams', (req,res)=>{
  Like.find()
  .then(data => {
    
    res.status(200).json(data);
  })
  .catch(err=>{
    
    res.status(404).json(err);
  })
})

router.post('/getSaveTeams/add', (req, res) => {
  const array =[{
    name:req.body.name,
    crest: req.body.crest,
    site: req.body.site,
    stadium: req.body.stadium
  }];
  Like.insertMany(array)
  .then(res =>{
    res.send("Item added");
    res.status(200).json(res);
  })
  .catch(err=>{
    res.send("Add Failed");
    res.status(404).json(err);
  });
})

router.post('/getSaveTeams/delete', (req, res) => {
  console.log("name = ",req.body.name);
  const query = {
    name : req.body.name
  };
  Like.deleteOne(query)
  .then(res =>{
    res.send("Item deleted")
    res.status(200).json();
  })
  .catch(err=>{
    res.send("Delete Failed");
    res.status(404).json(err);
  });
})

module.exports = router;
