module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"], // ; 누락 방지
        "quotes": ["error", "double"], // ' ' -> " "
        "indent": ['error', 4], // tap 들여쓰기
        "no-var": 'error', // var 선언 금지
        "eslint id-denylist": ["error", "data", "callback"], // 기본 함수명 금지, 금지어 추가할 것
        "curly": "error", // 제어문에 {} 사용
        "dot-notation": ["error", { allowKeywords: true }], // 오브젝트에 속성으로 접근할 때는 .(점)을 사용
        "comma-spacing": ["error", { before: false, after: true }], // 콤마(,)은 뒤에 공백을 삽입한다.
        "key-spacing": ["error", {
            "afterColon": true
        }], // 콜론(:)을 사용하는 경우에는 반드시 뒤에 공백을 삽입
        "no-unexpected-multiline": "error", // 2줄 공백 금지
    }
}
