export type AuthUser = {
  id: number;
  username: string;
  email: string;
  is_active: boolean;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    refresh: string;
    access: string;
    user: AuthUser;
  };
};
