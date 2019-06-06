import { gql } from 'apollo-server';

const Query = gql`
	type Query {
		getRoom(roomName: String): Room
		getMessages(roomName: String): [Message]
	}
`;

export default Query;
