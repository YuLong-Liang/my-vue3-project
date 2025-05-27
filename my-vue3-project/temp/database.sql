use dcyx;

DROP TABLE IF EXISTS test_records;
DROP TABLE IF EXISTS user_study_records;
DROP TABLE IF EXISTS user_study_word_history;
DROP TABLE IF EXISTS daily_time_records;
DROP TABLE IF EXISTS unit_study_stats;
DROP TABLE IF EXISTS unit_test_records;
DROP TABLE IF EXISTS user_current_units;
DROP TABLE IF EXISTS user_extensions;
DROP TABLE IF EXISTS user_login_info;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS organizations;
DROP TABLE IF EXISTS enterprises;


DROP TABLE IF EXISTS test_answers;
DROP TABLE IF EXISTS test_questions;

DROP TABLE IF EXISTS words;
DROP TABLE IF EXISTS units;
DROP TABLE IF EXISTS programs;
DROP TABLE IF EXISTS series;
DROP TABLE IF EXISTS semester;



DROP TABLE IF EXISTS tests;




CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
    username VARCHAR(64) NOT NULL UNIQUE COMMENT '用户名',
    fullname VARCHAR(64) DEFAULT NULL COMMENT '姓名',
    gender TINYINT UNSIGNED  NOT NULL DEFAULT 0 COMMENT '性别,0-未知,1-男,2-女',
    mobile VARCHAR(20) UNIQUE DEFAULT NULL COMMENT '手机号',
    school_name VARCHAR(128) DEFAULT NULL COMMENT '学校名称',
    grade VARCHAR(32) DEFAULT NULL COMMENT '年级',
    wechat_id VARCHAR(64) DEFAULT NULL COMMENT '微信ID',
    qq VARCHAR(64) DEFAULT NULL COMMENT 'QQ号',
    last_score INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '最后成绩',
    expire_time TIMESTAMP DEFAULT NULL COMMENT '账号过期时间',
    login_time TIMESTAMP DEFAULT NULL COMMENT '最近登录时间',
    email VARCHAR(128) UNIQUE DEFAULT NULL COMMENT '电子邮箱',
    grades VARCHAR(128) DEFAULT NULL COMMENT '关联年级列表',
    student_type TINYINT UNSIGNED  NOT NULL DEFAULT 1 COMMENT '学生类型,1=学生,2=其他',
    first_login_time TIMESTAMP DEFAULT NULL COMMENT '首次登录时间',
    teacher_name VARCHAR(64) DEFAULT NULL COMMENT '教师姓名',
    teacher_mobile VARCHAR(20) DEFAULT NULL COMMENT '教师手机号',
    class_name VARCHAR(64) DEFAULT NULL COMMENT '班级名称',
    status TINYINT UNSIGNED  NOT NULL DEFAULT 1 COMMENT '状态,1=正常,0=禁用',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户信息表';

