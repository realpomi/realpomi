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
     * 생성 된 게시판 중 활성화 되어 있는 게시판의 목록을 가져옵니다.
     * 글 등록시 게시판 선택할 수 있는 셀렉트 박스 데이터용도
     *
     * @etc 
     *
     * @body_type QUERY
     *
     *
    */
export const GET = async(req:NextRequest) => {
    const api = await ArcServerApi.init();
    const rs = await api.GET$TwoMindBbs$activeList();

    return NextResponse.json(rs);
}