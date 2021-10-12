import { Schema, model } from 'mongoose';

const TimeSchema = new Schema({
  brasao: String,
  cod: Number, 
  nome: String,
  serie: String,
  lema: String,
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});

TimeSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.brasao}`;
})

export default model('Time', TimeSchema);