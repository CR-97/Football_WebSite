const mongoose = require('mongoose');

const bundes = mongoose.Schema({
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

const liga = mongoose.Schema({
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

const ligue = mongoose.Schema({
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

const premier = mongoose.Schema({
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

const series = mongoose.Schema({
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

const uefa = mongoose.Schema({
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



const BundesLiga = mongoose.model('BundesLiga',bundes,'BundesLiga');

const Liga = mongoose.model('Liga',liga,'La Liga');

const Ligue = mongoose.model('Ligue 1',ligue,'Ligue 1');

const Premier = mongoose.model('Premier League',premier,'Premier League');

const Series = mongoose.model('Series A',series,'Series A');

const Uefa = mongoose.model('UEFA',uefa,'UEFA');

module.exports = {
  BundesLiga,
  Liga,
  Ligue,
  Premier,
  Series,
  Uefa
};