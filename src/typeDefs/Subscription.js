import { gql } from 'apollo-server';

const Subscription = gql`
	type Subscription {
		messages: Message
	}
`;

export default Subscription;
