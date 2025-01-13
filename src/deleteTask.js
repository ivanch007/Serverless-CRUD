const AWS = require('aws-sdk');

const deleteTask = async(event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    await dynamoDB.delete({
        TableName: 'TasksTable',
        Key: {
            id
        }
    }).promise();

    return {
        status: 200,
        body: JSON.stringify({
            message: 'Task deleted successfully'
        })
    };

};

module.exports = {
    deleteTask
};