# Vue 프로젝트 시작

## 1. 기본 설정

- 설치 

  ```bash
  #cmd
  yarn global add @vue/cli
  vue -- version
  ```

- 프로젝트 생성

  ```bash
  # cmd
  vue create { 프로젝트명 }
  ```

- 서버 실행

  ```bash
  # cmd
  cd { 프로젝트 폴더 }
  yarn serve
  ```

- 라이브러리 추가

  ```bash
  vue add router
  vue add vuex
  npm install vuetify 
  vue add vuetify
  vue add axios
  vue add vue-session
  vue add vuex-persistedstate
  npm install alertifyjs --save
```
  
  

- store

 자동 설치
  ```bash
  vue add vuex
  ```

  

- alertifyjs

  ```bash
  # bash
  npm install alertifyjs
  yarn add alertifyjs
  ```

  ```html
  // ../public/index.html
  
  <head>
      <!-- alertify CSS -->
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css" />
      <!-- Default theme -->
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css" />
      <!-- Semantic UI theme -->
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/semantic.min.css" />
      <!-- Bootstrap theme -->
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.min.css" />    
  </head>
  
  <body>
      
      <!-- alertify JavaScript -->
      <script src="//cdn.jsdelivrnet/npm/alertifyjs@1.13.1/build/alertify.min.js">		</script>
  </body>
  ```

  - 사용

    ```vue
    alertify.error("message")
    ```

    
