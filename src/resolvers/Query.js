import { ApolloError, UserInputError } from "apollo-server";
import { Room, Message } from '../mongos';

const Query = {
	getRoom: async (_, args) => {
		try {
			/* Find the room, stop if cannot find it */
			const findRoom = await Room.findOne({ roomName: args.roomName });
			if (!findRoom) {
				throw new UserInputError("Can't find the room");
			}

			/* Populate the messages field and return the room */
			await findRoom.populate("messages").execPopulate();

			return findRoom;
		} catch (E) {
			throw new ApolloError("can't getRoom", E);
		}
	},

	getMessages: async (_, args) => {
		try {
			/* Find the room, stop if cannot find it */
			const findRoom = await Room.findOne({ roomName: args.roomName });
			if (!findRoom) {
				throw new UserInputError("Can't find the room");
			}
			
			/* Populate the messages field and return it */
			await findRoom.populate("messages").execPopulate();
			return findRoom.messages;
		} catch (E) {
			throw new ApolloError("can't getMessages", E);
		}
	}
};

export default Query;
