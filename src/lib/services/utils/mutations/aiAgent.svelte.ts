import { agentChatCreate } from "$lib/services/api";
import type { ChatResponse } from "$lib/types/api/chat";
import { getClientAccessToken } from "$lib/utils/cookies";
import { cast } from "$lib/utils/typing";

export class AIAgentMutationBase {
  loading = $state(false);

  sendMessage = async (message: string) => {
    const token = getClientAccessToken();

    this.loading = true;

    const res = await agentChatCreate({
      headers: {
        Authorization: `Bearer ${token?.access}`,
      },
      body: {
        message,
      },
    });

    this.loading = false;

    return cast<ChatResponse>(res.data);
  };
}

export const AIAgentMutation = new AIAgentMutationBase();
