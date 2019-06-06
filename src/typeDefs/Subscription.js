import { gql } from 'apollo-server';

const Subscription = gql`
	type Subscription {
		subscribeRoom(roomName: String): Message
	}
`;

export default Subscription;
