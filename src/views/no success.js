import axios from "axios"; // axios 전체를 import

export async function kakaoSignIn(code) {
  try {
    const response = await axios.post("/auth/kakao", { code }); // axios.post를 직접 호출하고 code를 객체로 전달
    return response.data; // 성공한 경우 데이터 반환
  } catch (error) {
    throw error; // 오류 발생 시 에러를 throw하여 호출한 측에서 처리할 수 있도록 함
  }
}