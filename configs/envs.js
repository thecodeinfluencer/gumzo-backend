import dotenv from 'dotenv';

dotenv.config();

const { OPENAI_API_KEY } = process.env;

// export default { OPENAI_API_KEY };
export default process.env;
