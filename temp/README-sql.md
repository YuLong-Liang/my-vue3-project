### 构建数据库的指南

#### 关键数据结构

#### 登录验证信息

```json
{
  "jId": "",
  "data": "",
  "key": ""
}
```

##### 登录用户的详细信息

```json
{
  "enterpriseId": "1",
  "orgId": "5546563255632171154",
  "userId": "102474",
  "username": "ty102474",
  "orgName": "河南分校3",
  "orgCode": "hn3",
  "loginTime": "1747917999000",
  "firstLoginTime": "1747565980000",
  "fullname": "李岩",
  "expireTime": "2025-05-27",
  "roleProperties": null,
  "useScope": "0",
  "treeId": "0001p657",
  "gender": null,
  "status": "1"
}
```

##### 用户信息

```json
{
  "id": "102474",
  "username": "ty102474",
  "name": "李岩",
  "gender": null,
  "mobile": "13298217835",
  "schoolName": null,
  "grade": null,
  "wechatId": null,
  "qq": null,
  "lastScore": "0",
  "expireTime": "2025-05-27 18:59:58",
  "loginTime": "2025-05-24 11:32:47",
  "email": null,
  "grades": "[30,40,50,60,70,251]",
  "extend": "{\"ZNJY_TESTING_CONDIG\":3000,\"JYDYCG_TESTING_CONDIG\":3000,\"MXDYCG_TESTING_CONDIG\":5000,\"TXDYCG_TESTING_CONDIG\":5000,\"SPELL_TYPE\":2}",
  "studentType": "2",
  "firstLoginTime": "2025-05-18 18:59:40",
  "teacherName": "智慧教员",
  "teacherMobile": "19703746665",
  "className": "默认班级"
}
```

#####

```sql
{



}
```

##### 系列信息

parentId 指的是 ["小学", "初中", "高中", "大学", "外国"]等内容的 id 号；

```json
{
  "id": "30",
  "disporder": "30",
  "nameEnUs": "XiaoXue",
  "nameZhCn": "小学英语",
  "nameZhBig": "小學英語",
  "parentId": "0",
  "type": "1",
  "showFree": "1",
  "content": "本课程依据的教材是义务教育",
  "createUser": "1",
  "createTime": "2024-11-02 21:12:41",
  "updateTime": "2024-11-02 21:12:41",
  "updateUser": "1",
  "status": "1",
  "picture": null
}
```

##### 教材信息

seriesId 指的是系列信息；该教材属于的系列的id是 seriesId；

```json
{
  "id": "1761",
  "seriesId": "1076",
  "name": "sanshangzhuanyoumingciwys_2024",
  "totalWords": "12",
  "expLanguage": "Simplified-Chinese",
  "nameEnUs": "sanshangzhuanyoumingciwys_2024",
  "nameZhCn": "三上专有名词",
  "nameZhBig": null,
  "disporder": "1761",
  "remark": null,
  "type": "1",
  "createUser": "1",
  "createTime": "2025-02-13 14:09:36",
  "updateTime": "2025-02-13 14:09:36",
  "updateUser": "1",
  "status": "1",
  "studyNumber": "0",
  "percent": 0.0,
  "percentStr": null
}
```

##### 单元信息

```json
{
  "id": "392",
  "seriesId": "5",
  "programId": "12",
  "programName": "CN-GaoZhong22",
  "name": "Unit11",
  "nameEnUs": "Unit11",
  "nameZhCn": "Unit11",
  "nameZhBig": null,
  "unitIndex": "0",
  "createUser": "1",
  "createTime": "2024-11-02 21:52:20",
  "updateTime": "2024-11-02 21:52:20",
  "updateUser": "1",
  "status": "1",
  "totalNUm": "54"
}
```

##### 用户选择的当前单元的信息

```json
{
  "userId": "",
  "username": "",
  "seriesId": "",
  "programId": "",
  "wordId": "",
  "wordIdx": "",
  "groupId": "",
  "fortify": "",
  "unitName": "",
  "source": "",
  "errors": "",
  "rights": "",
  "end": "",
  "errorWordInfo": ""
}
```

##### 单元对应的测试记录信息

score、time、isEnd 分别表示：闯关分数、闯关花费的时间、是否完成闯关；

