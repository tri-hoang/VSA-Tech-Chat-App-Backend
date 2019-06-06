import { gql } from 'apollo-server';

const Query = gql`
	type Query {
		getMessages(roomName: String): [Message]
	}
`;

export default Query;
