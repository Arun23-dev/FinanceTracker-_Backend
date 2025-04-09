import mongoose from 'mongoose';
const { Schema } = mongoose;

const transactionSchema = new Schema({
        userId: { 
            type: Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
        amount:{
            type:Number,
            required:true,
        },
        transactionType:{
            type:String,
            enum:["income","expense","transfer"],
            required:true,
        },
        paymentMethod:{
            type:String,
            enum:["Cash","Credit Card","Debit Card","Esewa","Imepay","FonePay","Khalti"],
            required:true,
        },
        time:{
            type:Date,
            require:true,
            default:data.now()
        }
  
});
const Transaction = mongoose.model('Transaction', transactionSchema);