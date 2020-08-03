# Vue-session



### 설치

```bash
npm install vue-session
```





```javascript
import VueSession from 'vue-session'
Vue.use(VueSession)
```



### 활용

```javascript
# 로그인
this.$session.get()
this.$session.exists()

#로그아웃
this.$session.destroy()

```

