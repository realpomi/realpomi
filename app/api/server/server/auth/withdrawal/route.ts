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
     * @query page
     * @query limit
     * @query keyword
     *
    */
export const GET = async(req:NextRequest) => {
    const url = new URL(req.url);
    const sp = url?.searchParams;
    const page = sp?.get("page") || '';
    const limit = sp?.get("limit") || '';
    const keyword = sp?.get("keyword") || '';
    const queryData = {page: page, limit: limit, keyword: keyword, };

    const api = await ArcServerApi.init();
    const rs = await api.GET$Auth$withdrawal( queryData);

    return NextResponse.json(rs);
}