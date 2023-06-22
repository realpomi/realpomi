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
     * @json idx
     * @json category
     * @json maker_company
     * @json model_name
     * @json standard
     * @json driving_time
     * @json manufacture_year
     * @json manufacture_number
     * @json product_price
     * @json sale_area
     * @json working_machine
     * @json product_desc
     * @json product_img_src
     * @json engine_condition
     * @json motor_condition
     * @json instrument_panel_condition
     * @json oil_condition
     * @json tire_condition
     * @json exterior_condition
     * @json sale_gb
     * @json save_step
     * @json thum_img_url
     * @json img_url
     *
    */
export const POST = async(req:NextRequest) => {
    const j:any = await req.json();

    const api = await ArcServerApi.init();
    const rs = await api.POST$TwoMindList$insert(j);

    return NextResponse.json(rs);
}