```json
{
  "id": "15848",
  "name": "Starter Unit1",
  "score": null,
  "time": null,
  "isEnd": "0"
}
```

##### 单元的统计信息

每个单元有三个三个模块的学习记录：智能记忆Znjy、智能默写 Znmx、智能听写Zntx；

```json
{
  "unitTotal": "54",
  "studyNumForZnjy": 0.0,
  "studyNumForZnmx": "0",
  "studyNumForZntx": "0",
  "testTimeForZnjy": "0",
  "testTimeForZnmx": "0",
  "testTimeForZntx": "0",
  "restudyNumForZnjy": "0",
  "restudyNumForZnmx": "0",
  "restudyNumForZntx": "0",
  "isEndZnjy": "0",
  "isEndZntx": "0",
  "isEndZnmx": "0"
}
```

##### 每日时间信息记录模块

time1 在线时间
time2 有效时间
efficiency 有效占比
seconds 暂不确定；

```json
{
  "time1": "01:24:00",
  "time2": "00:00",
  "efficiency": "0%",
  "seconds": "0"
}
```

##### 当前选择项目模块

```json
{
  "seriesId": "40",
  "seriesName": "初中英语",
  "parentSeriesId": "1069",
  "parentSeriesName": "人教新目标2024（修订版）",
  "programId": "1851",
  "programName": "七上词汇",
  "programWordNumber": "349",
  "programStudyWordNumber": "18",
  "studyId": "5550047591361828724",
  "unitName": "Starter Unit2"
}
```

##### 单词模块

```json
{
  "words": [
    {
      "id": "56155",
      "spelling": "fiction",
      "syllable": "'fikʃən",
      "meaningZhCn": "n. 小说",
      "exampleEnUs": "She writes science fiction.",
      "exampleZhCn": "她写科幻小说。",
      "unitName": "Unit12"
    }
  ]
}
```

##### 学习记录-查询历史单词模块

根据  
studentId,
seriesId,
programId,
unitName,
wordId,
studyId,
source,
信息，查询历史单词信息；

当前登录用户，
学习 id 为 2945396 的单词的记录信息；

```json
{
  "id": "2945396",
  "spelling": "textbook",
  "syllable": "'tekstbuk",
  "meaningZhCn": "n.教科书；课本",
  "studyPercent": 20,
  "wclass": "word-level-10",
  "studyTimes": "2",
  "studyWrongTimes": "2",
  "isStudy": true,
  "nextTimeStr": "0",
  "nextTime": "0"
}
```

##### 学习记录模块

```json
{
  "studentId": "",
  "seriesId": "",
  "programId": "",
  "wordId": "",
  "unitName": "",
  "status": "",
  "source": "",
  "studyId": "",
  "from": "",
  "spellType": "",
  "isTestWord": ""
}
```

##### 测试模块-生成测试试卷

etcTranslation 英语翻译为中文
cteTranslation 中文翻译为英语
hearingTranslation 听写翻译

```json
{
  "etcTranslation": [
    {
      "spelling": "baggage",
      "meaning": "行李",
      "wordId": "57146",
      "isChecked": false,
      "answers": [
        {
          "spelling": "baggage",
          "meaning": "行李",
          "correct": true,
          "correctWordId": "57146",
          "realWordId": "57146",
          "disable": false
        }
      ]
    }
  ],
  "cteTranslation": [
    {
      "spelling": "saleswoman",
      "meaning": "女推销员；女售货员",
      "wordId": "56887",
      "isChecked": false,
      "answers": [
        {
          "spelling": "saleswoman",
          "meaning": "女推销员；女售货员",
          "correct": true,
          "correctWordId": "56887",
          "realWordId": "56887",
          "disable": false
        }
      ]
    }
  ],
  "hearingTranslation": [
    {
      "spelling": "as a matter of fact",
      "meaning": "事实上；其实",
      "wordId": "57340",
      "isChecked": false,
      "answers": [
        {
          "spelling": "as a matter of fact",
          "meaning": "事实上；其实",
          "correct": true,
          "correctWordId": "57340",
          "realWordId": "57340",
          "disable": false
        }
      ]
    }
  ],
  "words": null,
  "title": "学前测试",
  "type": "1",
  "second": "3000",
  "totalQestionNum": "30"
}
```

