import { defineStore } from "pinia";
interface INavBar {
    id: number;
    title: string;
    type: string;
    link: string;
}

interface IHomeState {
    navbars: Partial<INavBar>[]
}

export const useHomeStore = defineStore("home", {
    state: (): IHomeState => ({
        navbars: []
    }),
    actions: {
        changeNavBar(payload: INavBar[]) {
            this.navbars = payload
        }
    }
})

export type {
    INavBar,
    IHomeState
}
