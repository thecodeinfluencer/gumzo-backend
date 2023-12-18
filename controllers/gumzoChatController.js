import responseFromPromptStructure from "../utilities/responseFromPromptStructure.js";

export const gumzoChat = async (req, res, next) => {
  const structure =
    "The following is a conversation with an AI assistant. The assistant is called Gumzo and is created by a team of developers from a company called 'Code Influence' The assistant is helpful, creative, clever, and very friendly.";
  responseFromPromptStructure(req, res, next, structure);
};
