import { ApolloError, UserInputError } from 'apollo-server';
import { Room, Message } from '../mongos';
import { ps } from './Subscription';

const Mutation = {
	addRoom: async (_, args) => {
		try {
			/* Check if room already exists, stop if it does */
			const checkRoom = await Room.findOne({ roomName: args.roomName });
			if (checkRoom) {
				throw new UserInputError("Room already exists");
			}

			/* Create the room and return it */
			const newRoom = new Room({ ...args });
			return await newRoom.save();

		} catch (E) {
			throw new ApolloError("can't addRoom", E);
		}
	},

	addMessage: async (_, args, ctx) => {
		try {
			/* Find the room, stop if cannot find it */
			const findRoom = await Room.findOne({ roomName: args.roomName });
			if (!findRoom) {
				throw new UserInputError("Can't find the room");
			}

			/* Create the new Message object */
			const newMessage = new Message({ ...args, roomRef: findRoom });
			await newMessage.save();

			/* Update room's messages list with the new Message ref */
			findRoom.messages.push(newMessage);
			await findRoom.save();

			/* Publish the new message to anyone in the room */
			await ctx.pubsub.publish(args.roomName, { subscribeRoom: newMessage });
			
			return newMessage;

		} catch (E) {
			throw new ApolloError("can't addMessage", E);
		}
	},


};

export default Mutation;
