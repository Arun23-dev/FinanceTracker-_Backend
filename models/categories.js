import mongoose from 'mongoose';
import SubCategory from './subcategory';
const { Schema } = mongoose;

const categoriesSchema = new Schema({
        userId: { 
            type: Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
       name:{
            type:String,
            required:true,
       },
       category:{
        
            enum:["FoodandBeverge","Shopping","Housing","Transportation","Vehicle","Self-Investment",
                "Communication","Financial Expenses","Investments","Income","Miscellaneous"],
            required:true,

       },
        subCategory:[
            {type:mongoose.Schema.Types.ObjectId,
            ref:SubCategory,
            }
        ],

  
});
const Category = mongoose.model('Category', categoriesSchema);