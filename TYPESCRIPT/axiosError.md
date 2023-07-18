# Axios Error Types

## AxiosError<T>
> Axios 에러 객체의 타입. T는 에러 응답 데이터의 타입이다.
### Example
```js
import axios, { AxiosError } from 'axios';

axios.get('/api/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error: AxiosError) => {
    if (error.response) {
      console.error('에러 응답:', error.response.data);
    } else if (error.request) {
      console.error('요청 실패:', error.request);
    } else {
      console.error('에러 발생:', error.message);
    }
  });
```

## AxiosRequestConfig
> Axios 요청의 구성을 위한 설정 객체의 타입이다.
### Example
```js
import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  method: 'get',
  url: '/api/data',
  headers: {
    'Content-Type': 'application/json',
  }
};

axios(config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## AxiosResponse<T>
>  Axios 응답 객체의 타입이다. T는 응답 데이터의 타입이다.

### Example
```js
import axios, { AxiosResponse } from 'axios';

axios.get('/api/data')
  .then((response: AxiosResponse<{ id: number, name: string }>) => {
    const data = response.data;
    console.log(data.id, data.name);
  })
  .catch((error) => {
    console.error(error);
  });
```
## AxiosInstance
> Axios 인스턴스의 타입이다.
### Example
```js
import axios, { AxiosInstance } from 'axios';

const customAxios: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

customAxios.get('/api/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

```

## AxiosPromise<T>
> Axios의 요청에 대한 Promise 타입이다. T는 응답 데이터의 타입이다.
### Example
```js
import axios, { AxiosPromise } from 'axios';

function fetchData(): AxiosPromise<{ id: number, name: string }> {
  return axios.get('/api/data');
}

fetchData()
  .then((response) => {
    const data = response.data;
    console.log(data.id, data.name);
  })
  .catch((error) => {
    console.error(error);
  });
```

## AxiosInterceptorManager<V>
> Axios interceptor의 관리자의 타입이다. V는 interceptor에 적용되는 값의 타입이다.
### Example
```js
import axios, { AxiosInterceptorManager } from 'axios';

const interceptors: AxiosInterceptorManager<string> = axios.interceptors.request;

const requestIdInterceptor = interceptors.use(
  (config) => {
    config.headers['Request-Id'] = '12345';
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axios.get('/api/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    interceptors.eject(requestIdInterceptor);
  });
```

## AxiosErrorInterceptor<T>
> Axios 에러 인터셉터의 타입이다. T는 에러 응답 데이터의 타입이다.

### Example
```js
import axios, { AxiosError } from 'axios';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error('에러 응답:', error.response.data);
    } else if (error.request) {
      console.error('요청 실패:', error.request);
    } else {
      console.error('에러 발생:', error.message);
    }
    return Promise.reject(error);
  }
);

axios.get('/api/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error('요청 실패:', error);
  });
```

