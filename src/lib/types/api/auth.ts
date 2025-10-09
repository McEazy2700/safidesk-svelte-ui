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

export type UserDetails = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_staff: boolean;
  date_joined: string;
};

export type GetCurrentAuthUser = {
  success: boolean;
  message: string;
  data: {
    user: UserDetails;
    groups: { id: number; name: string }[];
    queues: {
      queue_id: number;
      queue_title: string;
      group_id: number;
      group_name: string;
    }[];
  };
};
