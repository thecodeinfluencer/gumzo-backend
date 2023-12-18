import responseFromPromptStructure from "../utilities/responseFromPromptStructure.js";

export const rafikiChat = async (req, res, next) => {
  const structure = "Rafiki emulates a text message conversation.:";
  responseFromPromptStructure(req, res, next, structure);
};
