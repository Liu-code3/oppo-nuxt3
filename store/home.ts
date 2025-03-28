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

interface ICategory {
    id?: number;
    picStr?: string;
    url?: string;
    title?: string;
    type?: string;
    productDetailss?: IProductDetail[];
}

interface IActivity {
    type?: number;
    activityInfo?: string;
}

interface IPriceInfo {
    prefix?: string;
    buyPrice?: string;
    currencyTag?: string;
}

interface IProductDetail {
    id?: number;
    title?: string;
    url?: string;
    priceInfo?: IPriceInfo;
    activityList?: IActivity[];
}

interface IHomeState {
    navbars: Partial<INavBar>[],
    banners:  Partial<IBanner>[],
    categorys: Partial<ICategory>[]
}

export const useHomeStore = defineStore("home", {
    state: (): IHomeState => ({
        navbars: [],
        banners: [],
        categorys: []
    }),
    actions: {
        changeNavBar(payload: INavBar[]) {
            this.navbars = payload
        },
        changeBanner(payload: IBanner[]) {
            this.banners = payload
        },
        changeCategory(payload: ICategory[]) {
            this.categorys = payload
        }
    }
})

export type {
    INavBar,
    IBanner,
    ICategory,
    IHomeState
}