##### 测试模块-保存测试记录

```json
{
  "seriesId": "",
  "programId": "",
  "timeConsuming": "",
  "socre": "",
  "qnumber": "",
  "remark": "",
  "type": "",
  "studyId": "",
  "userId": "",
  "unitId": "",
  "wrongWordIds": "",
  "rightWordIds": "",
  "unchooseWordIds": ""
}
```

在查询的时候，多出了下面字段：

```json
{
  "status": "1",
  "studentId": "102474",
  "createUser": "102474",
  "createTime": "2025-05-21 21:37:13",
  "updateTime": "2025-05-21 21:37:13",
  "updateUser": "102474",
  "studyId": null
}
```

### 建库

根据您提供的丰富的API数据结构信息，我将为您设计一个合理的MySQL数据库模式。该模式既能完整涵盖现有数据需求，又经过了合理的规范化和优化，以确保数据一致性、扩展性和查询效率。

---

#### 1. 数据库设计思路

- **规范化设计**：将不同实体拆分成多张表，减少数据冗余。
- **字段类型合理选择**：使用合适的数据类型（如日期时间、整数、字符串等），避免使用过大或不适合的类型。
- **索引设计**：关键字段设索引以提高查询效率。
- **外键约束**：保证数据的完整性。
- **扩展性**：结构灵活，方便未来功能拓展。
- **注释设计**：方便维护与理解。

---

#### 2. 数据库表设计与说明

| 表名                    | 说明                       |
| ----------------------- | -------------------------- |
| users                   | 用户基本信息               |
| user_login_info         | 用户登录验证信息           |
| enterprises             | 企业信息                   |
| organizations           | 组织机构信息               |
| semester                | 学期相关信息               |
| series                  | 系列信息（如小学、初中等） |
| programs                | 教材/课程信息              |
| units                   | 单元信息                   |
| user_current_units      | 用户当前选择的单元信息     |
| unit_test_records       | 单元对应的测试记录         |
| unit_study_stats        | 单元学习统计信息           |
| daily_time_records      | 每日时间信息               |
| words                   | 单词信息                   |
| user_study_records      | 学习记录                   |
| user_study_word_history | 历史单词学习记录           |
| tests                   | 测试试卷信息               |
| test_records            | 测试结果保存               |

---

#### 3. 详细表结构设计与字段解释

##### 3.1 users 表 — 用户信息

```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY COMMENT '用户ID',
    username VARCHAR(64) NOT NULL UNIQUE COMMENT '用户名',
    fullname VARCHAR(64) COMMENT '姓名',
    gender TINYINT NULL COMMENT '性别，0-未知，1-男，2-女',
    mobile VARCHAR(20) COMMENT '手机号',
    school_name VARCHAR(128) COMMENT '学校名称',
    grade VARCHAR(32) COMMENT '年级',
    wechat_id VARCHAR(64) COMMENT '微信ID',
    qq VARCHAR(64) COMMENT 'QQ号',
    last_score INT DEFAULT 0 COMMENT '最后成绩',
    expire_time DATETIME COMMENT '账号过期时间',
    login_time DATETIME COMMENT '最近登录时间',
    email VARCHAR(128) COMMENT '电子邮箱',
    grades VARCHAR(255) COMMENT '关联年级列表，JSON格式',
    extend JSON COMMENT '扩展字段，JSON格式',
    student_type TINYINT COMMENT '学生类型，1=学生，2=其他',
    first_login_time DATETIME COMMENT '首次登录时间',
    teacher_name VARCHAR(64) COMMENT '教师姓名',
    teacher_mobile VARCHAR(20) COMMENT '教师手机号',
    class_name VARCHAR(64) COMMENT '班级名称',
    status TINYINT DEFAULT 1 COMMENT '状态，1=正常，0=禁用',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';
```

说明：

- `grades`存储类似`[30,40,50,60,70,251]`的JSON数组。
- `extend`存储如`{"ZNJY_TESTING_CONDIG":3000,...}`的JSON，方便后续扩展。

---

##### 3.2 user_login_info 表 — 登录验证信息

