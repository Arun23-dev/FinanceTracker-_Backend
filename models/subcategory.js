import { Collection } from 'mongodb';
import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
  name: {
    type:{
        FoodandBeverge:
            {
                "Bar,Cafe":["Cold drinks","Redbull","Wine"] ,  
                "Groceries":["Fruits","Rice","Vegetables",],
                "ResturantandFastFood":[],
            },
        Shopping:
            {
                "Clothes&Footwear":["shoes","slipper"],
                "Electronics, accessories":[],
                 "Health and Beauty":[],
                "Home,Garden":[],
                 "Jewel , accessories":[],
                 "Kids":[],
                "Pets, animals":[],
                "Stationary Tools":[]
            
            },
        Housing:
            {
                "Energy and Utilities":[],
                "Maintainence ,repairs":[],
                "Property Insurance":[],
                "Rent":[],
                "Services":[],

            },
        Transportation:{
            "public":[],
            "College":[],
            "Taxi":[],
            "Tuition Transportation":[]

        },
        Vehicle:{
          "Fuel":[],
          "leasing":[],
          "Parking":[],
         "Rental":[],
          "Vehicle Insurance":[],
          "Vehicle Maintainence":[],
        },
        Self_Investment:{
            "Active Sport,Fitnesss":[],
            "Appliacne":[],
            "Book and Novel":[],
            "Copy and Diary":[],
            "Education":[],
            "Health":[],
            "Holiday Trips":[],
            "Life Events":[],
            "Wellness and Beauty":[],
        },
        Communication:{

            "Internet":["Home Internet","KTM Internet"],
            Software:["Apps","Games"],
            Telephone:["Recharge","DataPack","LoanPayNecell","LoanfromNcell"],
        },
        FinancialExpenses:{
            lend:[],
            "Loan payment":[],
            prepayment:[],
            Fines:[],
            "Tax Payment":[]
        },
        Investment:{
            Business:[],
            Collection:[],
            Saving:["FD Deposit","Friend"],
            Stocks:["IPO","SecondaryStocks"],
            RealEstate:[],
        },
        Income:{
            Stocks:["Bounus Share","Dividends"],
            Job:[],
            Business:[],
            Refund:[],
            "Rental Income":[],
            "Salary":[],
            "Teaching":[],
        }      
    },
    default: null,
  }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
export default SubCategory;
