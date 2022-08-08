/**
 * Notes: 业务基类 
 * Date: 2021-03-15 04:00:00 
 */

const dbUtil = require('../../../framework/database/db_util.js');
const util = require('../../../framework/utils/util.js');
const AdminModel = require('../../../framework/platform/model/admin_model.js');
const NewsModel = require('../model/news_model.js');
const EnrollModel = require('../model/enroll_model.js');
const AlbumModel = require('../model/album_model.js');
const BaseService = require('../../../framework/platform/service/base_service.js');

class BaseProjectService extends BaseService {
	getProjectId() {
		return util.getProjectId();
	}

	async initSetup() {
		let F = (c) => 'bx_' + c;
		const INSTALL_CL = 'setup_kidschool';
		const COLLECTIONS = ['setup', 'admin', 'log', 'news', 'enroll', 'enroll_join', 'fav', 'user', 'album'];
		const CONST_PIC = '/images/cover.gif';

		const NEWS_CATE = '1=本园概况,2=招生指南,3=本园动态';
		const ALBUM_CATE = '1=园区环境,2=教学场所,3=生活设施,4=文体娱乐';
		const ENROLL_CATE = '1=招生报名';


		if (await dbUtil.isExistCollection(F(INSTALL_CL))) {
			return;
		}

		console.log('### initSetup...');

		let arr = COLLECTIONS;
		for (let k = 0; k < arr.length; k++) {
			if (!await dbUtil.isExistCollection(F(arr[k]))) {
				await dbUtil.createCollection(F(arr[k]));
			}
		}

		if (await dbUtil.isExistCollection(F('admin'))) {
			let adminCnt = await AdminModel.count({});
			if (adminCnt == 0) {
				let data = {};
				data.ADMIN_NAME = 'admin';
				data.ADMIN_PASSWORD = 'e10adc3949ba59abbe56e057f20f883e';
				data.ADMIN_DESC = '超管';
				data.ADMIN_TYPE = 1;
				await AdminModel.insert(data);
			}
		}


		if (await dbUtil.isExistCollection(F('news'))) {
			let newsCnt = await NewsModel.count({});
			if (newsCnt == 0) {
				let newsArr = NEWS_CATE.split(',');
				for (let j in newsArr) {
					let title = newsArr[j].split('=')[1];
					let cateId = newsArr[j].split('=')[0];

					let data = {};
					data.NEWS_TITLE = title + '标题1';
					data.NEWS_DESC = title + '简介1';
					data.NEWS_CATE_ID = cateId;
					data.NEWS_CATE_NAME = title;
					data.NEWS_CONTENT = [{ type: 'text', val: title + '内容1' }];
					data.NEWS_PIC = [CONST_PIC];

					await NewsModel.insert(data);
				}
			}
		}

		if (await dbUtil.isExistCollection(F('album'))) {
			let albumCnt = await AlbumModel.count({});
			if (albumCnt == 0) {
				let albumArr = ALBUM_CATE.split(',');
				for (let j in albumArr) {
					let title = albumArr[j].split('=')[1];
					let cateId = albumArr[j].split('=')[0];

					let data = {};
					data.ALBUM_TITLE = title + '标题1'; 
					data.ALBUM_CATE_ID = cateId;
					data.ALBUM_CATE_NAME = title;
					data.ALBUM_OBJ = {
						cover: [CONST_PIC],
						detail: [{ type: 'text', val: title + '内容1' }, { type: 'img', val: CONST_PIC }],
					};

					await AlbumModel.insert(data);
				}
			}
		}

		if (await dbUtil.isExistCollection(F('enroll'))) {
			let enrollCnt = await EnrollModel.count({});
			if (enrollCnt == 0) {
				let enrollArr = ENROLL_CATE.split(',');
				for (let j in enrollArr) {
					let title = enrollArr[j].split('=')[1];
					let cateId = enrollArr[j].split('=')[0];

					let data = {};
					data.ENROLL_TITLE = title + '专业1';
					data.ENROLL_CATE_ID = cateId;
					data.ENROLL_CATE_NAME = title;
					data.ENROLL_START = this._timestamp;
					data.ENROLL_END = this._timestamp + 86400 * 1000 * 30;
					data.ENROLL_OBJ = {
						cover: [CONST_PIC],
						year: '三年制',
						start: '高中',
						edu: '大专',
						fee: '3500/年',
						major: '高等数学、线性代数、概率与数理统计、普通物理、离散数学、计算机科学导论、C语言及程序设计、汇编语言、计算机组成原理、算法与数据结构、操作系统原理、软件工程、计算机网络与通信、计算机专业英语、编译原理、数据库系统原理等',
						lesson: '高等数学、线性代数、概率与数理统计、普通物理、离散数学、计算机科学导论、C语言及程序设计、汇编语言、计算机组成原理、算法与数据结构、操作系统原理、软件工程、计算机网络与通信、计算机专业英语、编译原理、数据库系统原理等',
						work: '学生毕业后可以到众多软件企业、各个大、中型企、事业单位的信息技术部门、教育部门等单位从事软件工程领域的技术开发、教学、科研及管理等工作'
					};

					await EnrollModel.insert(data);
				}
			}
		}


		if (!await dbUtil.isExistCollection(F(INSTALL_CL))) {
			await dbUtil.createCollection(F(INSTALL_CL));
		}
	}

}

module.exports = BaseProjectService;