```sql
CREATE TABLE user_login_info (
    jId VARCHAR(128) PRIMARY KEY COMMENT '登录ID或Token',
    data TEXT COMMENT '加密或序列化的登录数据',
    `key` VARCHAR(256) COMMENT '加密Key',
    user_id BIGINT COMMENT '关联用户ID',
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
    CONSTRAINT fk_login_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户登录验证信息';
```

---

##### 3.3 enterprises 表 — 企业信息

```sql
CREATE TABLE enterprises (
    id BIGINT PRIMARY KEY COMMENT '企业ID',
    name VARCHAR(128) NOT NULL COMMENT '企业名称',
    status TINYINT DEFAULT 1 COMMENT '状态',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='企业信息表';
```

---

##### 3.4 organizations 表 — 组织机构信息

```sql
CREATE TABLE organizations (
    id BIGINT PRIMARY KEY COMMENT '组织机构ID',
    enterprise_id BIGINT NOT NULL COMMENT '所属企业ID',
    name VARCHAR(128) NOT NULL COMMENT '组织机构名称',
    code VARCHAR(64) COMMENT '机构代码',
    parent_id BIGINT DEFAULT NULL COMMENT '上级组织ID',
    status TINYINT DEFAULT 1 COMMENT '状态',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_org_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id),
    CONSTRAINT fk_org_parent FOREIGN KEY (parent_id) REFERENCES organizations(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='组织机构信息表';
```

---

##### 3.5.0 学期表：小学、初中、高中；

```sql
CREATE TABLE `semester` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `disp_order` INT NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `name_en_us` VARCHAR(100) NOT NULL COMMENT '英文名称',
  `name_zh_cn` VARCHAR(100) NOT NULL COMMENT '中文名称（简体）',
  `name_zh_big` VARCHAR(100) NOT NULL COMMENT '中文名称（繁体）',
  `parent_id` BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '父级ID，0表示无父级',
  `type` TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '类型，1表示学期',
  `show_free` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '是否免费，1免费',
  `content` TEXT NULL COMMENT '内容描述',
  `create_user` BIGINT UNSIGNED NOT NULL COMMENT '创建用户ID',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_user` BIGINT UNSIGNED NOT NULL COMMENT '更新用户ID',
  `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '状态，1启用',
  `picture` VARCHAR(255) NULL COMMENT '图片路径或URL',
  PRIMARY KEY (`id`),
  INDEX `idx_parent_id` (`parent_id`),
  INDEX `idx_status_showfree` (`status`, `show_free`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='学期信息表';

```

---

##### 3.5 series 表 — 系列信息

```sql
CREATE TABLE series (
    id BIGINT PRIMARY KEY COMMENT '系列ID',
    disp_order INT NOT NULL COMMENT '显示顺序',
    name_en_us VARCHAR(128) COMMENT '英文名称',
    name_zh_cn VARCHAR(128) COMMENT '简体中文名',
    name_zh_big VARCHAR(128) COMMENT '繁体中文名',
    parent_id BIGINT DEFAULT 0 COMMENT '父级ID，0表示无父级',
    type TINYINT COMMENT '系列类型',
    show_free TINYINT DEFAULT 0 COMMENT '是否免费展示',
    content TEXT COMMENT '内容描述',
    create_user BIGINT COMMENT '创建人ID',
    create_time DATETIME COMMENT '创建时间',
    update_time DATETIME COMMENT '更新时间',
    update_user BIGINT COMMENT '更新人ID',
    status TINYINT DEFAULT 1 COMMENT '状态',
    picture VARCHAR(255) COMMENT '图片链接或路径',
    CONSTRAINT fk_series_parent FOREIGN KEY (parent_id) REFERENCES semester(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系列信息表';
```

---

### 3.6 programs 表 — 教材信息

