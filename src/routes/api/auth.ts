    import {Router} from "express";
    import * as console from "console";
    import axios from 'axios'
    
    interface Data {
        grant_type: string;
        client_id: string;
        code: string;
        [key: string]: string;
    }
    
    const header = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Authorization': 'Bearer '
    };
    
    export default (router:Router)=>{
    
        router.use('/auth',router)
    
        router.post('/kakao',async (req,res,next)=>{
    
            const {code} = req.body  // ����Ʈ���� �ΰ��ڵ� body�� ��Ƽ� ������ �ޱ�
    
            const {accessToken}=await getKakaoToken(code)
    
            const {id,email} = await getUserInfo(accessToken)
    
            console.log(id,email)
    
        })
        const getKakaoToken = async (code:string)=>{
    
            const restApiKey = '123'  // ��Ű - Rest API key
    
            const data :Data={
                grant_type:'authorization_code',
                client_id:restApiKey,
                code
            }
    
            const queryString = Object.keys(data)
                .map(k=>encodeURIComponent(k)+'='+encodeURIComponent(data[k]))
                .join('&')
    
            // īī�� ��ū ��û
            const token = await axios.post("https://kauth.kakao.com/oauth/token", queryString, {headers: header})
    
            // ������ ��ū �߱�
            return {accessToken:token.data.access_token}
    
        }
    
        const getUserInfo = async (accessToken:string)=>{
            // Authorization: 'Bearer access_token'
            // ������ ��ū ����� ���
            header.Authorization +=accessToken
            
            // īī�� ����� ���� ��ȸ
            const get = await axios.get("https://kapi.kakao.com/v2/user/me", {headers: header})
            const result = get.data
    
            // id, email ����
            return {id:result.id,email:result.kakao_account.email}
        }
    
    }