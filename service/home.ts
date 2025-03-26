import xmRequest from './index'
import type { ResultType } from './index'
import { useHomeStore } from "@/store/home";
import type { IHomeState } from "@/store/home"


export const getHomeInfo = () => {
    return xmRequest.get<ResultType<IHomeState>>(
        '/home/info',
        { type: "oppo" },
        {
            onResponse({ response }) {
                const homeStore = useHomeStore()
                homeStore.changeNavBar(response._data.data.navbars)
            }
        }
    )
}
