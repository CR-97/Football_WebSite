const mongoose = require('mongoose');

const comp = mongoose.Schema({
  comp_id:{
    type:String
  },
  comp_name:{
    type:String
  },
  comp_area:{
    type:String
  }
});

const news = mongoose.Schema({
  title:{
    type: String
  },

  desc:{
    type: String
  },

  imageUrl:{
    type: String
  },

  url:{
    type: String
  },
});

const like = mongoose.Schema({
  name:{
    type:String
  },
  crest:{
    type:String
  },
  site:{
    type:String
  },
  stadium:{
    type:String
  }
});
const Like  = mongoose.model('Like', like, "Saved_Teams");
const News  = mongoose.model('News', news, "Saved_News");
const Comp = mongoose.model('Comp',comp,'competitions');
module.exports = {News, Comp, Like};