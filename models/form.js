const mongoose=require("mongoose")
const formSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    gmail:{
        type:String
    },
    text1:{
        type:String
    }
})

const Form=mongoose.model("Form",formSchema);
module.exports=Form;