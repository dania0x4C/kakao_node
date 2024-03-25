import KakaoLogin from "react-kakao-login";


const KakaoSendToken = () => {
  const kakaoClientId = "05c90647405d8f944bd9642b081a8aad";
  const kakaoOnSuccess = async data => {
    console.log(data);
    const idToken = data.response.access_token; // ������ ��ū �鿣��� ����, �ٸ��� Ȯ�� �ߴµ� data�ȿ� response�� �ִٴ� ����� ��� Ȯ�� �ϴ��� �𸣰ڴ�.
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
