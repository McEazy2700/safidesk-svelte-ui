export type Condition = {
  field?: string;
  operator?: string;
  value?: string;
};

export type Action = {
  action?: string;
  value?: string;
};

export type Rule = {
  name: string;
  description?: string;
  is_active?: boolean;
  priority?: number;
  conditions: Condition[];
  actions: Action[];
};
