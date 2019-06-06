<<<<<<< HEAD
import mongoose, { Schema, model } from 'mongoose';
=======
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
>>>>>>> 2b7b57b15f328da4416264af7b304cb8f638df24

const RoomSchema = new Schema({
	roomName: String,
	messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
}, { timestamps: { createdAt: 'createdAt' } });

const Room = model('Room', RoomSchema);
export { Room, RoomSchema };
