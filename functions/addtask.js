const Fauna = require('faunadb')

exports.handler = async (event, context) => {
    const fauna = new Fauna('fnAErFHZy0AAReKGlrE3BOia7gaZSyxuK_GgKVtL');

    let recipes=JSON.parse(event.body)

    await fauna.createRecord('Recipes', recipes)
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Authorization, Content-Type',
            'Content-Type': 'application/json'
        },
    };
};
