import { Configuration, OpenAIApi } from 'openai';
import envs from './envs.js';

const configuration = new Configuration({
  apiKey: envs.OPENAI_API_KEY,
});

const myOpenAI = new OpenAIApi(configuration);

export { myOpenAI };
