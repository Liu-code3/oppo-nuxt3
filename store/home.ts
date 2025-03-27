import { defineStore } from "pinia";
interface INavBar {
    id: number;
    title: string;
    type: string;
    link: string;
}

interface IBanner {
    id?: number;
    picStr?: string;
    link?: string;
}

interface IHomeState {
    navbars: Partial<INavBar>[],
    banners:  IBanner[]
}

export const useHomeStore = defineStore("home", {
    state: (): IHomeState => ({
        navbars: [],
        banners: []
    }),
    actions: {
        changeNavBar(payload: INavBar[]) {
            this.navbars = payload
        },
        changeBanner(payload: IBanner[]) {
            this.banners = payload
        }
    }
})

export type {
    INavBar,
    IBanner,
    IHomeState
}
