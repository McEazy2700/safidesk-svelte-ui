import { aiAgentAgentChatCreate } from "$lib/services/api";
import { getClientAccessToken } from "$lib/utils/cookies";

export class AIAgentMutationBase {
  loading = $state(false);

  sendMessage = async (message: string) => {
    const token = getClientAccessToken();
    const res = await aiAgentAgentChatCreate({
      headers: {
        Authorization: `Bearer ${token?.access}`,
      },
      body: {
        message,
      },
    });

    console.log(res.data);
  };
}

export const AIAgentMutation = new AIAgentMutationBase();
