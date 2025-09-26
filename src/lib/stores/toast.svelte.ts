import type { ToastMessage } from '$lib/types/toast';
import { v4 } from 'uuid';

class ToastManager {
  messages = $state<ToastMessage[]>([]);

  append = (message: Omit<ToastMessage, 'id'>) => {
    const id = v4();
    this.messages = [...this.messages, { id, ...message }];
    return id;
  };

  remove = (id: string) => {
    this.messages = this.messages.filter((m) => m.id !== id);
  };
}

export const Toast = new ToastManager();
