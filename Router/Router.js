const express = require('express');
const modalsdata = require('../Modal/Modal');
const { getData, addData, UpdateData, deleteData } = require('../Controler/Controler');
const app = express();

const router = express.Router();

router.get('/',async(req,res)=>{

    const {limit,page} = req.query;


    try {
        const data = await getData(limit,page);

        return res.send({
            data:data
        })
    } catch(err) {
        console.error(err.message)

        return res.status(500).send({
            message: err.message
        })
    }
})

router.post('/',async(req,res)=>{
    const body = req.body;
 
    try {
        const data = await addData(body)
        return res.send({
            data:data
        })
    } catch(err) {
        console.error(err.message)

        return res.status(500).send({
            message: err.message
        })
    }
})


router.patch('/:id',async(req,res)=>{
     const id = req.params.id;
     const body = req.body;

     try {
        const data = await UpdateData(id,body);
         return res.send({
             data:"updated this data" , data
         })
     } catch(err) {
         console.error(err.message)
 
         return res.status(500).send({
            message: err.message
         })
     }
 })

 
router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    
   
    try {
        const data = await deleteData(id);
        return res.send({
            data:"delete", data
        })
    } catch(err) {
        console.error(err.message)

        return res.status(500).send({
            message: err.message
        })
    }
})

module.exports = router