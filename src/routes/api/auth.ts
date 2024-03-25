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
    
            const {code} = req.body  // 프런트에서 인가코드 body에 담아서 보낸거 받기
    
            const {accessToken}=await getKakaoToken(code)
    
            const {id,email} = await getUserInfo(accessToken)
    
            console.log(id,email)
    
        })
        const getKakaoToken = async (code:string)=>{
    
            const restApiKey = '123'  // 앱키 - Rest API key
    
            const data :Data={
                grant_type:'authorization_code',
                client_id:restApiKey,
                code
            }
    
            const queryString = Object.keys(data)
                .map(k=>encodeURIComponent(k)+'='+encodeURIComponent(data[k]))
                .join('&')
    
            // 카카오 토큰 요청
            const token = await axios.post("https://kauth.kakao.com/oauth/token", queryString, {headers: header})
    
            // 엑세스 토큰 발급
            return {accessToken:token.data.access_token}
    
        }
    
        const getUserInfo = async (accessToken:string)=>{
            // Authorization: 'Bearer access_token'
            // 엑세스 토큰 헤더에 담기
            header.Authorization +=accessToken
            
            // 카카오 사용자 정보 조회
            const get = await axios.get("https://kapi.kakao.com/v2/user/me", {headers: header})
            const result = get.data
    
            // id, email 추출
            return {id:result.id,email:result.kakao_account.email}
        }
    
    }