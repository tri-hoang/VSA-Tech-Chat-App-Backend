import { gql } from 'apollo-server';

const Mutation = gql`
	type Mutation {
		addRoom(roomName: String): Room
		addMessage(roomName: String, userName: String, message: String): Message
	}
`;

export default Mutation;
