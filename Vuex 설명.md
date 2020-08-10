# VUEX

- 폴더 카피 하기

  ```bash
  $ cp -r {카피할 폴더 이름/} {붙여넣을 폴더 이름}
  ```

  ```bash
  $ npm i
  ```

  

- vuex 추가하기

  ```bash
  $ vue add vuex
  ```



- src/index.js

  ```js
  export defalt new Vuex.Store{
      state: {
          
      },
      getters: {
          
      },
      mutations: {
          
      },
      actions: {
          
      },
      modules: {}
  }
  ```



#### State

- state는 쉽게 말하면 프로젝트에서 공통으로 사용할 변수를 정의 합니다.
- 프로젝트 내의 모든 곳에서 참조 및 사용이 가능합니다.
- state를 통해 각 컴포넌트에서 동일한 값을 사용할 수 있습니다.

```javascript
copy javascriptexport const state = () => ({
  account: null, 
  isAdmin: null, 
  item: null
});
```

#### Mutations

- Mutations의 주요 목적은 **state를 변경시키는 역할**을 합니다. (Mutations을 통해서만 state를 변경해야 함)
- 비동기 처리가 아니라 **동기처리**를 합니다. 위의 함수가 실행되고 종료된 후 그 다음 아래의 함수가 실행됩니다.
- `commit('함수명', '전달인자')`으로 실행 시킬 수 있습니다.
- mutations 내에 **함수 형태**로 작성합니다.

```javascript
copy javascriptexport const mutations = {
  currentUser(state,  account) {
    state.account = account;  // state의 account변수에 넘겨 받은 account값을 입력함
  }
};
```

#### Actions

- Actions의 주요 목적은 **Mutations를 실행시키는 역활**을 합니다. Mutations이 실행되면 state도 변경이 되겠지요.
- 동기 처리가 아니라 **비동기처리**를 합니다. 순서에 상관없이 먼저 종료된 함수의 피드백을 받아 후속 처리를 하게 됩니다.
- `dispatch('함수명', '전달인자')`으로 실행 시킬 수 있습니다. ex) `dispatch('함수명', '전달인자', {root:true})`
- actions 내에 **함수 형태**로 작성합니다.
- 비동기 처리이기 때문에 콜백함수로 주로 작성합니다.

##### 일반 형태로 실행

```javascript
copy javascriptdispatch('setAccount', account );
copy javascriptexport const actions = {
  setAccount({ commit, dispatch }, account) {
    commit('currentUser', account);
    dispatch('setIsAdmin', account.uid);
  }
}
```

##### Components에서 then()으로 콜백함수 실행

```javascript
copy javascriptdispatch('setAccount', account ).then(() => {   });
copy javascriptexport const actions = {
  setAccount({ commit }, account) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('currentUser', account);
        resolve()
      }, 1000)
    })

  }
}
```

#### Getters

- 각 Components의 계산된 속성(computed)의 공통 사용 정의라고 보시면 됩니다.
- 여러 Components에서 동일한 computed가 사용 될 경우 Getters에 정의하여 공통으로 쉽게 사용할 수 있습니다.
- 하위 모듈의 getters를 불러오기 위해서는 특이하게 `this.$store.getters["경로명/함수명"];` 을 사용해야 합니다.

```javascript
copy javascriptexport const getters = {
  isAuthenticated(state) { // 현재 로그인 상태인지 확인 (true/false)
    return !!state.user;
  },

  getAccount(state) {      // 회원정보 불러오기
    return state.account;
  },
};
```

