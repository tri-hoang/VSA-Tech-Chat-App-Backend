import { gql } from 'apollo-server';

const Mutation = gql`
	type Mutation {
		addMessage(roomName: String, userName: String, message: String): String
	}
`;

export default Mutation;
