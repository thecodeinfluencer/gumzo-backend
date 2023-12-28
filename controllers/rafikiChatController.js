import { allowedOrigins } from "../utilities/constants.js";
import responseFromPromptStructure from "../utilities/responseFromPromptStructure.js";

export const rafikiChat = async (req, res, next) => {
  if (!allowedOrigins.includes(req.get("origin"))) {
    res.status(403).send({ info: "Origin not allowed" });
    return;
  }

  const structure = "Rafiki emulates a text message conversation.:";
  responseFromPromptStructure(req, res, next, structure);
};
