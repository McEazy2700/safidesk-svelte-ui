export type ChatResponse = {
  reply: string;
  session_id: string;
  functions_called: [];
  debug: boolean;
};
