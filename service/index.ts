import type { UseFetchOptions, AsyncData } from "nuxt/app";

// 请求配置接口
interface RequestConfig extends UseFetchOptions<any> {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// 拦截器接口
interface Interceptors<T> {
  requestInterceptor?: (config: RequestConfig) => RequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

type Methods = "GET" | "POST";
interface ResultType<T> {
  code: number;
  data: T;
}

// 默认配置
const DEFAULT_CONFIG: RequestConfig = {
  baseURL: "http://codercba.com:9060/oppo-nuxt/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

class XMRequest {
  private readonly config: RequestConfig;
  private interceptors?: Interceptors<any>;

  constructor(config?: RequestConfig, interceptors?: Interceptors<any>) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.interceptors = interceptors;
  }

  request<T = any>(
    url: string,
    method: Methods,
    data?: any,
    options?: RequestConfig
  ): Promise<AsyncData<T, any>> {
    const finalConfig: RequestConfig = {
      ...this.config,
      ...options,
      method,
    };

    // 处理请求数据
    method === "GET" ? (finalConfig.params = data) : (finalConfig.body = data);

    // 应用请求拦截器
    if (this.interceptors?.requestInterceptor) {
      Object.assign(finalConfig, this.interceptors.requestInterceptor(finalConfig));
    }

    return new Promise((resolve, reject) => {
      useFetch<T>(url, finalConfig as any)
        .then((res) => {
          let result = res;
          // 应用响应拦截器
          if (this.interceptors?.responseInterceptor) {
            result = this.interceptors.responseInterceptor(result);
          }
          resolve(result as AsyncData<T, any>);
        })
        .catch((error) => {
          if (this.interceptors?.responseInterceptorCatch) {
            error = this.interceptors.responseInterceptorCatch(error);
          }
          reject(error);
        });
    });
  }

  post<T = any>(url: string, data?: any, options?: RequestConfig) {
    return this.request<T>(url, "POST", data, options);
  }

  get<T = any>(url: string, params?: any, options?: RequestConfig) {
    return this.request<T>(url, "GET", params, options);
  }
}


// 创建自定义实例的工厂函数
export const createRequest = (config?: RequestConfig, interceptors?: Interceptors<any>) => {
  return new XMRequest(config, interceptors);
};

// export default defaultRequest;
export default createRequest(DEFAULT_CONFIG);

export type {
  RequestConfig,
  Interceptors,
  Methods,
  ResultType
}
