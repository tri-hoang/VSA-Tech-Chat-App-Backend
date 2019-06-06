import { PubSub } from "apollo-server";
const ps = new PubSub();

const Subscription = {
	subscribeRoom: {
		subscribe: (_, args, ctx) => {
			return ctx.pubsub.asyncIterator(args.roomName);
		}
	}
};

export { ps };
export default Subscription;
