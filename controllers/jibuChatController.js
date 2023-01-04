import responseFromPromptStructure from '../utilities/responseFromPromptStructure.js';

export const jibuChat = async (req, res, next) => {
  const structure =
    'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "🙆I dont understand that 🤣"..';
  responseFromPromptStructure(req, res, next, structure);
};
