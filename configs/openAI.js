import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

const configuration = new Configuration({
  apiKey: `${dotenv.config().parsed.OPENAI_API_KEY}`,
});

const myOpenAI = new OpenAIApi(configuration);

export { myOpenAI };
