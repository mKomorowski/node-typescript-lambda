import type { Handler } from 'aws-lambda';

export type Event = {
  body: object;
};

export const handler: Handler<Event> = async (event, context, callback) => {
  const { functionName } = context;

  callback(null, {
    statusCode: 200,
    functionName,
    body: event.body,
  });
};
