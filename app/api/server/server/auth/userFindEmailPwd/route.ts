/**
 *
 * 이 파일은 자동으로 생성되는 파일입니다.
 * 파일내용을 수정할 경우 수정내용이 추후 모두 제거될 수 있습니다.
 *
 * api-armonster 프로젝트에서 npm start 명령어를 실행하면 자동으로 생성됩니다.
 * 명령어는 api-arcmonster 프로젝트의 package.json 파일을 참고하시거나,
 * index.ts파일을 확인하세요.
 *
*/

import { NextRequest, NextResponse } from "next";
import { ArcServerApi } from "@/lib/api/server";

/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @body_type QUERY
     *
     * @query user_email
     * @query user_name
     * @query mobile_phone
     *
    */
export const GET = async(req:NextRequest) => {
    const url = new URL(req.url);
    const sp = url?.searchParams;
    const user_email = sp?.get("user_email") || '';
    const user_name = sp?.get("user_name") || '';
    const mobile_phone = sp?.get("mobile_phone") || '';
    const queryData = {user_email: user_email, user_name: user_name, mobile_phone: mobile_phone, };

    const api = await ArcServerApi.init();
    const rs = await api.GET$Auth$userFindEmailPwd( queryData);

    return NextResponse.json(rs);
}