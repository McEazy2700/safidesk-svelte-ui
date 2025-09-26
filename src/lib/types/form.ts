export type Message = {
  status: 'error' | 'success' | 'warning';
  messages: string[];
};
