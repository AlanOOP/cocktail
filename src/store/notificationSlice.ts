import { StateCreator } from "zustand";
import { Notification } from "../types";

export type NotificationSliceType = {
    notification: Notification,
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void,
    hiddenNotification: () => void,
}

export const createNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
        text: 'Este es el texto',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() =>{
            get().hiddenNotification()
        }, 2000)
    },
    hiddenNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        })
    }
})