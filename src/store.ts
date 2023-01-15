import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface State {
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
            guest_session_id: "",
            expires_at: ""
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