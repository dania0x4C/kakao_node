const kakaoLogin = () => {
  const Rest_API_Key = "6bd716fdb7d0d7f6299bf7675049ea92";
  const Redirect_URI = "http://localhost:3000";

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Rest_API_Key}&redirect_uri=${Redirect_URI}`;
  const handleLogin = () => {
    window.location.href = kakaoURL; // 이 함수는 새로운 URL을 받으면 그 주소로 redirect할 수 있다.
    const code = new URL (window.location.href).searchParams.get("code");// 현재 url에서 codeParam의 code 값을 가져온다는 것
  };
  return (
    <>
      <button onClick={handleLogin}> KAKAO LOGIN</button>
    </>
  );
};

export default kakaoLogin;
// 인증 페이지 클릭시 접속
// https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=6bd716fdb7d0d7f6299bf7675049ea92&redirect_uri=http://localhost:3000

// redirection 위치로 인가코드가 같이 온다 code = ~~~
// http://localhost:3000/?code=uVR2iKfdESPjjluQyWevAqqi-MVXyV713c8ORJVCKkNt0K9fm5AsP4TE1PAKKclgAAABjnPmzZYq17LwdM8QAg
