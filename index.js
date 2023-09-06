const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/db');
const { nanoid } = require('nanoid');

exports.handler = async (event, context) => {
  const { todo, done } = JSON.parse(event.body);

  try {
    const id = nanoid();

    await db
      .put({
        TableName: 'todo-db',
        Item: {
          id: id,
          todo: todo,
          done: done,
        },
      })
      .promise();

    return sendResponse(200, { success: true });
  } catch (error) {
    return sendError(500, { success: false, message: 'Could not add a todo' });
  }
};
