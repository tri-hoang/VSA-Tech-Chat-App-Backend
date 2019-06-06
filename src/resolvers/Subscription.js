
const Subscription = {
	subscribeRoom: {
		subscribe: (_, args, ctx) => {
			return ctx.pubsub.asyncIterator(args.roomName);
		}
	}
};

export default Subscription;
