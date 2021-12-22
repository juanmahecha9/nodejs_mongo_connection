import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Event_ =  Schema({
    event_name: {
        type: String,
        required: true,
        trim: true
    },
    id_chat: {
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: String,
        required: true,
        trim: true
    }
},{
    versionKey: false,
})

//module.exports =  mongoose.model("Event", Event_)
export default mongoose.model("evento", Event_)