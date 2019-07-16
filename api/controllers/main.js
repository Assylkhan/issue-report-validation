const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Visit = require('../models/visit');

const getMainData = (req, res) => {
	
  // VisitsSchema.findByIdAndUpdate(id, updateObj, {new: true}, function(err, model) {...
  Visit.findById(1, function (err, visit) {
    var newVisit;
    if (visit == null) {
      newVisit = new Visit();
      newVisit._id = 1;
      newVisit.visitsAmount = 0;
    } else {
      newVisit = visit;
    }
    if (req.query.role != 'TheFountainhead'){  
      newVisit.visitsAmount += 1;
    }
    
    newVisit.save()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      if (req.query.role == 'TheFountainhead'){  
        res.json({visitcount: newVisit.visitsAmount});  
      } else {
        res.json({resp: 'ok'});
      }
  });
	
  // res.json({resp: 'myResp'});
  // db.select('*').from('testtable1')
  //   .then(items => {
  //     if(items.length){
  //       res.json(items)
  //     } else {
  //       res.json({dataExists: 'false'})
  //     }
  //   })
  //   .catch(err => res.status(400).json({dbError: 'db error'}))
}

// const postTableData = (req, res, db) => {
//   const { first, last, email, phone, location, hobby } = req.body
//   const added = new Date()
//   db('testtable1').insert({first, last, email, phone, location, hobby, added})
//     .returning('*')
//     .then(item => {
//       res.json(item)
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

// const putTableData = (req, res, db) => {
//   const { id, first, last, email, phone, location, hobby } = req.body
//   db('testtable1').where({id}).update({first, last, email, phone, location, hobby})
//     .returning('*')
//     .then(item => {
//       res.json(item)
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

// const deleteTableData = (req, res, db) => {
//   const { id } = req.body
//   db('testtable1').where({id}).del()
//     .then(() => {
//       res.json({delete: 'true'})
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

module.exports = {
  getMainData
}