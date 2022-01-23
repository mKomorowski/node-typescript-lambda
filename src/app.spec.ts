import type { Context } from 'aws-lambda';
import { handler } from './app';

describe('Lambda handler', () => {
  const context: Context = {
    functionName: 'testFunction',
  } as Context;

  // eslint-disable-next-line jest/no-done-callback
  it('should return event body and functionName', (done) => {
    handler({ body: {} }, context, (err, res) => {
      expect(err).toBeNull();
      expect(res).toStrictEqual({
        statusCode: 200,
        body: {},
        functionName: context.functionName,
      });
      done();
    });
  });
});
