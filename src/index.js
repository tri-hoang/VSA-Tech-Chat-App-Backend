import { ApolloServer, PubSub } from 'apollo-server';
<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose, { mongo } from 'mongoose';
>>>>>>> 2b7b57b15f328da4416264af7b304cb8f638df24

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const mongoUrl = "mongodb://localhost:27017/vtca";
mongoose.connect(mongoUrl, { useNewUrlParser: true });

const pubsub = new PubSub();
const PORT = 5001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({
		pubsub: pubsub,
	})
});

<<<<<<< HEAD
server.listen(PORT, () => console.log(`Chat app listening on port ${PORT}!`));
=======
server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
>>>>>>> 2b7b57b15f328da4416264af7b304cb8f638df24