CREATE TABLE IF NOT EXISTS user_extensions (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '扩展配置ID',
    user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
    znjy_testing_config INT NOT NULL DEFAULT 3000 COMMENT '智能记忆测试配置（毫秒）',
    jydycg_testing_config INT NOT NULL DEFAULT 3000 COMMENT '记忆单词测试配置（毫秒）',
    mxdycg_testing_config INT NOT NULL DEFAULT 5000 COMMENT '默写单词测试配置（毫秒）',
    txdycg_testing_config INT NOT NULL DEFAULT 5000 COMMENT '听写单词测试配置（毫秒）',
    spell_type TINYINT UNSIGNED  NOT NULL DEFAULT 2 COMMENT '拼写类型',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_user_extensions_user (user_id),
    CONSTRAINT fk_user_extensions_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户扩展配置信息表';


CREATE TABLE IF NOT EXISTS user_login_info (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '登录ID',
    j_id VARCHAR(128) NOT NULL COMMENT '登录ID或Token',
    data TEXT NOT NULL COMMENT '加密或序列化的登录数据',
    `key` VARCHAR(256) DEFAULT NULL COMMENT '加密Key',
    user_id BIGINT UNSIGNED DEFAULT NULL COMMENT '关联用户ID',
    login_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    CONSTRAINT fk_login_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户登录验证信息表';

CREATE TABLE IF NOT EXISTS enterprises (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '企业ID',
    name VARCHAR(128) NOT NULL COMMENT '企业名称',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT '状态',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='企业信息表';

CREATE TABLE IF NOT EXISTS organizations (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '组织机构ID',
    enterprise_id BIGINT UNSIGNED NOT NULL COMMENT '所属企业ID',
    name VARCHAR(128) NOT NULL COMMENT '组织机构名称',
    code VARCHAR(64) COMMENT '机构代码',
    parent_id BIGINT UNSIGNED DEFAULT NULL COMMENT '上级组织ID',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT '状态',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_org_parent (enterprise_id, parent_id),
    CONSTRAINT fk_org_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id),
    CONSTRAINT fk_org_parent FOREIGN KEY (parent_id) REFERENCES organizations(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='组织机构信息表';

CREATE TABLE IF NOT EXISTS semester (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',
    disp_order INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '显示顺序',
    name_en_us VARCHAR(100) NOT NULL COMMENT '英文名称',
    name_zh_cn VARCHAR(100) NOT NULL COMMENT '中文名称（简体）',
    name_zh_big VARCHAR(100) NOT NULL COMMENT '中文名称（繁体）',
    type TINYINT UNSIGNED  NOT NULL DEFAULT 1 COMMENT '类型，1表示学期',
    show_free TINYINT(1) NOT NULL DEFAULT 1 COMMENT '是否免费，1免费',
    content TEXT DEFAULT NULL COMMENT '内容描述',
    create_user BIGINT UNSIGNED NOT NULL COMMENT '创建用户ID',
    update_user BIGINT UNSIGNED NOT NULL COMMENT '更新用户ID',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    status TINYINT(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '状态，1启用',
    picture VARCHAR(255) DEFAULT NULL COMMENT '图片路径或URL',
    INDEX idx_status_showfree (status, show_free)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='学期信息表';

CREATE TABLE IF NOT EXISTS series (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '系列ID',
    disp_order INT NOT NULL COMMENT '显示顺序',
    name_en_us VARCHAR(128) COMMENT '英文名称',
    name_zh_cn VARCHAR(128) COMMENT '简体中文名',
    name_zh_big VARCHAR(128) COMMENT '繁体中文名',
    parent_id BIGINT UNSIGNED DEFAULT NULL COMMENT '父级ID,0表示无父级',
    type TINYINT UNSIGNED COMMENT '系列类型',
    show_free TINYINT UNSIGNED DEFAULT 0 COMMENT '是否免费展示',
    content TEXT COMMENT '内容描述',
    create_user BIGINT COMMENT '创建人ID',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    update_user BIGINT COMMENT '更新人ID',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT '状态',
    picture VARCHAR(255) COMMENT '图片链接或路径',
    INDEX idx_series_parent (parent_id),
    CONSTRAINT fk_series_parent FOREIGN KEY (parent_id) REFERENCES semester(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系列信息表';

CREATE TABLE IF NOT EXISTS programs (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '教材ID',
    series_id BIGINT UNSIGNED NOT NULL COMMENT '所属系列ID',
    name VARCHAR(128) NOT NULL COMMENT '教材名称',
    total_words INT DEFAULT 0 COMMENT '总单词数',
    exp_language VARCHAR(64) COMMENT '语言,如Simplified-Chinese',
    name_en_us VARCHAR(128) COMMENT '教材英文名',
    name_zh_cn VARCHAR(128) COMMENT '教材简体中文名',
    name_zh_big VARCHAR(128) COMMENT '教材繁体中文名',
    disp_order INT COMMENT '显示顺序',
    remark TEXT COMMENT '备注',
    type TINYINT UNSIGNED COMMENT '类别',
    create_user BIGINT COMMENT '创建人',
    update_user BIGINT COMMENT '更新人',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT '状态',
    study_number INT DEFAULT 0 COMMENT '学习人数',
    percent FLOAT DEFAULT 0 COMMENT '完成百分比',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_programs_series (series_id),
    CONSTRAINT fk_program_series FOREIGN KEY (series_id) REFERENCES series(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教材信息表';

CREATE TABLE IF NOT EXISTS units (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '单元ID',
    series_id BIGINT UNSIGNED NOT NULL COMMENT '系列ID',
    program_id BIGINT UNSIGNED NOT NULL COMMENT '教材ID',
    program_name VARCHAR(128) COMMENT '教材名称冗余',
    name VARCHAR(128) COMMENT '单元名',
    name_en_us VARCHAR(128) COMMENT '英文名称',
    name_zh_cn VARCHAR(128) COMMENT '简体中文名',
    name_zh_big VARCHAR(128) COMMENT '繁体中文名',
    unit_index INT COMMENT '单元排序索引',
    create_user BIGINT COMMENT '创建用户',
    create_time TIMESTAMP COMMENT '创建时间',
    update_time TIMESTAMP COMMENT '更新时间',
    update_user BIGINT COMMENT '更新用户',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT '状态',
    total_num INT DEFAULT 0 COMMENT '总单词数量',
    INDEX idx_units_series_program (series_id, program_id),
    CONSTRAINT fk_units_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_units_program FOREIGN KEY (program_id) REFERENCES programs(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单元信息表';

CREATE TABLE IF NOT EXISTS user_current_units (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '用户匹配单元的ID',
    user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
    username VARCHAR(64) COMMENT '用户名',
    series_id BIGINT UNSIGNED COMMENT '当前系列ID',
    program_id BIGINT COMMENT '当前教材ID',
    word_id BIGINT UNSIGNED COMMENT '当前单词ID',
    word_idx INT COMMENT '当前单词索引',
    group_id VARCHAR(64) COMMENT '分组ID',
    fortify VARCHAR(64) COMMENT '加固标识',
    unit_id BIGINT UNSIGNED COMMENT '当前单元ID',
    unit_name VARCHAR(128) COMMENT '单元名称',
    source VARCHAR(64) COMMENT '来源',
    errors INT DEFAULT 0 COMMENT '错误次数',
    rights INT DEFAULT 0 COMMENT '正确次数',
    is_end TINYINT UNSIGNED DEFAULT 0 COMMENT '是否结束',
    error_word_info TEXT COMMENT '错误单词信息',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_current_unit_user (user_id, unit_id),
    CONSTRAINT fk_current_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_current_unit FOREIGN KEY (unit_id) REFERENCES units(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户当前选择单元信息表';


CREATE TABLE IF NOT EXISTS unit_test_records (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '测试记录ID',
    user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
    unit_id BIGINT UNSIGNED NOT NULL COMMENT '单元ID',
    name VARCHAR(128) COMMENT '单元名称',
    score INT DEFAULT NULL COMMENT '闯关分数',
    time_spent INT DEFAULT NULL COMMENT '闯关时间,单位秒',
    is_end TINYINT UNSIGNED DEFAULT 0 COMMENT '是否完成,0未完成1完成',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_unit_test_records_user_unit (user_id, unit_id),
    CONSTRAINT fk_test_unit FOREIGN KEY (unit_id) REFERENCES units(id),
    CONSTRAINT fk_test_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单元测试记录表';


CREATE TABLE IF NOT EXISTS  unit_study_stats (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '统计记录ID',
    user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
    unit_id BIGINT UNSIGNED NOT NULL COMMENT '单元ID',
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
    is_end_znjy TINYINT UNSIGNED DEFAULT 0 COMMENT '智能记忆是否结束',
    is_end_znmx TINYINT UNSIGNED DEFAULT 0 COMMENT '智能默写是否结束',
    is_end_zntx TINYINT UNSIGNED DEFAULT 0 COMMENT '智能听写是否结束',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_unit_study_stats_user_unit (user_id, unit_id),
    CONSTRAINT fk_study_stats_unit FOREIGN KEY (unit_id) REFERENCES units(id),
    CONSTRAINT fk_study_stats_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单元学习统计表';


CREATE TABLE IF NOT EXISTS daily_time_records (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '时间记录ID',
    user_id BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
    record_date DATE NOT NULL COMMENT '日期',
    time1 TIME COMMENT '在线时间',
    time2 TIME COMMENT '有效时间',
    efficiency VARCHAR(16) COMMENT '有效占比',
    seconds INT DEFAULT 0 COMMENT '时间秒数',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_daily_time_user_date (user_id, record_date),
    CONSTRAINT fk_daily_time_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户每日时间记录表';


CREATE TABLE IF NOT EXISTS words (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '单词ID',
    spelling VARCHAR(128) NOT NULL COMMENT '拼写',
    syllable VARCHAR(64) COMMENT '音节',
    meaning_zh_cn TEXT COMMENT '中文释义',
    example_en_us TEXT COMMENT '英文例句',
    example_zh_cn TEXT COMMENT '中文例句',
    unit_name VARCHAR(128) COMMENT '所属单元',
    program_id BIGINT UNSIGNED COMMENT '所属教材ID',
    series_id BIGINT UNSIGNED COMMENT '所属系列ID',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT '状态',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_words_program_series (program_id, series_id),
    CONSTRAINT fk_words_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_words_series FOREIGN KEY (series_id) REFERENCES series(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='单词信息表';


CREATE TABLE IF NOT EXISTS user_study_records (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '学习记录ID',
    student_id BIGINT UNSIGNED NOT NULL COMMENT '学生ID',
    series_id BIGINT UNSIGNED NOT NULL COMMENT '系列ID',
    program_id BIGINT UNSIGNED NOT NULL COMMENT '教材ID',
    word_id BIGINT UNSIGNED NOT NULL COMMENT '单词ID',
    unit_name VARCHAR(128) COMMENT '单元名',
    status TINYINT UNSIGNED DEFAULT 0 COMMENT '状态',
    source VARCHAR(64) COMMENT '来源',
    study_id BIGINT UNSIGNED COMMENT '学习ID',
    `from` VARCHAR(64) COMMENT '来源字段',
    spell_type TINYINT UNSIGNED COMMENT '拼写类型',
    is_test_word TINYINT UNSIGNED COMMENT '是否测试单词',
    create_user BIGINT COMMENT '创建者',
    update_user BIGINT COMMENT '更新者',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_user_study_records_user_series_program_word (student_id, series_id, program_id, word_id),
    CONSTRAINT fk_study_user FOREIGN KEY (student_id) REFERENCES users(id),
    CONSTRAINT fk_study_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_study_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_study_word FOREIGN KEY (word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户学习记录表';


CREATE TABLE IF NOT EXISTS user_study_word_history (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '历史学习ID',
    student_id BIGINT UNSIGNED NOT NULL COMMENT '学生ID',
    series_id BIGINT UNSIGNED NOT NULL COMMENT '系列ID',
    program_id BIGINT UNSIGNED NOT NULL COMMENT '教材ID',
    unit_name VARCHAR(128) COMMENT '单元名',
    word_id BIGINT UNSIGNED NOT NULL COMMENT '单词ID',
    study_id BIGINT UNSIGNED COMMENT '学习ID',
    source VARCHAR(64) COMMENT '来源',
    spelling VARCHAR(128) COMMENT '拼写',
    syllable VARCHAR(64) COMMENT '音节',
    meaning_zh_cn TEXT COMMENT '中文释义',
    study_percent INT DEFAULT 0 COMMENT '学习进度百分比',
    wclass VARCHAR(64) COMMENT '词汇等级',
    study_times INT DEFAULT 0 COMMENT '学习次数',
    study_wrong_times INT DEFAULT 0 COMMENT '错误次数',
    is_study BOOLEAN DEFAULT false COMMENT '是否学习过',
    next_time TIMESTAMP COMMENT '下次学习时间',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_user_study_word_history_user_series_program_word (student_id, series_id, program_id, word_id),
    CONSTRAINT fk_hist_user FOREIGN KEY (student_id) REFERENCES users(id),
    CONSTRAINT fk_hist_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_hist_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_hist_word FOREIGN KEY (word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='历史单词学习记录表';


CREATE TABLE IF NOT EXISTS tests (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '测试ID',
    title VARCHAR(128) NOT NULL COMMENT '测试标题',
    type TINYINT UNSIGNED COMMENT '测试类型',
    second INT COMMENT '测试时长(秒)',
    total_question_num INT COMMENT '题目总数',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_tests_type (type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试试卷信息表';


CREATE TABLE IF NOT EXISTS test_questions (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '题目ID',
    test_id BIGINT UNSIGNED NOT NULL COMMENT '测试ID',
    word_id BIGINT UNSIGNED NOT NULL COMMENT '单词ID',
    question_type ENUM('etcTranslation','cteTranslation','hearingTranslation') NOT NULL COMMENT '题目类型',
    is_checked BOOLEAN DEFAULT FALSE COMMENT '是否选中',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_test_questions_test_word (test_id, word_id),
    CONSTRAINT fk_question_test FOREIGN KEY (test_id) REFERENCES tests(id),
    CONSTRAINT fk_question_word FOREIGN KEY (word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试题目表';


CREATE TABLE IF NOT EXISTS test_answers (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '答案ID',
    question_id BIGINT UNSIGNED NOT NULL COMMENT '题目ID',
    spelling VARCHAR(128) NOT NULL COMMENT '拼写',
    meaning TEXT COMMENT '释义',
    correct BOOLEAN DEFAULT FALSE COMMENT '是否正确答案',
    correct_word_id BIGINT UNSIGNED COMMENT '正确单词ID',
    real_word_id BIGINT UNSIGNED COMMENT '真实单词ID',
    disabled BOOLEAN DEFAULT FALSE COMMENT '是否禁用',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_test_answers_question (question_id),
    CONSTRAINT fk_answer_question FOREIGN KEY (question_id) REFERENCES test_questions(id),
    CONSTRAINT fk_answer_correct_word FOREIGN KEY (correct_word_id) REFERENCES words(id),
    CONSTRAINT fk_answer_real_word FOREIGN KEY (real_word_id) REFERENCES words(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试答案选项表';

CREATE TABLE IF NOT EXISTS  test_records (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT COMMENT '测试记录ID',
    series_id BIGINT UNSIGNED COMMENT '系列ID',
    program_id BIGINT UNSIGNED COMMENT '教材ID',
    time_consuming INT COMMENT '耗时（秒）',
    score INT COMMENT '得分',
    question_number INT COMMENT '题数',
    remark TEXT COMMENT '备注',
    type TINYINT UNSIGNED COMMENT '测试类型',
    study_id BIGINT UNSIGNED COMMENT '学习ID',
    user_id BIGINT UNSIGNED COMMENT '用户ID',
    unit_id BIGINT UNSIGNED COMMENT '单元ID',
    wrong_word_ids TEXT COMMENT '错误单词ID列表,逗号分隔',
    right_word_ids TEXT COMMENT '正确单词ID列表,逗号分隔',
    unchoose_word_ids TEXT COMMENT '未选择单词ID列表,逗号分隔',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT '状态',
    student_id BIGINT UNSIGNED COMMENT '学生ID',
    create_user BIGINT UNSIGNED COMMENT '创建者',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    update_user BIGINT UNSIGNED COMMENT '更新者',
    INDEX idx_test_records_series_program_user_unit (series_id, program_id, user_id, unit_id),
    CONSTRAINT fk_test_record_series FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT fk_test_record_program FOREIGN KEY (program_id) REFERENCES programs(id),
    CONSTRAINT fk_test_record_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_test_record_unit FOREIGN KEY (unit_id) REFERENCES units(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='测试结果记录表';

-- 插入测试数据

INSERT INTO users (username, fullname, gender, mobile, school_name, grade, wechat_id, qq, last_score, expire_time, login_time, email, grades, student_type, first_login_time, teacher_name, teacher_mobile, class_name, status)
VALUES
('alice', 'Alice Zhang', 2, '13800000001', '北京中学', '高一', 'alice_wx', '123456', 95, '2025-12-31 23:59:59', NOW(), 'alice@example.com', '高一,高二', 1, NOW(), '张老师', '13900000001', '1班', 1),
('bob', 'Bob Li', 1, '13800000002', '上海中学', '高二', 'bob_wx', '654321', 88, '2024-12-31 23:59:59', NOW(), 'bob@example.com', '高二', 1, NOW(), '李老师', '13900000002', '2班', 1);


INSERT INTO user_extensions (user_id, znjy_testing_config, jydycg_testing_config, mxdycg_testing_config, txdycg_testing_config, spell_type)
VALUES
(1, 3000, 3000, 5000, 5000, 2),
(2, 3500, 3200, 4800, 5100, 1);


INSERT INTO enterprises (name, status)
VALUES
('ABC教育集团', 1),
('XYZ科技有限公司', 1);


INSERT INTO organizations (enterprise_id, name, code, parent_id, status)
VALUES
(1, '北京分公司', 'BJ001', NULL, 1),
(1, '上海分公司', 'SH001', NULL, 1),
(2, '研发部', 'RD001', NULL, 1),
(2, '市场部', 'SC001', NULL, 1);


INSERT INTO semester (disp_order, name_en_us, name_zh_cn, name_zh_big, type, show_free, content, create_user, update_user, status, picture)
VALUES
(1, 'Fall 2023', '2023年秋季学期', '2023年秋季學期', 1, 1, '秋季学期描述', 1, 1, 1, NULL),
(2, 'Spring 2024', '2024年春季学期', '2024年春季學期', 1, 1, '春季学期描述', 1, 1, 1, NULL);


INSERT INTO series (disp_order, name_en_us, name_zh_cn, name_zh_big, parent_id, type, show_free, content, create_user, update_user, status, picture)
VALUES
(1, 'English Basics', '英语基础', '英語基礎', 1, 1, 1, '基础英语学习系列', 1, 1, 1, NULL),
(2, 'Advanced English', '高级英语', '高級英語', 1, 2, 0, '高级英语学习系列', 1, 1, 1, NULL);


INSERT INTO programs (
    series_id, name, total_words, exp_language, name_en_us, name_zh_cn, name_zh_big,
    disp_order, remark, type, create_user, update_user, status, study_number, percent
) VALUES
(
    1, 
    'English 101', 
    500, 
    'Simplified-Chinese', 
    'English 101', 
    '英语101', 
    '英語101',
    1,
    '基础英语教材',
    1,
    1,
    1,
    1,
    100,
    75.5
),
(
    2,
    'Advanced English',
    800,
    'Simplified-Chinese',
    'Advanced English',
    '高级英语',
    '高級英語',
    2,
    '高级英语教材',
    2,
    2,
    1,
    1,
    50,
    60.0
);


INSERT INTO units (series_id, program_id, program_name, name, name_en_us, name_zh_cn, name_zh_big, unit_index, create_user, update_user, status, total_num)
VALUES
(1, 1, 'English 101', 'Unit 1', 'Unit 1', '第一单元', '第一單元', 1, 1, 1, 1, 50),
(1, 1, 'English 101', 'Unit 2', 'Unit 2', '第二单元', '第二單元', 2, 1, 1, 1, 70);


INSERT INTO words (spelling, syllable, meaning_zh_cn, example_en_us, example_zh_cn, unit_name, program_id, series_id, status)
VALUES
('apple', 'ap-ple', '苹果', 'I like to eat an apple.', '我喜欢吃苹果。', 'Unit 1', 1, 1, 1),
('banana', 'ba-na-na', '香蕉', 'Bananas are yellow.', '香蕉是黄色的。', 'Unit 1', 1, 1, 1);
