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

export type GetCurrentAuthUser = {
  success: boolean;
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    date_joined: string;
  };
};
