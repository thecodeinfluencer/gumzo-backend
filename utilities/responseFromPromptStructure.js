import { myOpenAI } from "../configs/openAI.js";
import handleError from "./handleError.js";

export default async function responseFromPromptStructure(
  req,
  res,
  next,
  structure
) {
  const { conversation } = req.body;

  if (!conversation) {
    res.send({ info: "Please include a conversation start" });
    return;
  }

  if (!Array.isArray(conversation)) {
    res.send({ info: "Conversation should be an array" });
    return;
  }

  try {
    const response = await myOpenAI.createCompletion({
      model: "text-davinci-003",
      prompt: `${structure}.\n\n. ${JSON.stringify(conversation)} AI:`,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });

    const message = response?.data?.choices[0]?.text;

    res.send({
      prompt: conversation,
      message,
      thread: [...conversation, { owner: "AI", message }],
    });
  } catch (error) {
    handleError("catch", error);
    const message =
      "Sorry, an error occured on our end. Please try again later.";

    res.send({
      prompt: conversation,
      message,
      thread: [...conversation, { owner: "AI", message }],
    });
  }
}
