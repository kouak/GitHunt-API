import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

setInterval(() => {
  console.log(pubsub.ee._events);
}, 5000);
