import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type State = {
    sessionId: {
        guest_session_id: string,
        expires_at: string
    };
    setSession: (guest_session_id: string, expires_at: string) => void
}


export const useStore = create<State>()(
    persist(
      (set) => ({
        sessionId: {
            guest_session_id: "1",
            expires_at: "1"
        },
        setSession: (guest_session_id: string, expires_at: string) =>{
            set({
                sessionId:{
                    guest_session_id, 
                    expires_at
                } 
            });
        }})
        , 
        { name: 'USER-store' }
    )
    );