```sql
CREATE TABLE programs (
    id BIGINT PRIMARY KEY COMMENT '教材ID',
    series_id BIGINT NOT NULL COMMENT '所属系列ID',
    name VARCHAR(128) NOT NULL COMMENT '教材名称',
    total_words INT DEFAULT 0 COMMENT '总单词数',
    exp_language VARCHAR(64) COMMENT '语言，如Simplified-Chinese',
    name_en_us VARCHAR(128) COMMENT '教材英文名',
    name_zh_cn VARCHAR(128) COMMENT '教材简体中文名',
    name_zh_big VARCHAR(128) COMMENT '教材繁体中文名',
    disp_order INT COMMENT '显示顺序',
    remark TEXT COMMENT '备注',
    type TINYINT COMMENT '类别',
    create_user BIGINT COMMENT '创建人',
    create_time DATETIME COMMENT '创建时间',
    update_time DATETIME COMMENT '更新时间',
    update_user BIGINT COMMENT '更新人',
    status TINYINT DEFAULT 1 COMMENT '状态',
    study_number INT DEFAULT 0 COMMENT '学习人数',
    percent FLOAT DEFAULT 0 COMMENT '完成百分比',
    CONSTRAINT fk_program_series FOREIGN KEY (series_id) REFERENCES series(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教材信息表';
```

---

### 3.7 units 表 — 单元信息

```sql
CREATE TABLE units (
    id BIGINT PRIMARY KEY COMMENT '单元ID',
    series_id BIGINT NOT NULL COMMENT '系列ID',
    program_id BIGINT NOT NULL COMMENT '教材ID',
    program_name VARCHAR(128) COMMENT '教材名称冗余',
    name VARCHAR(128) COMMENT '单元名',
    name_en_us VARCHAR(128) COMMENT '英文名称',
    name_zh_cn VARCHAR(128) COMMENT '简体中文名',
    name_zh_big VARCHAR(128) COMMENT '繁体中文名',
    unit_index INT COMMENT '单元排序索引',
    create_user BIGINT COMMENT '创建用户',
    create_time DATETIME COMMENT '创建时间',
    update_time DATETIME COMMENT '更新时间',
    update_user BIGINT COMMENT '更新用户',
    status TINYINT DEFAULT 1 COMMENT '状态',
    total_num INT DEFAULT 0 COMMENT '总单词数量',
    CONSTRAINT fk_units_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_units_program FOREIGN KEY (program_id) REFERENCES programs(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单元信息表';
```

---

### 3.8 user_current_units 表 — 用户当前选择单元

```sql
CREATE TABLE user_current_units (
    user_id BIGINT NOT NULL COMMENT '用户ID',
    username VARCHAR(64) COMMENT '用户名',
    series_id BIGINT COMMENT '当前系列ID',
    program_id BIGINT COMMENT '当前教材ID',
    word_id BIGINT COMMENT '当前单词ID',
    word_idx INT COMMENT '当前单词索引',
    group_id VARCHAR(64) COMMENT '分组ID',
    fortify VARCHAR(64) COMMENT '加固标识',
    unit_name VARCHAR(128) COMMENT '单元名称',
    source VARCHAR(64) COMMENT '来源',
    errors INT DEFAULT 0 COMMENT '错误次数',
    rights INT DEFAULT 0 COMMENT '正确次数',
    end TINYINT DEFAULT 0 COMMENT '是否结束',
    error_word_info TEXT COMMENT '错误单词信息',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id),
    CONSTRAINT fk_current_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户当前选择单元信息表';
```

---

### 3.9 unit_test_records 表 — 单元测试记录

```sql
CREATE TABLE unit_test_records (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '测试记录ID',
    unit_id BIGINT NOT NULL COMMENT '单元ID',
    name VARCHAR(128) COMMENT '单元名称',
    score INT DEFAULT NULL COMMENT '闯关分数',
    time_spent INT DEFAULT NULL COMMENT '闯关时间，单位秒',
    is_end TINYINT DEFAULT 0 COMMENT '是否完成，0未完成1完成',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_test_unit FOREIGN KEY (unit_id) REFERENCES units(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单元测试记录表';
```

---

### 3.10 unit_study_stats 表 — 单元学习统计

