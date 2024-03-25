const kakaoLogin = () => {
  const Rest_API_Key = "6bd716fdb7d0d7f6299bf7675049ea92";
  const Redirect_URI = "http://localhost:3000";

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Rest_API_Key}&redirect_uri=${Redirect_URI}`;
  const handleLogin = () => {
    window.location.href = kakaoURL; // �� �Լ��� ���ο� URL�� ������ �� �ּҷ� redirect�� �� �ִ�.
    const code = new URL (window.location.href).searchParams.get("code");// ���� url���� codeParam�� code ���� �����´ٴ� ��
  };
  return (
    <>
      <button onClick={handleLogin}> KAKAO LOGIN</button>
    </>
  );
};

export default kakaoLogin;
// ���� ������ Ŭ���� ����
// https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=6bd716fdb7d0d7f6299bf7675049ea92&redirect_uri=http://localhost:3000

// redirection ��ġ�� �ΰ��ڵ尡 ���� �´� code = ~~~
// http://localhost:3000/?code=uVR2iKfdESPjjluQyWevAqqi-MVXyV713c8ORJVCKkNt0K9fm5AsP4TE1PAKKclgAAABjnPmzZYq17LwdM8QAg
