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

import ArcApiBase from "./ArcApiBase";

class ArcApiServiceMiddle extends ArcApiBase {
	GET$Auth$loginProc = async() => {
		return await this.GET_ACTION(`/auth`);
	}


	POST$Auth$loginProc = async() => {
		return await this.POST_ACTION(`/auth`);
	}


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
	POST$Auth$user = async() => {
		return await this.POST_ACTION(`/auth/user`);
	}


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
	GET$Agency$getRedis = async() => {
		return await this.GET_ACTION(`/redis`);
	}


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
	GET$Menu$menu = async() => {
		return await this.GET_ACTION(`/common/menu`);
	}


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
	GET$Auth$tmpMakeBase64 = async(query:{
		id:any
	}) => {
		return await this.GET_ACTION(`/user/tmpMakeBase64`, query);
	}


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
	GET$Auth$mailTest = async() => {
		return await this.GET_ACTION(`/user/mailTest`);
	}


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
	GET$TwoMobileCertifiled$sendMobileCertifiled = async(query:{
		hp:any
	}) => {
		return await this.GET_ACTION(`/certified/hp`, query);
	}


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
	POST$TwoMobileCertifiled$confirmMobileCertifiled = async(query:{
		auth_number:any
		, p:any
	}) => {
		return await this.POST_ACTION(`/certified/hp`, query);
	}


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
	GET$Auth$loginHpProc = async(query:{
		hp:any
		, p:any
	}) => {
		return await this.GET_ACTION(`/user/login/hp`, query);
	}


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
	GET$Auth$loginSnsProc = async(query:{
		sns_type:any
		, di:any
	}) => {
		return await this.GET_ACTION(`/user/login/sns`, query);
	}


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
	GET$Auth$loginIdProc = async(query:{
		id:any
		, password:any
	}) => {
		return await this.GET_ACTION(`/user/login/id`, query);
	}


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
	GET$Auth$loginEmailProc = async(query:{
		email:any
		, password:any
	}) => {
		return await this.GET_ACTION(`/user/login/email`, query);
	}


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
	POST$Auth$joinHp = async(body:{
		user_name:any
		, mobile_phone:any
		, msg_receive_agree:any
		, email_receive_agree:any
		, os_version:any
		, p:any
	}) => {
		return await this.POST_ACTION(`/user/join/hp`, body);
	}


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
	POST$Auth$joinSns = async(body:{
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
		return await this.POST_ACTION(`/user/join/sns`, body);
	}


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
	POST$Auth$joinId = async(body:{
		business:any
		, applicant:any
		, service:any
	}) => {
		return await this.POST_ACTION(`/user/join/id`, body);
	}


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
	POST$Auth$joinEmail = async(body:{
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
		return await this.POST_ACTION(`/user/join/email`, body);
	}


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
	GET$Auth$duplicateId = async(query:{
		id:any
	}) => {
		return await this.GET_ACTION(`/user/duplicateId`, query);
	}


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
	GET$Auth$duplicateAgencyName = async(query:{
		agency_name:any
	}) => {
		return await this.GET_ACTION(`/user/duplicateAgencyName`, query);
	}


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
	GET$Auth$duplicateBusinessNumber = async(query:{
		business_number:any
	}) => {
		return await this.GET_ACTION(`/user/duplicateBusinessNumber`, query);
	}


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
	GET$Auth$reSendAuthEamil = async(query:{
		id:any
	}) => {
		return await this.GET_ACTION(`/user/reAuthEmail`, query);
	}


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
	GET$Auth$authEmailConfirm = async(query:{
		p:any
	}) => {
		return await this.GET_ACTION(`/user/authEmailConfirm`, query);
	}


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
	GET$Auth$userFindEmail = async(query:{
		user_name:any
		, mobile_phone:any
	}) => {
		return await this.GET_ACTION(`/user/findEmail`, query);
	}


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
	GET$Auth$userFindEmailPwd = async(query:{
		user_email:any
		, user_name:any
		, mobile_phone:any
	}) => {
		return await this.GET_ACTION(`/user/findEmailPwd`, query);
	}


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
	GET$Auth$userFindId = async(query:{
		user_name:any
		, email:any
	}) => {
		return await this.GET_ACTION(`/user/findId`, query);
	}


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
	GET$Auth$userFindPwd = async(query:{
		email:any
		, user_id:any
		, mobile_phone:any
	}) => {
		return await this.GET_ACTION(`/user/findPwd`, query);
	}


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
	POST$Auth$changePwd = async(query:{
		old_password:any
		, password:any
	}) => {
		return await this.POST_ACTION(`/user/changePwd`, query);
	}


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
	GET$Auth$authPwdConfirm = async(query:{
		user_password:any
		, p:any
	}) => {
		return await this.GET_ACTION(`/user/authPwdConfirm`, query);
	}


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
	GET$Auth$userList = async(query:{
		page:any
		, limit:any
		, keyword:any
		, sort_column:any
		, sort_direction:any
	}) => {
		return await this.GET_ACTION(`/user/list`, query);
	}


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
	GET$Auth$withdrawal = async(query:{
		page:any
		, limit:any
		, keyword:any
	}) => {
		return await this.GET_ACTION(`/user/withdrawal/list`, query);
	}


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
	POST$Auth$withdrawalReg = async(body:{
		category:any
		, reason:any
		, user_idx:any
	}) => {
		return await this.POST_ACTION(`/user/withdrawal`, body);
	}


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
	GET$Auth$userInfo = async() => {
		return await this.GET_ACTION(`/user`);
	}


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
	POST$Auth$userModify = async(body:{
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
		return await this.POST_ACTION(`/user`, body);
	}


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
	POST$TwoMindBbs$mgr = async(body:{
		id:any
		, title:any
		, attach_yn:any
		, image_yn:any
		, comment_yn:any
		, write_yn:any
		, show_gb:any
	}) => {
		return await this.POST_ACTION(`/bbs/mgr`, body);
	}


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
	GET$TwoMindBbs$mgrDetail = async(id:any) => {
		return await this.GET_ACTION(`/bbs/mgr/${id}`);
	}


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
	GET$TwoMindBbs$list = async(query:{
		mgr_id:any
		, page:any
		, limit:any
		, keyword:any
	}) => {
		return await this.GET_ACTION(`/bbs/list`, query);
	}


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
	POST$TwoMindBbs$write = async(body:{
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
		return await this.POST_ACTION(`/bbs`, body);
	}


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
	GET$TwoMindBbs$view = async(id:any) => {
		return await this.GET_ACTION(`/bbs/view/${id}`);
	}


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
	GET$TwoMindBbs$del = async(id:any) => {
		return await this.GET_ACTION(`/bbs/remove/${id}`);
	}


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
	GET$TwoMindCmt$list = async(query:{
		bbs_id:any
		, page:any
		, limit:any
	}) => {
		return await this.GET_ACTION(`/cmt/list`, query);
	}


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
	POST$TwoMindCmt$write = async(body:{
		id:any
		, bbs_id:any
		, contents:any
		, show_gb:any
		, ip_address:any
	}) => {
		return await this.POST_ACTION(`/cmt`, body);
	}


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
	GET$TwoMindCmt$del = async(id:any) => {
		return await this.GET_ACTION(`/cmt/remove/${id}`);
	}


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
	GET$TwoMindCmt$like = async(id:any,query:{
		ip_address:any
	}) => {
		return await this.GET_ACTION(`/cmt/like/${id}`, query);
	}


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
	GET$TwoMindModels$getDemoOptions = async() => {
		return await this.GET_ACTION(`/product/options`);
	}


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
	GET$TwoMindModels$getDemoModles = async() => {
		return await this.GET_ACTION(`/product/model`);
	}


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
	POST$TwoMindList$insert = async(body:{
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
		return await this.POST_ACTION(`/product`, body);
	}


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
	GET$TwoMindList$tempList = async(query:{
		sale:any
	}) => {
		return await this.GET_ACTION(`/product/tempList`, query);
	}


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
	GET$TwoMindList$tempDetail = async(idx:any) => {
		return await this.GET_ACTION(`/product/tempList/${idx}`);
	}


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
	GET$TwoMindList$listCategory = async() => {
		return await this.GET_ACTION(`/product/listCategory`);
	}


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
	GET$TwoMindList$listSrchTab = async(query:{
		category:any
	}) => {
		return await this.GET_ACTION(`/product/listSrchTab`, query);
	}


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
	GET$TwoMindList$list = async(query:{
		category:any
		, page:any
		, limit:any
		, keyword:any
	}) => {
		return await this.GET_ACTION(`/product/list`, query);
	}


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
	GET$TwoMindList$detail = async(idx:any) => {
		return await this.GET_ACTION(`/product/${idx}`);
	}


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
	POST$TwoMindChat$insert = async(body:{
		product_idx:any
		, party_user_idx:any
		, contents:any
		, closing_gb:any
		, show_gb:any
	}) => {
		return await this.POST_ACTION(`/chat`, body);
	}


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
	GET$TwoMindBbs$activeList = async() => {
		return await this.GET_ACTION(`/bbs/activeList`);
	}

}

export default ArcApiServiceMiddle;