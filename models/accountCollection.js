import mongoose from 'mongoose';
const { Schema } = mongoose;

const transactionSchema = new Schema({
        userId: { 
            type: Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
       
  
});
const Transaction = mongoose.model('Transaction', transactionSchema);