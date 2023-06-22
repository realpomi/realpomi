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
     * @body_type JSON
     *
     * @json member_type
     * @json user_email
     * @json user_name
     * @json profile_url
     * @json mobile_phone
     * @json msg_receive_agree
     * @json email_receive_agree
     * @json os_version
     * @json di
     *
    */
export const POST = async(req:NextRequest) => {
    const j:any = await req.json();

    const api = await ArcServerApi.init();
    const rs = await api.POST$Auth$joinSns(j);

    return NextResponse.json(rs);
}