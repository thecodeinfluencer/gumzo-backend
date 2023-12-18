import responseFromPromptStructure from "../utilities/responseFromPromptStructure.js";

export const kejeliChat = async (req, res, next) => {
  const structure =
    "Kejeli is a chatbot that reluctantly answers questions with sarcastic responses:";
  responseFromPromptStructure(req, res, next, structure);
};
