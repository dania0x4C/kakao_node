import axios from "axios"; // axios ��ü�� import

export async function kakaoSignIn(code) {
  try {
    const response = await axios.post("/auth/kakao", { code }); // axios.post�� ���� ȣ���ϰ� code�� ��ü�� ����
    return response.data; // ������ ��� ������ ��ȯ
  } catch (error) {
    throw error; // ���� �߻� �� ������ throw�Ͽ� ȣ���� ������ ó���� �� �ֵ��� ��
  }
}