const AWS = require('aws-sdk');

const getTask = async(event) =>{
    const dynamoDB = new AWS.DynamoDB.DocumentClient(); 
    const {id} = event.pathParameters;

    const resultId = await dynamoDB.get({
        TableName: 'TasksTable',
        Key: {
            id: id
        }
    }).promise();

    const task = resultId.Item;

    return {
        status: 200,
        body: {
            task
        }
    };
}

module.exports = {
    getTask
}