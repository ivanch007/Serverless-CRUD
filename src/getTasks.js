const AWS = require('aws-sdk')

const getTasks = async(event) =>{

    try{
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const result = await dynamoDB.scan({
        TableName: 'TasksTable'
    }).promise();

    const task = result.Items;

    return {
        status: 200,
        body: {
            task
        }
    }} catch (error){
        console.log(error);
    }
};


module.exports = {
    getTasks
};