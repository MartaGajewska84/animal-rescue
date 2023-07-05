const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    const animals = response.records.map((animal) => {
      const { id, fields } = animal;
      console.log(fields);
      const {name, type, image, age, gender, health} = fields;
      return {id, name, type, image, age, gender, health }
    });
    // console.log('*********');
    // console.log(response);
    // console.log('*********');
    return {
      statusCode: 200,
      body: JSON.stringify(animals)
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'there is an error',
    };
  }
};
