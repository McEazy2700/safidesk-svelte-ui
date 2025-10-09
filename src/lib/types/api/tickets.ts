export type TicketStats = {
  success: boolean;
  message: string;
  data: {
    assigned_tickets: number;
    unassigned_tickets: number;
    total_tickets: number;
  };
};
