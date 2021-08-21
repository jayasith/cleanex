const payment = require('../models/payment.model')

const getAllPayment = async(req, res)=>{
        try{
            const payments = await payment.find()
             res.status(200).json({payments: payments})
        }catch(err){
            res.status(400)
            console.log(err.message)
        }
}

const addPayment = async(req, res)=>{
        try{
            const newPayment = new payment(req.body)
            await newPayment.save()
             res.status(200).json(newPayment._id)
        }catch(err){
            res.status(400).json(err)
            
        }
}

module.exports = {addPayment, getAllPayment}