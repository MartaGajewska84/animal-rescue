const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      let animal = await airtable.retrieve(id)
      if (animal.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      animal = {id: animal.id, ...animal.fields}
      return {
        statusCode: 200,
        body: JSON.stringify(animal),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server Error'
      };
    }
  }
};
