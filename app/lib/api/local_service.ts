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

import { localApi } from "@/lib/api//local_axios";

const local_api_middleware = {
	GET$Auth$loginProc: async() => {
        const u = `/api/server/auth/loginProc`;
        const rs = await localApi().get(u);

        return rs.data;
    },

	POST$Auth$loginProc: async() => {
        const u = `/api/server/auth/loginProc`;
        const rs = await localApi().post(u);

        return rs.data;
    },

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
     *
    */
	POST$Auth$user: async() => {
        const u = `/api/server/auth/user`;
        const rs = await localApi().post(u);

        return rs.data;
    },

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
     *
    */
	GET$Agency$getRedis: async() => {
        const u = `/api/server/agency/getRedis`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     *
    */
	GET$Menu$menu: async() => {
        const u = `/api/server/menu/menu`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     * @query id
     *
    */
	GET$Auth$tmpMakeBase64: async(query:{
		id:any
	}) => {
        const u = `/api/server/auth/tmpMakeBase64`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     *
    */
	GET$Auth$mailTest: async() => {
        const u = `/api/server/auth/mailTest`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     * @query hp
     *
    */
	GET$TwoMobileCertifiled$sendMobileCertifiled: async(query:{
		hp:any
	}) => {
        const u = `/api/server/twoMobileCertifiled/sendMobileCertifiled`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query auth_number
     * @query p
     *
    */
	POST$TwoMobileCertifiled$confirmMobileCertifiled: async(query:{
		auth_number:any
		, p:any
	}) => {
        const u = `/api/server/twoMobileCertifiled/confirmMobileCertifiled`;
        const rs = await localApi().post(u);

        return rs.data;
    },

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
     * @query hp
     * @query p
     *
    */
	GET$Auth$loginHpProc: async(query:{
		hp:any
		, p:any
	}) => {
        const u = `/api/server/auth/loginHpProc`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query sns_type
     * @query di
     *
    */
	GET$Auth$loginSnsProc: async(query:{
		sns_type:any
		, di:any
	}) => {
        const u = `/api/server/auth/loginSnsProc`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query id
     * @query password
     *
    */
	GET$Auth$loginIdProc: async(query:{
		id:any
		, password:any
	}) => {
        const u = `/api/server/auth/loginIdProc`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query email
     * @query password
     *
    */
	GET$Auth$loginEmailProc: async(query:{
		email:any
		, password:any
	}) => {
        const u = `/api/server/auth/loginEmailProc`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @json user_name
     * @json mobile_phone
     * @json msg_receive_agree
     * @json email_receive_agree
     * @json os_version
     * @json p
     *
    */
	POST$Auth$joinHp: async(body:{
		user_name:any
		, mobile_phone:any
		, msg_receive_agree:any
		, email_receive_agree:any
		, os_version:any
		, p:any
	}) => {
        const u = `/api/server/auth/joinHp`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
	POST$Auth$joinSns: async(body:{
		member_type:any
		, user_email:any
		, user_name:any
		, profile_url:any
		, mobile_phone:any
		, msg_receive_agree:any
		, email_receive_agree:any
		, os_version:any
		, di:any
	}) => {
        const u = `/api/server/auth/joinSns`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
     * @json business
     * @json applicant
     * @json service
     *
    */
	POST$Auth$joinId: async(body:{
		business:any
		, applicant:any
		, service:any
	}) => {
        const u = `/api/server/auth/joinId`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
     * @json user_email
     * @json user_password
     * @json user_name
     * @json user_nickname
     * @json birthdate
     * @json gender
     * @json mobile_phone
     * @json foreign
     * @json foreign_type
     * @json msg_receive_agree
     * @json email_receive_agree
     * @json os_version
     *
    */
	POST$Auth$joinEmail: async(body:{
		user_email:any
		, user_password:any
		, user_name:any
		, user_nickname:any
		, birthdate:any
		, gender:any
		, mobile_phone:any
		, foreign:any
		, foreign_type:any
		, msg_receive_agree:any
		, email_receive_agree:any
		, os_version:any
	}) => {
        const u = `/api/server/auth/joinEmail`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
     * @query id
     *
    */
	GET$Auth$duplicateId: async(query:{
		id:any
	}) => {
        const u = `/api/server/auth/duplicateId`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query agency_name
     *
    */
	GET$Auth$duplicateAgencyName: async(query:{
		agency_name:any
	}) => {
        const u = `/api/server/auth/duplicateAgencyName`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query business_number
     *
    */
	GET$Auth$duplicateBusinessNumber: async(query:{
		business_number:any
	}) => {
        const u = `/api/server/auth/duplicateBusinessNumber`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query id
     *
    */
	GET$Auth$reSendAuthEamil: async(query:{
		id:any
	}) => {
        const u = `/api/server/auth/reSendAuthEamil`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query p
     *
    */
	GET$Auth$authEmailConfirm: async(query:{
		p:any
	}) => {
        const u = `/api/server/auth/authEmailConfirm`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query user_name
     * @query mobile_phone
     *
    */
	GET$Auth$userFindEmail: async(query:{
		user_name:any
		, mobile_phone:any
	}) => {
        const u = `/api/server/auth/userFindEmail`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
	GET$Auth$userFindEmailPwd: async(query:{
		user_email:any
		, user_name:any
		, mobile_phone:any
	}) => {
        const u = `/api/server/auth/userFindEmailPwd`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query user_name
     * @query email
     *
    */
	GET$Auth$userFindId: async(query:{
		user_name:any
		, email:any
	}) => {
        const u = `/api/server/auth/userFindId`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query email
     * @query user_id
     * @query mobile_phone
     *
    */
	GET$Auth$userFindPwd: async(query:{
		email:any
		, user_id:any
		, mobile_phone:any
	}) => {
        const u = `/api/server/auth/userFindPwd`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query old_password
     * @query password
     *
    */
	POST$Auth$changePwd: async(query:{
		old_password:any
		, password:any
	}) => {
        const u = `/api/server/auth/changePwd`;
        const rs = await localApi().post(u);

        return rs.data;
    },

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
     * @query user_password
     * @query p
     *
    */
	GET$Auth$authPwdConfirm: async(query:{
		user_password:any
		, p:any
	}) => {
        const u = `/api/server/auth/authPwdConfirm`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query sort_column
     * @query sort_direction
     *
    */
	GET$Auth$userList: async(query:{
		page:any
		, limit:any
		, keyword:any
		, sort_column:any
		, sort_direction:any
	}) => {
        const u = `/api/server/auth/userList`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
	GET$Auth$withdrawal: async(query:{
		page:any
		, limit:any
		, keyword:any
	}) => {
        const u = `/api/server/auth/withdrawal`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @json category
     * @json reason
     * @json user_idx
     *
    */
	POST$Auth$withdrawalReg: async(body:{
		category:any
		, reason:any
		, user_idx:any
	}) => {
        const u = `/api/server/auth/withdrawalReg`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
     *
    */
	GET$Auth$userInfo: async() => {
        const u = `/api/server/auth/userInfo`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     * @json user_nickname
     * @json user_type
     * @json birthdate
     * @json gender
     * @json mobile_phone
     * @json foreign
     * @json foreign_type
     * @json msg_receive_agree
     * @json email_receive_agree
     *
    */
	POST$Auth$userModify: async(body:{
		user_nickname:any
		, user_type:any
		, birthdate:any
		, gender:any
		, mobile_phone:any
		, foreign:any
		, foreign_type:any
		, msg_receive_agree:any
		, email_receive_agree:any
	}) => {
        const u = `/api/server/auth/userModify`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
     * @json id
     * @json title
     * @json attach_yn
     * @json image_yn
     * @json comment_yn
     * @json write_yn
     * @json show_gb
     *
    */
	POST$TwoMindBbs$mgr: async(body:{
		id:any
		, title:any
		, attach_yn:any
		, image_yn:any
		, comment_yn:any
		, write_yn:any
		, show_gb:any
	}) => {
        const u = `/api/server/twoMindBbs/mgr`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

	/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @params id
     *
     * @body_type QUERY
     *
     *
    */
	GET$TwoMindBbs$mgrDetail: async(id:any) => {
        const u = `/api/server/twoMindBbs/mgrDetail/${id}`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     * @query mgr_id
     * @query page
     * @query limit
     * @query keyword
     *
    */
	GET$TwoMindBbs$list: async(query:{
		mgr_id:any
		, page:any
		, limit:any
		, keyword:any
	}) => {
        const u = `/api/server/twoMindBbs/list`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @json id
     * @json mgr_id
     * @json title
     * @json contents
     * @json attach_src
     * @json show_gb
     * @json ip_address
     * @json attach_url
     * @json attach_gb
     * @json thum_attach_url
     *
    */
	POST$TwoMindBbs$write: async(body:{
		id:any
		, mgr_id:any
		, title:any
		, contents:any
		, attach_src:any
		, show_gb:any
		, ip_address:any
		, attach_url:any
		, attach_gb:any
		, thum_attach_url:any
	}) => {
        const u = `/api/server/twoMindBbs/write`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

	/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @params id
     *
     * @body_type QUERY
     *
     *
    */
	GET$TwoMindBbs$view: async(id:any) => {
        const u = `/api/server/twoMindBbs/view/${id}`;
        const rs = await localApi().get(u);

        return rs.data;
    },

	/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @params id
     *
     * @body_type QUERY
     *
     *
    */
	GET$TwoMindBbs$del: async(id:any) => {
        const u = `/api/server/twoMindBbs/del/${id}`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     * @query bbs_id
     * @query page
     * @query limit
     *
    */
	GET$TwoMindCmt$list: async(query:{
		bbs_id:any
		, page:any
		, limit:any
	}) => {
        const u = `/api/server/twoMindCmt/list`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @json id
     * @json bbs_id
     * @json contents
     * @json show_gb
     * @json ip_address
     *
    */
	POST$TwoMindCmt$write: async(body:{
		id:any
		, bbs_id:any
		, contents:any
		, show_gb:any
		, ip_address:any
	}) => {
        const u = `/api/server/twoMindCmt/write`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

	/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @params id
     *
     * @body_type QUERY
     *
     *
    */
	GET$TwoMindCmt$del: async(id:any) => {
        const u = `/api/server/twoMindCmt/del/${id}`;
        const rs = await localApi().get(u);

        return rs.data;
    },

	/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @params id
     *
     * @body_type QUERY
     *
     * @query ip_address
     *
    */
	GET$TwoMindCmt$like: async(id:any,query:{
		ip_address:any
	}) => {
        const u = `/api/server/twoMindCmt/like/${id}`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     *
    */
	GET$TwoMindModels$getDemoOptions: async() => {
        const u = `/api/server/twoMindModels/getDemoOptions`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     *
    */
	GET$TwoMindModels$getDemoModles: async() => {
        const u = `/api/server/twoMindModels/getDemoModles`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
	POST$TwoMindList$insert: async(body:{
		idx:any
		, category:any
		, maker_company:any
		, model_name:any
		, standard:any
		, driving_time:any
		, manufacture_year:any
		, manufacture_number:any
		, product_price:any
		, sale_area:any
		, working_machine:any
		, product_desc:any
		, product_img_src:any
		, engine_condition:any
		, motor_condition:any
		, instrument_panel_condition:any
		, oil_condition:any
		, tire_condition:any
		, exterior_condition:any
		, sale_gb:any
		, save_step:any
		, thum_img_url:any
		, img_url:any
	}) => {
        const u = `/api/server/twoMindList/insert`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
     * @query sale
     *
    */
	GET$TwoMindList$tempList: async(query:{
		sale:any
	}) => {
        const u = `/api/server/twoMindList/tempList`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

	/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @params idx
     *
     * @body_type QUERY
     *
     *
    */
	GET$TwoMindList$tempDetail: async(idx:any) => {
        const u = `/api/server/twoMindList/tempDetail/${idx}`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     *
    */
	GET$TwoMindList$listCategory: async() => {
        const u = `/api/server/twoMindList/listCategory`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     * @query category
     *
    */
	GET$TwoMindList$listSrchTab: async(query:{
		category:any
	}) => {
        const u = `/api/server/twoMindList/listSrchTab`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

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
     * @query category
     * @query page
     * @query limit
     * @query keyword
     *
    */
	GET$TwoMindList$list: async(query:{
		category:any
		, page:any
		, limit:any
		, keyword:any
	}) => {
        const u = `/api/server/twoMindList/list`;
        const rs = await localApi().get(u, query);

        return rs.data;
    },

	/**
     * @group1 
     * @group2 
     * @group3 
     *
     * @detail 
     *
     * @etc 
     *
     * @params idx
     *
     * @body_type QUERY
     *
     *
    */
	GET$TwoMindList$detail: async(idx:any) => {
        const u = `/api/server/twoMindList/detail/${idx}`;
        const rs = await localApi().get(u);

        return rs.data;
    },

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
     * @json product_idx
     * @json party_user_idx
     * @json contents
     * @json closing_gb
     * @json show_gb
     *
    */
	POST$TwoMindChat$insert: async(body:{
		product_idx:any
		, party_user_idx:any
		, contents:any
		, closing_gb:any
		, show_gb:any
	}) => {
        const u = `/api/server/twoMindChat/insert`;
        const rs = await localApi().post(u, body);

        return rs.data;
    },

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
	GET$TwoMindBbs$activeList: async() => {
        const u = `/api/server/twoMindBbs/activeList`;
        const rs = await localApi().get(u);

        return rs.data;
    },

}

export default local_api_middleware;