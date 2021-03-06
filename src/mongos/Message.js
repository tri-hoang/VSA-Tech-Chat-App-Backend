import mongoose, { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
	roomRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
	userName: String,
	message: String,
}, { timestamps: { createdAt: 'createdAt' } });

const Message = model('Message', MessageSchema);
export { Message, MessageSchema };
