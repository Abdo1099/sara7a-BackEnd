import mongoose from "mongoose";


export function dbConnection(){
    mongoose.connect("mongodb://127.0.0.1:27017/Sara7aApp").
    then(() => { console.log("DB Connected.."); }).
    catch(err => { console.log("You Have an Error in DB Connection..") })
}