// mock/series.ts
// import { MockMethod } from 'vite-plugin-mock'
import { defineMock } from './base'

export default defineMock([
  {
    url: 'series/getSeriesByUser',
    method: ['GET'],
    body: ({ headers }) => {
      // 从请求头中获取 cookie
      const cookie = headers.cookie
      console.log('请求头中的 cookie:', cookie)

      return {
        code: '00000',
        msg: '一切ok',
        data: [
          {
            id: '30',
            disporder: '30',
            nameEnUs: 'XiaoXue',
            nameZhCn: '小学英语',
            nameZhBig: '小學英語',
            parentId: '0',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '40',
            disporder: '29',
            nameEnUs: 'ChuZhong',
            nameZhCn: '初中英语',
            nameZhBig: 'ChuZhong',
            parentId: '0',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '50',
            disporder: '28',
            nameEnUs: 'GaoZhong',
            nameZhCn: '高中英语',
            nameZhBig: 'GaoZhong',
            parentId: '0',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '60',
            disporder: '27',
            nameEnUs: 'CollegeEnglish',
            nameZhCn: '大学英语',
            nameZhBig: 'CollegeEnglish',
            parentId: '0',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '70',
            disporder: '26',
            nameEnUs: 'Overseas',
            nameZhCn: '出国考试',
            nameZhBig: 'Overseas',
            parentId: '0',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '251',
            disporder: '22',
            nameEnUs: 'publicenglish',
            nameZhCn: '常用英语',
            nameZhBig: null,
            parentId: '0',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
        ],
        success: true,
        fail: false,
      }
    },
  },
  {
    url: 'series/getSeriesByParentId/:id',
    method: ['GET'],
    body: ({ query }) => {
      const id = query.id
      console.log('parentId:', id)

      return {
        code: '00000',
        msg: '一切ok',
        data: [
          {
            id: '4',
            disporder: '4',
            nameEnUs: 'XinMuBiao',
            nameZhCn: '人教社新目标',
            nameZhBig: '課標版',
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《英语》(新目标)，由课程教材研究所英语课程教材研究开发中心与汤姆森学习出版集团合编，人民教育出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级上册至九年级共五册教科书所有单词，共计2972个单词。各册教科书的版次依次是：七年级上册、七年级下册、八年级上册是2005年6月第3版；八年级下册2005年11月第3版；九年级2005年6月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '41',
            disporder: '41',
            nameEnUs: 'WaiYanShe-ChuZhong',
            nameZhCn: '外研社新标准',
            nameZhBig: 'WaiYanShe_ChuZhong',
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《英语》，由外语教学与研究出版社和(英国) 麦克米伦出版公司依据最新国家《英语课程标准》联合编写的系列英语教材，外语教学与研究出版社发行。 <BR>&nbsp;&nbsp;&nbsp; 本课程涵盖初中一年级(上)至三年级(下)六册教科书所有单词，共计2106个单词。各册教科书的版次依次是：一年级(上)2004年7月第1版；一年级(下)2005年10月第1版；二年级(上)2006年6月第1版；三年级(上)2006年8月第1版；三年级(下)2007年1月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '91',
            disporder: '91',
            nameEnUs: 'ZhongKaoKaoGang-Shanghai',
            nameZhCn: '中考考纲词汇(上海版)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '&nbsp; 本课程是专门训练英语语音而设置的课程，包括初、中、高级三个课程，共计498个语音词汇。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '256',
            disporder: '146',
            nameEnUs: 'EEC_chuzhong',
            nameZhCn: 'EEC',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '&nbsp; 本课程依据的教材是义务教育课程标准实验教科书EEC初中英语，由黑龙江EEC学院编写，教育科学出版社出版。本课程包括一年级上至四年级下八册教科书所有单词，共计2130个单词。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '258',
            disporder: '148',
            nameEnUs: 'beijingpublic',
            nameZhCn: '北京版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '&nbsp; 本课程的依据是由北京教育科学研究院和北京出版社合编并出版的《北京市义务教育课程改革实验教材 英语》教材，包括第11册基础词汇、第11册阅读词汇、第12册基础词汇、第12册阅读词汇、第13册基础词汇、第13册阅读词汇、第14册基础词汇、第14册阅读词汇、第15册基础词汇、第15册阅读词汇，共10个课程，3143个词汇。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '259',
            disporder: '149',
            nameEnUs: 'renaichuzhong',
            nameZhCn: '仁爱版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '&nbsp; 本课程的依据是北京市仁爱教育研究所编著，并由湖南教育出版社出版的《义务教育课程标准实验教科书 英语》教材，包括七年级上册、七年级下册、八年级上册、八年级下册、九年级上册、九年级下册，共6个课程，2729个词汇。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '261',
            disporder: '151',
            nameEnUs: 'zhongkao-kaogangcihui',
            nameZhCn: '中考考纲',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '&nbsp; 本课程以中华人民共和国教育部制订的最新的《中考考试大纲》的词汇表为编写依据，分为单词(一)、单词(二)、中考词组，三个课程，共1390个词汇。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '262',
            disporder: '152',
            nameEnUs: 'niujinpublic',
            nameZhCn: '牛津版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '&nbsp; 本课程依据译林出版社出版的《牛津初中英语》教材，包括七年级上、七年级下、八年级上、八年级下、九年级上、九年级下、预备课程，共7个课程，2733个词汇。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '276',
            disporder: '166',
            nameEnUs: 'CZ-ZhongKaoBiBei800Ci',
            nameZhCn: '中考必备800词',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '297',
            disporder: '187',
            nameEnUs: 'yingyusiwei',
            nameZhCn: '英语思维',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '0',
            content: '&nbsp; 本课程是',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '301',
            disporder: '191',
            nameEnUs: 'CN-ChuZhongKB',
            nameZhCn: '人教社新目标(2009)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《英语》(新目标)，由课程教材研究所英语课程教材研究开发中心与汤姆森学习出版集团合编，人民教育出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级上册至九年级共五册教科书所有单词，共计2578个单词。各册教科书的版次依次是：七年级上册2006年6月第4版；七年级下册2006年11月第4版；八年级上册2007年3月第4版；八年级下册2007年11月第4版；九年级2007年6月第3版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '304',
            disporder: '194',
            nameEnUs: 'xingainian',
            nameZhCn: '新概念(2009)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '&nbsp; 本课程依据的是新版《新概念英语》，由外语教学与研究出版社出版，包括第一册、第二册、第三册、第四册，共4个课程，3450个词汇。四册的版次均为1997年10月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '904',
            disporder: '322',
            nameEnUs: 'NiuJin_Shanghai',
            nameZhCn: '牛津深圳版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《初中英语》(牛津深圳版)，上海教育出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级第一册（7A）至九年级全一册（9）教科书所有单词，共计1435个单词。各册教科书的版次依次是：七年级第一册（7A）、八年级第一册（8A）是2007年7月第2版；七年级第二册（7B）是2008年1月第2版，；八年级第二册（8B）是2009年1月第3版；九年级全一册（9）是2009年8月第3版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '905',
            disporder: '323',
            nameEnUs: 'ZHJC_chuzhong',
            nameZhCn: '英语综合教程',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是全国外国语学校系列教材《英语》(综合教程)，上海外语教育出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖初中一年级第一学期所有单词，共计1048个单词。本册教科书的版次是2006年7月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '906',
            disporder: '324',
            nameEnUs: 'NiuJinEnglish',
            nameZhCn: '牛津英语',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《牛津英语》，上海教育出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级第一学期（7A）至九年级第二学期（9B）教科书所有单词，共计2642个单词。各册教科书的版次依次是：七年级第一学期（7A）2007年7月第3版；七年级第二学期（7B）2006年1月第1版；八年级第一学期（8A）2006年7月第2版；八年级第二学期（8B）2006年12月第2版；九年级第一学期（9A）2007年7月第2版；九年级第二学期（9B）2006年12月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '908',
            disporder: '326',
            nameEnUs: 'zhongkaokaogangnew',
            nameZhCn: '中考考纲(2010)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程按照2010年北京中考考试说明词汇表编写，包括中考必考词，中考常考词，中考满分词和中考必考词组四个课程，共计1615个单词，305个词组',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '912',
            disporder: '330',
            nameEnUs: 'niujinyilin',
            nameZhCn: '牛津译林版(2010)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《牛津初中英语》，译林出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖预备课程、七年级上（7A）至九年级下（9B）7册教科书所有单词，共计2685个单词。各册教科书的版次依次是：预备课程为2004年7月第1版；7A为2005年7月第2版；7B为2005年12月第2版；8A为2006年6月第2版；8B为2006年12月第2版；9A为2007年7月第2版；9B为2007年10月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '916',
            disporder: '334',
            nameEnUs: 'chuzhongjijiao',
            nameZhCn: '冀教版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《初中英语》，河北教育出版社和大象出版社出版，(中国)河北教育出版社和(美国) DC加拿大国际交流中心合编。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级第一学期至九年级第二学期教科书所有单词，共计2716个单词。各册教科书的版次依次是：七年级第一学期2005年6月第5版；七年级第二学期2004年12月第3版；八年级第一学期2005年7月第2版；八年级第二学期2005年12月第3版；九年级第一学期2005年7月第1版；九年级第二学期2008年11月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '924',
            disporder: '342',
            nameEnUs: 'CzRenaiban(2010)',
            nameZhCn: '仁爱版(2010)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程的依据是北京市仁爱教育研究所编著，并由北京教育出版社出版的《义务教育课程标准实验教科书 英语》教材。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级上册、八年级上册、九年级上册，共3册，1494个词汇。各册书的版次分别是：七年级上册、八年级上册、九年级上册 为2010年6月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '926',
            disporder: '344',
            nameEnUs: 'CzWaiyansheXinbiaozhun(chuzhongqidiandi1ban)',
            nameZhCn: '外研社新标准(初中起点)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《英语》，（初中起点）本教材为外语教学月研究出版社与英国麦克米伦出版公司共同组织编写的《英语》（新标准）系列教材组成部分。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖第一册、第二册、第三册、第四册、第五册、第六册，共6册，2549个词汇。各册书的版次分别是：第一册、第三册2006年8月第1版；第二册 2005年8月第1版；第四册 2005年12月第1版；第五册 2006年6月第1版；第六册 2006年12月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '929',
            disporder: '347',
            nameEnUs: 'JiJiaoBan(di6ban)',
            nameZhCn: '冀教版（第六版）',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书，河北教育出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级第一学期和八年级第一学期教科书所有单词，共计1026 个单词，共两册。各册教科书的版次依次是：七年级第一学期（7A）、八年级第一学期（8A）2010年6月第六版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '930',
            disporder: '348',
            nameEnUs: 'WaiYanSheXinBiaoZhun(2006)',
            nameZhCn: '外研社新标准(2006)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书，外语教育与研究出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖三年级上册和三年级下册教科书所有单词，共计593个单词，共两册。各册教科书的版次依次是：三年级上册 2006年8月第1版；三年级下册 2007年1月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '933',
            disporder: '351',
            nameEnUs: 'RenAi(2010wanzhengban)',
            nameZhCn: '仁爱(2010完整版)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程的依据是北京市仁爱教育研究所编著，并由北京教育出版社出版的《义务教育课程标准实验教科书 英语》教材，北京教育出版社出版。<BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级上册、七年级下册、八年级上册、八年级下册、九年级上册、九年级下册共6册，2759个词汇。各册书的版次分别是：七年级上册、八年级上册、九年级上册为2010年6月第1版;七年级下册、八年级下册、九年级下册为2009年12月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '938',
            disporder: '356',
            nameEnUs: 'LuJiaoBan(di2ban)',
            nameZhCn: '鲁教版（第二版）',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《英语》，由山东教育出版社出版。 <BR>&nbsp;&nbsp;&nbsp; 本课程目前涵盖七年级上册至九年级共七册教科书所有单词，共2754个单词。各册教科书的版次依次是：六年级上册2005年8月第2版；六年级下册2004年1月第1版；七年级上册2005年8月第2版；七年级下册2005年1月第1版；八年级上册2005年8月第1版；八年级下册2006年1月第1版；九年级2007年7月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '939',
            disporder: '357',
            nameEnUs: 'NiuJin_ChuZhongXinQiDian',
            nameZhCn: '牛津初中英语新起点',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育课程标准实验教科书《牛津初中英语》，由凤凰出版传媒集团和译林出版社合作出版。 <BR>&nbsp;&nbsp;&nbsp; 本课程涵盖七年级上下、八年级上下和九年级上下教科书所有单词，共计1784个单词，共6册。各册教科书的版次依次是：七年级上2009年7月第3版；七年级下2009年12月第3版；八年级上2010年7月第3版；八年级下2010年12月第3版；九年级上2011年7月第3版；九年级下2011年12月第3版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '941',
            disporder: '359',
            nameEnUs: 'NiuJin(2012)',
            nameZhCn: '牛津英语（2012）',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '<P>本课程依据的教材是义务教育教科书《英语》，由上海教育出版社出版发行。 </P>\r\n<P>&nbsp; 本课程目前涵盖七年级上册至九年级上册教科书所有单词，共1169个单词。各册教科书的版次是七年级上册2012年7月第1版；七年级下册2013年1月第1版；八年级上册2013年7月第1版；八年级下册2014年1月第1版；九年级上册2014年7月第1版。</P>',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '944',
            disporder: '362',
            nameEnUs: 'XinMuBiao2012',
            nameZhCn: '人教社新目标(2012)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，由人民教育出版社出版发行。 <BR>&nbsp; 本课程目前涵盖七年级上、下册及九年级教科书所有单词，共2380个单词。各册教科书的版次是七年级上册2012年5月第1版；七年级下册2012年10月第1版；八年级上册2013年6月第1版；八年级下册2013年10月第1版；九年级2014年3月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '945',
            disporder: '363',
            nameEnUs: 'CzRenaiban(2012)',
            nameZhCn: '仁爱版(2012)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，由北京教育出版社出版发行。 <BR>&nbsp; 本课程目前涵盖七年级上册至八年级下册教科书所有单词，共1800个单词。各册教科书的版次是七年级上册2012年7月第1版，七年级下册2012年12月第1版；八年级上册2012年7月第1版；八年级下册2013年10月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '947',
            disporder: '365',
            nameEnUs: 'CzNiuJinYiLin2012',
            nameZhCn: '牛津译林版(2012)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，由译林出版社出版发行。 <BR>&nbsp; 本课程目前涵盖七年级上、下册和八年级上、下册教科书所有单词，共1615个单词。各册教科书的版次是七年级上册2012年6月第2版；七年级下册2012年11月第2版；八年级上册2013年6月第2版；八年级下册2013年11月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '948',
            disporder: '366',
            nameEnUs: 'CzWaiyansheban(2012)',
            nameZhCn: '外研社版(2012)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，由外语教学与研究出版社出版发行，本教材是浙江山东等省专用。 <BR>&nbsp; 本课程目前涵盖七年级上册至九年级上册教科书所有单词，共2000个单词。各册教科书的版次依次是七年级上册2012年7月第1版；七年级下册2012年12月第1版；八年级上册2013年7月第1版；八年级下册2013年12月第1版；九年级上册2014年6月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '949',
            disporder: '367',
            nameEnUs: 'CzJijiaoban(2012)',
            nameZhCn: '冀教版(2012)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，由河北教育出版社出版发行。 <BR>&nbsp; 本课程目前涵盖七年级上册至八年级下册教科书所有单词，共1312个单词。各册教科书的版次依次是七年级上册2012年7月第1版，七年级下册2012年12月第1版；八年级上册2013年7月第1版；八年级下册2013年11月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '951',
            disporder: '369',
            nameEnUs: 'CzEECEnglish(2012)',
            nameZhCn: 'EEC英语(2012)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书（五•四学制）《英语》，由EEC学院编写，由教育科学出版社出版发行。<BR>&nbsp;&nbsp;&nbsp; 本课程目前涵盖六年级上册至七年级上册教科书所有单词，共941个单词。各册教科书的版次依次是：六年级上册2012年7月第1版；六年级下册2012年12月第1版；七年级上册2013年7月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '956',
            disporder: '374',
            nameEnUs: 'CzOxfordEnglish(A)',
            nameZhCn: '牛津英语（A版）',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '课程依据的教材是义务教育课程标准实验教科书《英语》A版，由上海教育出版社出版。 <BR>&nbsp;&nbsp;&nbsp; 本课程涵盖初中七年级第一学期至九年级第二学期共六册教科书所有单词，共计1,962个单词。各册教科书的版次是：七年级第一学期2008年7月第2版、七年级第二学期2008年1月第1版、八年级第一学期2008年7月第1版、八年级第二学期2009年1月第1版、九年级第一学期2009年7月第1版、九年级第二学期2010年1月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '965',
            disporder: '381',
            nameEnUs: 'NewCenturyEnglish',
            nameZhCn: '新世纪版初中英语',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，由上海外语教育出版社出版发行。 <BR>&nbsp;&nbsp;&nbsp; 本课程目前涵盖六年级第一学期至九年级第二学期教科书所有单词，共1836个单词。各册教科书的版次依次是六年级第一学期2007年8月第1版；六年级第二学期2008年1月第1版；七年级第一学期2008年8月第1版；七年级第二学期2008年12月第1版；八年级第一学期2009年7月第1版；八年级第二学期2010年1月第1版；九年级第一学期2010年7月第1版；九年级第二学期2011年1月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '967',
            disporder: '383',
            nameEnUs: 'CzBeiShiDaBan',
            nameZhCn: '北师大版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是国家《英语课程标准（实验稿）》，由北京师范大学出版社出版发行。 <BR>&nbsp;&nbsp;&nbsp; 本课程目前涵盖七年级第一学期至九年级教科书所有单词，共2281个单词。各册教科书的版次依次是七年级第一学期2010年6月第6版；七年级第二学期2009年12月第4版；八年级第一学期2010年6月第5版；八年级第二学期2009年12月第4版；九年级2009年3月第3版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '974',
            disporder: '390',
            nameEnUs: 'CzLuJiaoBan(2012)',
            nameZhCn: '鲁教版（2012）',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书（五四学制）《英语》，由山东教育出版社出版发行。 <BR>&nbsp; 本课程目前涵盖六年级上、下册至七年级上、下册教科书所有单词，共1408个单词。各册教科书的版次依次是六年级上册2012年7月第1版；六年级下册2013年1月第1版；七年级上册2013年7月第1版；七年级下册2014年1月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '977',
            disporder: '393',
            nameEnUs: 'CzBeiShiDaBan(2013)',
            nameZhCn: '北师大版(2013)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是国家《英语课程标准（实验稿）》，由北京师范大学出版社出版发行。<BR>&nbsp; 本课程目前涵盖七年级上、下册教科书所有单词，共1034个单词。各册教科书的版次依次是七年级上册2013年7月第1版；七年级下册2013年12月第1版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '987',
            disporder: '403',
            nameEnUs: 'CzStarter',
            nameZhCn: '牛津译林预备版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，由译林出版社出版发行。<BR>&nbsp; 本课程目前涵盖预备课程教科书所有单词，共495个单词。该册教科书的版次是2013年7月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '990',
            disporder: '406',
            nameEnUs: 'CzNiuJinShangHaiBan',
            nameZhCn: '牛津上海版',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content:
              '本课程依据的教材是义务教育教科书《英语》，是由上海教育出版社出版发行。 <BR>&nbsp; 本课程目前涵盖六年级第一学期至九年级第二学期共8册教科书所有单词，共1685个单词。各册教科书的版次依次是六年级上册2007年8月第2版；六年级下册2008年1月第2版；七年级上册2008年7月第2版；七年级下册2009年1月第2版；八年级上册2009年7月第2版；八年级下册2010年1月第2版；九年级上册2010年8月第2版；九年级下册2011年1月第2版。',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1019',
            disporder: '419',
            nameEnUs: 'chuzhongkaogangnew',
            nameZhCn: '初中考纲（新版）',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1021',
            disporder: '421',
            nameEnUs: 'zhongkaoxiezuo2022',
            nameZhCn: '攻克中考写作',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1023',
            disporder: '423',
            nameEnUs: 'XinMuBiaoxiuding2012',
            nameZhCn: '人教社新目标(修订)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1036',
            disporder: '435',
            nameEnUs: 'chuzhongbuguizedongci2023',
            nameZhCn: '初中不规则动词',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1039',
            disporder: '437',
            nameEnUs: 'zhongkaobikaocihui2024',
            nameZhCn: '中考必考常用词汇',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1040',
            disporder: '438',
            nameEnUs: 'waiyanshexinmubiao2024',
            nameZhCn: '外研社新标准2012',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1041',
            disporder: '439',
            nameEnUs: 'beishidaxinkebiaocizu2024',
            nameZhCn: '北师大新课标2017(词组)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1042',
            disporder: '440',
            nameEnUs: 'beishidaxinkebiaodanci2024',
            nameZhCn: '北师大新课标2017(单词)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1043',
            disporder: '441',
            nameEnUs: 'renaibandanci2024',
            nameZhCn: '仁爱版2012(单词)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1044',
            disporder: '442',
            nameEnUs: 'renaibancizu2024',
            nameZhCn: '仁爱版2012(词组)',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1045',
            disporder: '443',
            nameEnUs: 'renjiaobanxinmubiao2024',
            nameZhCn: '人教版新目标2024',
            nameZhBig: null,
            parentId: '40',
            type: '1',
            showFree: '1',
            content: '',
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1069',
            disporder: '1069',
            nameEnUs: 'renjiaoban（2024）',
            nameZhCn: '人教新目标2024（修订版）',
            nameZhBig: '人教新目标2024（修订版）',
            parentId: '40',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1070',
            disporder: '1070',
            nameEnUs: 'yilinban（2024）',
            nameZhCn: '译林版（2024）',
            nameZhBig: '译林版（2024）',
            parentId: '40',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1074',
            disporder: '1074',
            nameEnUs: 'renaiban(2024)',
            nameZhCn: '仁爱版(2024)',
            nameZhBig: '仁爱版(2024)',
            parentId: '40',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2024-11-02 21:12:41',
            updateTime: '2024-11-02 21:12:41',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1077',
            disporder: '1077',
            nameEnUs: 'renjiaobanjiunianji2024',
            nameZhCn: '人教版九年级2024',
            nameZhBig: '人教版九年级2024',
            parentId: '40',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2025-01-18 13:59:57',
            updateTime: '2025-01-18 13:59:57',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1082',
            disporder: '1082',
            nameEnUs: 'renjiaoshexinmubiao（2012）xiudingban',
            nameZhCn: '人教社新目标（2012）修订版',
            nameZhBig: '人教社新目标（2012）修订版',
            parentId: '40',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2025-02-13 14:18:34',
            updateTime: '2025-02-13 14:18:34',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1086',
            disporder: '1086',
            nameEnUs: 'zhongkaokaogangxinbanxiudingban',
            nameZhCn: '中考考纲新版修订版',
            nameZhBig: '中考考纲新版修订版',
            parentId: '40',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2025-02-13 13:37:29',
            updateTime: '2025-02-13 13:37:29',
            updateUser: '1',
            status: '1',
            picture: null,
          },
          {
            id: '1087',
            disporder: '1087',
            nameEnUs: 'renjiaoban(2024ban)',
            nameZhCn: '人教版(2024版)',
            nameZhBig: '人教版(2024版)',
            parentId: '40',
            type: '1',
            showFree: '1',
            content: null,
            createUser: '1',
            createTime: '2025-03-07 23:13:39',
            updateTime: '2025-03-07 23:13:39',
            updateUser: '1',
            status: '1',
            picture: null,
          },
        ],
        success: true,
        fail: false,
      }
    },
  },
])