```sql
CREATE TABLE unit_study_stats (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '统计记录ID',
    unit_id BIGINT NOT NULL COMMENT '单元ID',
    unit_total INT DEFAULT 0 COMMENT '单元总数',
    study_num_znjy INT DEFAULT 0 COMMENT '智能记忆学习数',
    study_num_znmx INT DEFAULT 0 COMMENT '智能默写学习数',
    study_num_zntx INT DEFAULT 0 COMMENT '智能听写学习数',
    test_time_znjy INT DEFAULT 0 COMMENT '智能记忆测试次数',
    test_time_znmx INT DEFAULT 0 COMMENT '智能默写测试次数',
    test_time_zntx INT DEFAULT 0 COMMENT '智能听写测试次数',
    restudy_num_znjy INT DEFAULT 0 COMMENT '智能记忆复习数',
    restudy_num_znmx INT DEFAULT 0 COMMENT '智能默写复习数',
    restudy_num_zntx INT DEFAULT 0 COMMENT '智能听写复习数',
    is_end_znjy TINYINT DEFAULT 0 COMMENT '智能记忆是否结束',
    is_end_znmx TINYINT DEFAULT 0 COMMENT '智能默写是否结束',
    is_end_zntx TINYINT DEFAULT 0 COMMENT '智能听写是否结束',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_study_stats_unit FOREIGN KEY (unit_id) REFERENCES units(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单元学习统计表';
```

---

### 3.11 daily_time_records 表 — 每日时间记录

```sql
CREATE TABLE daily_time_records (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '时间记录ID',
    user_id BIGINT NOT NULL COMMENT '用户ID',
    record_date DATE NOT NULL COMMENT '日期',
    time1 TIME COMMENT '在线时间',
    time2 TIME COMMENT '有效时间',
    efficiency VARCHAR(16) COMMENT '有效占比',
    seconds INT DEFAULT 0 COMMENT '时间秒数',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_daily_time_user FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE KEY unique_user_date (user_id, record_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户每日时间记录表';
```

---

### 3.12 words 表 — 单词信息

```sql
CREATE TABLE words (
    id BIGINT PRIMARY KEY COMMENT '单词ID',
    spelling VARCHAR(128) NOT NULL COMMENT '拼写',
    syllable VARCHAR(64) COMMENT '音节',
    meaning_zh_cn TEXT COMMENT '中文释义',
    example_en_us TEXT COMMENT '英文例句',
    example_zh_cn TEXT COMMENT '中文例句',
    unit_name VARCHAR(128) COMMENT '所属单元',
    program_id BIGINT COMMENT '所属教材ID',
    series_id BIGINT COMMENT '所属系列ID',
    status TINYINT DEFAULT 1 COMMENT '状态',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_words_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_words_series FOREIGN KEY (series_id) REFERENCES series(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单词信息表';
```

---

### 3.13 user_study_records 表 — 学习记录

```sql
CREATE TABLE user_study_records (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '学习记录ID',
    student_id BIGINT NOT NULL COMMENT '学生ID',
    series_id BIGINT NOT NULL COMMENT '系列ID',
    program_id BIGINT NOT NULL COMMENT '教材ID',
    word_id BIGINT NOT NULL COMMENT '单词ID',
    unit_name VARCHAR(128) COMMENT '单元名',
    status TINYINT DEFAULT 0 COMMENT '状态',
    source VARCHAR(64) COMMENT '来源',
    study_id BIGINT COMMENT '学习ID',
    `from` VARCHAR(64) COMMENT '来源字段',
    spell_type TINYINT COMMENT '拼写类型',
    is_test_word TINYINT COMMENT '是否测试单词',
    create_user BIGINT COMMENT '创建者',
    create_time DATETIME COMMENT '创建时间',
    update_time DATETIME COMMENT '更新时间',
    update_user BIGINT COMMENT '更新者',
    CONSTRAINT fk_study_user FOREIGN KEY (student_id) REFERENCES users(id),
    CONSTRAINT fk_study_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_study_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_study_word FOREIGN KEY (word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户学习记录表';
```

---

### 3.14 user_study_word_history 表 — 历史单词学习记录

