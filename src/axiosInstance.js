import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://greencart.one/sapi/api/v1", // baseURL 설정
  withCredentials: true, // 필요한 설정 추가
});

await axiosInstance
  .post("auth/login", {
    email: "ykj1512@gmail.com",
    password: "ykj355!0708^^",
  })
  .then((res) => {
    // 서버 응답의 헤더에서 Authorization 헤더 가져오기
    const authorizationHeader = res.headers.get("Authorization");
    // Authorization 헤더에서 JWT 토큰 추출
    const token = authorizationHeader && authorizationHeader.split(" ")[1];
    //session storage에 토큰 저장
    sessionStorage.setItem("accessToken", token);
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("accessToken")}`;
  })
  .catch((err) => {
    console.log(err);
  });

export default axiosInstance;
