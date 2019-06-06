import { gql } from 'apollo-server';

const Type = gql`
	type Room {
		roomName: String
		messages: [Message]
	}

	type Message {
		roomRef: Room
		userName: String
		message: String		
	}
`;

export default Type;