import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken") // 로그인한 이후에는 발급받은 토큰이 헤더에담아서 요청날린다
    }
});

export default instance;