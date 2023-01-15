export type sessionIdResponse = {
    success: boolean,
    guest_session_id: string,
    expires_at: string
}

export type deleteSessionIdResponse = {
  success: boolean
}

export interface asyncResponse<T> {
  data: T;
  status: number;
}