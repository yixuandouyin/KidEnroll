module.exports = {
	PROJECT_COLOR: '#FD6451',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#FD6451',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
		{ mark: 'area', title: '所在地区', type: 'area', must: true },
	],

	NEWS_NAME: '资讯',
	NEWS_CATE: [
		{ id: 1, title: '本园概况', style: 'leftbig1' },
		{ id: 2, title: '招生指南', style: 'leftbig1' },
		{ id: 3, title: '本园动态', style: 'leftbig1' },
	],
	NEWS_FIELDS: [
	],

	ALBUM_NAME: '校园相册',
	ALBUM_CATE: [
		{ id: 1, title: '园区环境' },
		{ id: 2, title: '教学场所' },
		{ id: 3, title: '生活设施' },
		{ id: 4, title: '文体娱乐' },
	],
	ALBUM_FIELDS: [
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'detail', title: '详细介绍', type: 'content', must: true },
	],

	ENROLL_NAME: '招生报名',
	ENROLL_CATE: [
		{ id: 1, title: '招生报名' },
	],
	ENROLL_FIELDS: [
		{ mark: 'obj', title: '招生年龄段', type: 'textarea', must: true },
		{ mark: 'rule', title: '招生范围', type: 'textarea', max: 1000 },
		{ mark: 'time', title: '报名与录取流程', type: 'textarea', must: false },
		{ mark: 'base', title: '报名所需材料', type: 'textarea', must: false },
		{ mark: 'fee', title: '收费标准', type: 'textarea', must: false },
		{ mark: 'tel', title: '联系方式', type: 'textarea', must: false },
		{ mark: 'other', title: '其他说明', type: 'textarea', must: false },
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
	],
	ENROLL_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '幼儿姓名', must: true, max: 30, edit: false },
		{ mark: 'birth', type: 'date', title: '出生日期', must: true, edit: false },
		{ mark: 'sex', title: '幼儿性别', type: 'select', selectOptions: ['男', '女'], must: true, edit: false },
		{ mark: 'card', type: 'idcard', title: '身份证号', must: true },
		{ mark: 'phone', type: 'mobile', title: '联系电话', must: true },
		{ mark: 'zone', type: 'area', title: '家庭区域' },
		{ mark: 'address', type: 'textarea', title: '家庭住址' },

		{ mark: 'guard_name', type: 'text', title: '监护人姓名', must: true, max: 30 },
		{ mark: 'guard_phone', type: 'mobile', title: '监护人电话', must: true },
		{ mark: 'guard_card', type: 'idcard', title: '监护人身份证号码', must: true, max: 30 },
		{ mark: 'guard_relation', type: 'select', title: '与幼儿关系', selectOptions: ['父亲', '母亲', '爷爷', '奶奶', '外婆', '外公', '其他亲属', '非亲属'], must: true },
	],

}