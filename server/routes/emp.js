const express = require('express')
const router = express.Router()
const {cen } = require('../models/model.js')

router.post('/newemp', async (request,response)=>{

    const employee = new cen({
        name : request.body.name,
        sal : request.body.sal,
        gender : request.body.gender,
        team : request.body.team,
        add : request.body.add,
    })

    employee.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
} )


router.get('/newemp', async (req,res)=>{

    try {
        const cent = await cen.find();
        res.send(cent);
      } 
      catch (e) {
        res.status(400).send(e);
      }
       
    })

router.delete('/newemp/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const cent = await cen.findByIdAndDelete(_id);
    return !cent ? res.sendStatus(404) : res.send(cent);
  } catch (e) {
    return res.sendStatus(400);
  }
});






module.exports = router;