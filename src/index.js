import { ApolloServer, PubSub } from 'apollo-server';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

dotenv.config();

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

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));