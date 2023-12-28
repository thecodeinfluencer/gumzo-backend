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
    res.status(400).send({ info: "Please include a conversation start" });
    return;
  }

  if (conversation[conversation.length - 1]?.message?.length > 150) {
    res.status(400).send({ info: "Input message too large" });
    return;
  }

  if (conversation.length > 10) {
    res.status(400).send({ info: "Trial exceeded for this conversation" });
    return;
  }

  if (!Array.isArray(conversation)) {
    res.status(400).send({ info: "Conversation should be an array" });
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
    res.status(400).send({
      info: "Sorry, an error occured on our end. Please try again later.",
    });
  }
}
