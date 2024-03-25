import KakaoLogin from "react-kakao-login";


const KakaoSendToken = () => {
  const kakaoClientId = "05c90647405d8f944bd9642b081a8aad";
  const kakaoOnSuccess = async data => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달, 다른건 확인 했는데 data안에 response가 있다는 사실을 어떻게 확인 하는지 모르겠다.
  };
  const kakaoOnFailure = error => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

export default KakaoSendToken;
