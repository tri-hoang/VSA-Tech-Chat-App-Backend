<<<<<<< HEAD
import mongoose, { Schema, model } from 'mongoose';
=======
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
>>>>>>> 2b7b57b15f328da4416264af7b304cb8f638df24

const MessageSchema = new Schema({
	roomRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
	userName: String,
	message: String,
}, { timestamps: { createdAt: 'createdAt' } });

const Message = model('Message', MessageSchema);
export { Message, MessageSchema };
