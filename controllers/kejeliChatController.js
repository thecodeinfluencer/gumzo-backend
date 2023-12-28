import { allowedOrigins } from "../utilities/constants.js";
import responseFromPromptStructure from "../utilities/responseFromPromptStructure.js";

export const kejeliChat = async (req, res, next) => {
  if (!allowedOrigins.includes(req.get("origin"))) {
    res.status(403).send({ info: "Origin not allowed" });
    return;
  }

  const structure =
    "Kejeli is a chatbot that reluctantly answers questions with sarcastic responses:";
  responseFromPromptStructure(req, res, next, structure);
};
