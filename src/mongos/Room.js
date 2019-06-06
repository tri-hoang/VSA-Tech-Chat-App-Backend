import mongoose, { Schema, model } from 'mongoose';

const RoomSchema = new Schema({
	roomName: String,
	messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
}, { timestamps: { createdAt: 'createdAt' } });

const Room = model('Room', RoomSchema);
export { Room, RoomSchema };