```sql
CREATE TABLE user_study_word_history (
    id BIGINT PRIMARY KEY COMMENT '历史学习ID',
    student_id BIGINT NOT NULL COMMENT '学生ID',
    series_id BIGINT NOT NULL COMMENT '系列ID',
    program_id BIGINT NOT NULL COMMENT '教材ID',
    unit_name VARCHAR(128) COMMENT '单元名',
    word_id BIGINT NOT NULL COMMENT '单词ID',
    study_id BIGINT COMMENT '学习ID',
    source VARCHAR(64) COMMENT '来源',
    spelling VARCHAR(128) COMMENT '拼写',
    syllable VARCHAR(64) COMMENT '音节',
    meaning_zh_cn TEXT COMMENT '中文释义',
    study_percent INT DEFAULT 0 COMMENT '学习进度百分比',
    wclass VARCHAR(64) COMMENT '词汇等级',
    study_times INT DEFAULT 0 COMMENT '学习次数',
    study_wrong_times INT DEFAULT 0 COMMENT '错误次数',
    is_study BOOLEAN DEFAULT false COMMENT '是否学习过',
    next_time DATETIME COMMENT '下次学习时间',
    create_time DATETIME COMMENT '创建时间',
    update_time DATETIME COMMENT '更新时间',
    CONSTRAINT fk_hist_user FOREIGN KEY (student_id) REFERENCES users(id),
    CONSTRAINT fk_hist_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_hist_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_hist_word FOREIGN KEY (word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='历史单词学习记录表';
```

---

### 3.15 tests 表 — 测试试卷信息

```sql
CREATE TABLE tests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '测试ID',
    title VARCHAR(128) NOT NULL COMMENT '测试标题',
    type TINYINT COMMENT '测试类型',
    second INT COMMENT '测试时长(秒)',
    total_question_num INT COMMENT '题目总数',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试试卷信息表';
```

---

### 3.16 test_questions 表 — 测试题目（关联tests）

```sql
CREATE TABLE test_questions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '题目ID',
    test_id BIGINT NOT NULL COMMENT '测试ID',
    word_id BIGINT NOT NULL COMMENT '单词ID',
    question_type ENUM('etcTranslation','cteTranslation','hearingTranslation') NOT NULL COMMENT '题目类型',
    is_checked BOOLEAN DEFAULT FALSE COMMENT '是否选中',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_question_test FOREIGN KEY (test_id) REFERENCES tests(id),
    CONSTRAINT fk_question_word FOREIGN KEY (word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试题目表';
```

---

### 3.17 test_answers 表 — 测试答案选项

```sql
CREATE TABLE test_answers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '答案ID',
    question_id BIGINT NOT NULL COMMENT '题目ID',
    spelling VARCHAR(128) NOT NULL COMMENT '拼写',
    meaning TEXT COMMENT '释义',
    correct BOOLEAN DEFAULT FALSE COMMENT '是否正确答案',
    correct_word_id BIGINT COMMENT '正确单词ID',
    real_word_id BIGINT COMMENT '真实单词ID',
    disabled BOOLEAN DEFAULT FALSE COMMENT '是否禁用',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_answer_question FOREIGN KEY (question_id) REFERENCES test_questions(id),
    CONSTRAINT fk_answer_correct_word FOREIGN KEY (correct_word_id) REFERENCES words(id),
    CONSTRAINT fk_answer_real_word FOREIGN KEY (real_word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试答案选项表';
```

---

### 3.18 test_records 表 — 测试结果记录

```sql
CREATE TABLE test_records (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '测试记录ID',
    series_id BIGINT COMMENT '系列ID',
    program_id BIGINT COMMENT '教材ID',
    time_consuming INT COMMENT '耗时（秒）',
    score INT COMMENT '得分',
    question_number INT COMMENT '题数',
    remark TEXT COMMENT '备注',
    type TINYINT COMMENT '测试类型',
    study_id BIGINT COMMENT '学习ID',
    user_id BIGINT COMMENT '用户ID',
    unit_id BIGINT COMMENT '单元ID',
    wrong_word_ids TEXT COMMENT '错误单词ID列表，逗号分隔',
    right_word_ids TEXT COMMENT '正确单词ID列表，逗号分隔',
    unchoose_word_ids TEXT COMMENT '未选择单词ID列表，逗号分隔',
    status TINYINT DEFAULT 1 COMMENT '状态',
    student_id BIGINT COMMENT '学生ID',
    create_user BIGINT COMMENT '创建者',
    create_time DATETIME COMMENT '创建时间',
    update_time DATETIME COMMENT '更新时间',
    update_user BIGINT COMMENT '更新者',
    CONSTRAINT fk_test_record_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_test_record_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_test_record_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_test_record_unit FOREIGN KEY (unit_id) REFERENCES units(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试结果记录表';
```

---

## 4. 设计优化说明

