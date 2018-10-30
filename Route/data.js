const express = require('express');

const router = express.Router();
const News = require('../schema/schema2');
const Comp = require('../schema/schema');

/*----------- MongoDB Data Get -------------*/
router.get('/getComp',(req,res)=>{
  Comp.find()
  .then(comp=>{
    res.send(comp);
    res.status(200).json(comp);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

router.get('/getSaveNews', (req,res)=>{
  News.find()
  .then(data => {
    res.send(data)
    res.status(200).json(data);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

router.post('/getSaveNews', (req, res) => {
  const array =[{
    title:req.body.title,
    desc: req.body.desc,
    imageUrl: req.body.image,
    url: req.body.url,
  }];
  News.insertMany(array)
  .then(res =>{
    res.send(res);
    res.status(200).json(res);
  })
  .catch(err=>{
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
    res.send(res);
    res.status(200).json(res);
  })
  .catch(err=>{
    res.status(400).json(err);
  });
})

module.exports = router;