- **JSON字段使用**：针对flexible字段（如`extend`和`grades`）采用JSON类型，方便存储复杂结构和未来扩展。
- **外键约束**：确保引用完整性，防止孤立数据。
- **索引设计**：对经常查询或过滤字段（如user_id, series_id, program_id等）应建立索引。
- **字段命名规范**：使用统一的下划线命名规则，清晰描述字段含义。
- **数据类型合理分配**：避免使用TEXT存储简单短字符串，避免过度使用VARCHAR。
- **时间字段统一格式**：所有时间使用DATETIME或TIMESTAMP，便于统一处理。
- **状态字段统一使用TINYINT**：方便扩展、查询和维护。

---

## 5. 完整SQL建表语句示例

为篇幅考虑，这里只展示核心表的SQL建表语句，其他表结构请根据上述设计思路类推。

以下示例包含主要的几张表：

```sql
-- 用户表
CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE,
    fullname VARCHAR(64),
    gender TINYINT NULL,
    mobile VARCHAR(20),
    school_name VARCHAR(128),
    grade VARCHAR(32),
    wechat_id VARCHAR(64),
    qq VARCHAR(64),
    last_score INT DEFAULT 0,
    expire_time DATETIME,
    login_time DATETIME,
    email VARCHAR(128),
    grades VARCHAR(255),
    extend JSON,
    student_type TINYINT,
    first_login_time DATETIME,
    teacher_name VARCHAR(64),
    teacher_mobile VARCHAR(20),
    class_name VARCHAR(64),
    status TINYINT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';

-- 系列信息表
CREATE TABLE series (
    id BIGINT PRIMARY KEY,
    disp_order INT NOT NULL,
    name_en_us VARCHAR(128),
    name_zh_cn VARCHAR(128),
    name_zh_big VARCHAR(128),
    parent_id BIGINT DEFAULT 0,
    type TINYINT,
    show_free TINYINT DEFAULT 0,
    content TEXT,
    create_user BIGINT,
    create_time DATETIME,
    update_time DATETIME,
    update_user BIGINT,
    status TINYINT DEFAULT 1,
    picture VARCHAR(255),
    CONSTRAINT fk_series_parent FOREIGN KEY (parent_id) REFERENCES series(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系列信息表';

-- 教材表
CREATE TABLE programs (
    id BIGINT PRIMARY KEY,
    series_id BIGINT NOT NULL,
    name VARCHAR(128) NOT NULL,
    total_words INT DEFAULT 0,
    exp_language VARCHAR(64),
    name_en_us VARCHAR(128),
    name_zh_cn VARCHAR(128),
    name_zh_big VARCHAR(128),
    disp_order INT,
    remark TEXT,
    type TINYINT,
    create_user BIGINT,
    create_time DATETIME,
    update_time DATETIME,
    update_user BIGINT,
    status TINYINT DEFAULT 1,
    study_number INT DEFAULT 0,
    percent FLOAT DEFAULT 0,
    CONSTRAINT fk_program_series FOREIGN KEY (series_id) REFERENCES series(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教材信息表';

-- 单元表
CREATE TABLE units (
    id BIGINT PRIMARY KEY,
    series_id BIGINT NOT NULL,
    program_id BIGINT NOT NULL,
    program_name VARCHAR(128),
    name VARCHAR(128),
    name_en_us VARCHAR(128),
    name_zh_cn VARCHAR(128),
    name_zh_big VARCHAR(128),
    unit_index INT,
    create_user BIGINT,
    create_time DATETIME,
    update_time DATETIME,
    update_user BIGINT,
    status TINYINT DEFAULT 1,
    total_num INT DEFAULT 0,
    CONSTRAINT fk_units_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_units_program FOREIGN KEY (program_id) REFERENCES programs(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单元信息表';

-- 单词表
CREATE TABLE words (
    id BIGINT PRIMARY KEY,
    spelling VARCHAR(128) NOT NULL,
    syllable VARCHAR(64),
    meaning_zh_cn TEXT,
    example_en_us TEXT,
    example_zh_cn TEXT,
    unit_name VARCHAR(128),
    program_id BIGINT,
    series_id BIGINT,
    status TINYINT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_words_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_words_series FOREIGN KEY (series_id) REFERENCES series(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单词信息表';
```

---
