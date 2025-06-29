### 总体需求

实现下面需求：
1、将dashboard 页面，改写为系统主页界面；
2、dashboard 外面不用嵌套 layout 页面；

1.1 系统主页模块

描述
系统主页为用户提供学习总体信息展示，包括当前学期、所学课程及用户个人信息，支持跳转至学习各模块。

输入
用户登录信息
用户选择的当前学期与课程数据请求

处理逻辑
调用获取当前学期信息
调用获取当前课程学习状态
计算记忆时长、已学单词数量及学习速度
展示用户个人信息（用户名、在线时长等）
提供顶部栏功能跳转响应

输出
学期列表及选中学期
当前课程卡片信息（记忆时长、单词数量、速度）
用户信息展示数据

异常处理
学期信息获取失败时提示错误，建议重试
若当前课程数据缺失，显示“暂无课程”提示

用户界面
顶部栏显示学期信息和用户姓名，右侧有退出按钮
课程卡片区域展示当前课程学习关键数据
快捷入口按钮指向记忆追踪、测试中心、我的页面等

数据接口
使用该接口查询所有的阶段信息 '/api/series/getSeriesByUser'；
登录接口 '/api/user/student/studentH5Login',成功，返回主页需要的基本信息；
调用获取学期信息使用该接口：'/api/series/getSeriesByUser',
获取当前课程学习状态使用该接口：url: '/api/program/unit/getUnitsByProgram/:seriesid/:programid',

#### 功能需求2

根据您提供的图片，页面包含以下组件：

用户信息区域：

显示用户姓名（如“李岩”）。
显示用户ID（如“ty102474”）。
显示有效期（如“2025-05-27”）。
“智能复习”按钮。

导航菜单：

选项包括“小学”、“初中”、“高中”、“大学”、“出国”、“常用”。
学习进度区域：

课程名称（如“沐教牛津版2024 三年级起点”）。
进度条，显示学习进度百分比（如“0.71%”）。
任务统计（如“任务课程（0）”）。
今日报告区域：

显示在线时长（如“在线时长: 00:00”）。
显示有效时长（如“有效时长: 00:00”）。
显示今日效率（如“今日效率: 0%”）。
今日试卷统计：

显示试卷及其相关信息（如“记忆时长: 00:00”、“数量: 0”、“速度: 0 个小时”）。
退出按钮：

提供用户退出的功能。
其他信息：

可能包含额外的帮助或信息提示（如“QQ增强版已启用”）。
开发建议：
用户信息组件：使用文本框显示用户信息，并提供按钮进行智能复习功能的调用。
导航菜单：使用侧边栏或顶部导航栏实现不同学习阶段的切换。
进度条：可使用进度条组件以视觉化方式展示学习进度。
统计信息：使用表格或简单文本显示用户的学习统计，确保信息更新实时。
按钮功能：确保所有按钮具备相应的事件处理逻辑，确保用户体验流畅。
通过以上组件和功能的设计，可以指导开发人员构建一个功能相似的学习管理页面。

### todolist

#### todo02

实现 navbar 顶部栏；
1、样式：背景蓝白渐变色；字体白色；
2、位置：位于顶部靠上，高度 100 px；宽带 100%；
3、构成：
左边显示 LOGO图片和文字：单词易记；
中间间隔按列显示 6 列文字：小学、初中、高中、大学、出国、常用；点击该组件时，弹出选择学期的对话框；
（当前默认选择小学学期， 小学学期背景色变深点）；
右侧显示 退出文字，点击实现当前用户的退出；

#### todo3

实现左侧功能模块 DcyxSysLeftBoard；
1、用卡片布局，占据屏幕左半边；背景、字体颜色、你考虑使用好看的颜色、允许渐变色；
2、用户信息区域：
显示用户姓名（如“李岩”）。
显示用户ID（如“ty102474”）。
显示有效期（如“2025-05-27”）。
3、具有一个“智能复习”按钮。
4、具有三个按钮：“每日任务”、“测试中心”、“我的”；
5、今日报告区域：
显示在线时长（如“在线时长: 00:00”）。
显示有效时长（如“有效时长: 00:00”）。
显示今日效率（如“今日效率: 0%”）。

开发建议：
用户信息组件：使用文本框显示用户信息，并提供按钮进行智能复习功能的调用。
导航菜单：使用侧边栏或顶部导航栏实现不同学习阶段的切换。
进度条：可使用进度条组件以视觉化方式展示学习进度。
统计信息：使用表格或简单文本显示用户的学习统计，确保信息更新实时。
按钮功能：确保所有按钮具备相应的事件处理逻辑，确保用户体验流畅。

#### todo4

实现右侧功能模块 DcyxSysRightBoard；；
1、用卡片布局，占据屏幕右半边；背景、字体颜色、你考虑使用好看的颜色、允许渐变色；
2、学习进度区域：
课程名称（如“沐教牛津版2024 三年级起点”）。
进度条，显示学习进度百分比（如“0.71%”）。
任务统计（如“任务课程（0）”）。
3、今日词汇统计：
显示词汇及其相关信息（如“记忆时长: 00:00”、“数量: 0”、“速度: 0 个小时”）。

开发建议：
用户信息组件：使用文本框显示用户信息，并提供按钮进行智能复习功能的调用。
导航菜单：使用侧边栏或顶部导航栏实现不同学习阶段的切换。
进度条：可使用进度条组件以视觉化方式展示学习进度。
统计信息：使用表格或简单文本显示用户的学习统计，确保信息更新实时。
按钮功能：确保所有按钮具备相应的事件处理逻辑，确保用户体验流畅。

#### todo5

1、主页信息内容，从数据接口中获取，并且使用 view 调用 store、 store 调用 api 的模式；api 前缀为 /api/v1
2、使用该接口查询所有的阶段信息 '/series/getSeriesByUser'；
3、使用该接口查询左侧模块信息，用户信息，'/user/student/getStudentById/{userid}'
4、使用该接口查询左侧模块、今日报告信息，'/study/time/getTodayTimeRecord'
5、使用该接口查询右侧模块，选择教材项目信息，'/study/state/getCurrentProgram'
6、要求你参考 mock 实现的这些接口，它们返回了具体的数据，你要按返回的数据进行处理；
7、修改 dashboard index.vue 文件，使其显示请求获取的数据；

#### #todo6

1、实现一个选择学习模块的组件页面；
2、使用 API：mock/dcyx.series.mock.ts 文件中的 /series/getSeriesByParentId/{id} 模拟API；
3、下面说明该功能模块的内容：

一、整体结构说明
页面标题
顶部中央显示“单词易记智能英语”标题，突出页面主题。
顶部导航标签（Tabs）

横向排列的标签页，分别是：小学英语、初中英语、高中英语、大学英语、出国考试、常用英语。
当前选中标签为“小学英语”，选中标签背景为蓝色，未选中为默认字体颜色。
点击不同标签切换对应的单词库内容。

左侧版本列表
纵向滚动列表，显示不同的教材版本，如“冀教版”、“外研社新标准”、“人教社PEP版”等。
每个版本前面有一个图标（A字母图标），表示版本类型或教材标识。
点击不同版本，右侧展示对应版本的单词学习模块。

右侧单词学习模块卡片集合
右侧区域展示该版本下的若干单词学习模块卡片。
每个卡片包含：
模块名称（如“三上词汇”、“三上词组”、“三下词汇”、“三下词组”、“三下拓展词汇”）。
一个圆形进度环，显示学习进度百分比。
进度环下方显示“已学单词数/总单词数”，如“1/141”。
卡片背景为浅蓝色，卡片之间有间距排列。

二、功能交互说明

标签切换
点击顶部标签，切换不同难度/阶段的英语分类。
切换后左侧版本列表和右侧模块卡片内容更新。

版本选择
左侧版本列表支持纵向滚动。
点击版本时，右侧模块卡片根据选中版本动态加载对应数据。

模块卡片交互
点击某个模块卡片可以进入具体的单词学习页面（页面跳转或弹窗等，需后端接口支持）。

滚动条
左侧版本列表和右侧模块卡片区域均支持滚动，保证内容超出时可以查看全部内容。

#### todo7

1、项目存在问题：布局卡片太大了；
2、我想让页面看起来更美观，看起来更加紧凑型；
3、修改项目样式；

#### todo08

1、项目是有样式模块的，sass 管理的在 src\styles 目录下；
该目录下有 element-plus.scss 、 variables.scss 、index.scss，我想你应该理解它们；
2、组件 src\views\dcyx\sys-main 下面的 VUE 组件，需要将这个目录下组件的样式，公共的部分样式，提取到 src\styles 目录下；
3、需求：src\views\dcyx\sys-main\index.vue 这个文件使用了 ElMessageBox 功能，但是它实现的样式比较丑，请调整为合适、美观的的样式；

#### todo09

1、新增一个布局VUE 组件和若干详情页面 VUE；
2、布局页面要求：
1、底部导航栏，位于页面底部，水平等距分布五个按钮，点击按钮时，需要跳转到对应下面5个对应路由，分别对应每个详情页面：
2、布局vue 存储在 src\layout-dcyx\index.vue （已完成）
3、底部栏封装为 VUE 文件，存储在 src\layout-dcyx\components\NavBar\index.vue （已完成）
4、布局 VUE 内部，嵌套子页面包含对应的详情页；
3、详情页面为，这些详情页都封装为独立的 VUE 文件，都存储在 src\views\dcyx\work-main\ 目录下：
1、单词训练页面；src\views\dcyx\work-main\word-training.vue (已完成)
2、记忆追踪页面；src\views\dcyx\work-main\memory-tracking.vue （已完成）
3、测试中心页面；（已完成）
4、单词本页面； （已完成）
5、我的页面； （已完成）
4、详情页先简单实现，请你自由发挥；

#### todo10

1、基于 todo09 实现的布局和页面组件；
2、请添加对应的路由，
1、src\layout-dcyx\components\NavBar\index.vue 在这里你定义了不同的 path；
2、src\router\index.ts 在这里你需要增加对应的详情页面的路由；需要实现 src\layout-dcyx\index.vue 布局VUE文件嵌套一个孩子，子详情页面 VUE， 它们在 src\views\dcyx\work-main 存储；

#### todo11

1、编写单词训练模块 src\views\dcyx\work-main\word-training.vue；
2、原文件不再使用，新文件放在同目录下，请不要参考原文件，按照下面需求实现；
2、需求：
1、该页面左边为菜单列表，存储为 UnitList，它表示每一个学习单元；
2、点击每个菜单项，每个单元，右侧卡片面板会显示该单元对应的三个学习类型：智能记忆、智能听写、智能默写，以卡片形式展示；以一个封装的对象类型存储信息；
3、每个类型点击会进入分别的学习页面；
4、三种学习类型智能记忆、智能听写、智能默写，卡片内容展示了下面的信息：
studyNumForZnjy: 代表“单词记忆”的学习次数，这里为 0.0，表示没有进行过单词记忆的学习。
studyNumForZnmx: 代表“单词默写”的学习次数，为 '0'，同样表示没有进行过单词默写的学习。
studyNumForZntx: 代表“单词听写”的学习次数，为 '0'，表示没有进行过单词听写的学习。
testTimeForZnjy: 代表“单词记忆”测试的时间，为 '0'，表示没有进行过相关测试。
testTimeForZnmx: 代表“单词默写”测试的时间 '0'，同样表示没有进行过相关测试。
testTimeForZntx: 代表“单词听写”测试的时间，为 '0'，表示没有进行过相关测试。
restudyNumForZnjy: 代表“单词记忆”的复习次数，为 '0'，表示没有进行过复习。
restudyNumForZnmx: 代表“单词默写”的复习次数，为 '0'，同样表示没有进行过复习。
restudyNumForZntx: 代表“单词听写”的复习次数，为 '0'，表示没有进行过复习。
isEndZnjy: 表示“单词记忆”学习是否结束，为 '0'，表示学习尚未结束。
isEndZntx: 表示“单词听写”学习是否结束，为 '0'，表示学习尚未结束。
isEndZnmx: 表示“单词默写”学习是否结束，为 '0'，表示学习尚未结束。
A、布局紧凑，字体小型，padding、margin 都减小；行高、列宽、间隔都为紧凑型；
B、布局合理、配色大方美观；
3、说明：
1、每个学习单元会有一组单词信息；mock\dcyx.program.mock.ts 文件里面，
2、program/unit/getUnitsByProgram/:seriesid/:programid API 为获取单元列表；
3、program/unit/getUnitsInfoByProgram/:parentid/:programid/:unitid 获取单元具体信息；

#### todo12

1、编写智能记忆页面，存储在下面位置；
src\views\dcyx\learn-main\inteli-memory.vue
2、在单词训练模块，点击智能记忆会进入到对应的页面，单词训练页面位于；
src\views\dcyx\work-main\word-training.vue
3、智能记忆大体布局上都可以参考智能记忆现有的原代码文件；
4、基于原有的智能记忆的模板，增加下面分别说明每个页面的细节：
一、智能记忆（Intelligent Memory）页面功能列表
功能定位：
帮助用户记忆单词及词义，通过展示单词、词性、释义、发音等信息，结合有效时长和学习状态，支持自主模式切换，追踪学习进度。
主要功能点：
1、进入此页面播放单词读音；

2、顶部信息、导航栏
一行：页面标题（“智能记忆”）； 当前选中的学习单元标题名字； 退出按钮，点击退出到单词训练页面；

3、中间卡片形式，进行单词展示
第一行：显示当前学习单词、 显示当前单词音标、 喇叭图标，点击喇叭可以播放单词；发音播放
第二行：以进度条和数字百分比（位于进度条尾部），已学单词/单词总数显示学习进度；
第三行：词性（如 n., v., adj. 等）、 词义（中文释义） 、 剩余学习次数 、笑脸按钮、衰脸按钮、打勾按钮、打叉按钮；
第四行：例句；

    注意： 1、第三行样式为大号文本；
          2、以状态机来管理此模块的学习；
            1、状态1：单词是否认识，该状态持续5秒钟，底部栏记忆倒计时秒数记录时间，隐藏词性、词义、显示笑脸图标、衰脸图标；
            2、状态1转变为状态2，条件为点击笑脸；状态1 转变为状态3，条件为点击衰脸或者5秒钟倒计时结束；
            3、状态2：判断是否认识该单词，显示词性、显示词义，显示打勾按钮，显示打叉按钮；（点击打勾表示认识，点击打叉表示不认识）
            4、状态2装变为状态1，条件点击打勾或者打叉按钮；并且切换当前学习的单词；
            5、状态3：加强学习单词，显示词性、显示词义、显示剩余学习次数，默认为2、显示例句；
              在该状态，点击剩余学习次数，次数会减少一，会播放单词读音；次数为0时，剩余学习次数数字转变为右箭头图标；
            6、状态3转变为状态1，条件为点击右箭头图标；

底部学习进度信息
一行：记忆倒计时秒数（默认从5到0） 、生词数、熟词数、 单元总词数显示、 已学单词数统计，表示当前单词序号显示（例如第5个单词）
5、现在页面模拟一些静态单词数据、设置对象类型；
这是单词类型的信息：
id: '56155',
spelling: 'fiction',
syllable: "'fikʃən",
meaningZhCn: 'n. 小说',
exampleEnUs: 'She writes science fiction.',
exampleZhCn: '她写科幻小说。',
unitName: 'Unit12',
这是历史单词的信息：
{
id: '2945396',
spelling: 'textbook',
syllable: "'tekstbuk",
meaningZhCn: 'n.教科书；课本',
studyPercent: 20,
wclass: 'word-level-10',
studyTimes: '2',
studyWrongTimes: '2',
isStudy: true,
nextTimeStr: '0',
nextTime: '0',
},

#### todo13

1、音频文件位置，my-vue3-project\mp3s\good.mp3
2、学习页面位置，my-vue3-project\src\views\dcyx\learn-main\inteli-memory.vue
3、实现学习页面中，点击播放单词按钮时，全部都播放该音频文件的声音；

#### todo14

1、学习页面：my-vue3-project\src\views\dcyx\learn-main\inteli-memory.vue
2、新增需求：点击下一个按钮，切换到下一个单词时，也播放下一个单词的音频；
3、同样的，都用这个音频文件代替所有单词的音频，位置在 my-vue3-project\mp3s\good.mp3

#### todo15

1、学习页面 my-vue3-project\src\views\dcyx\learn-main\inteli-memory.vue
2、新增需求：在单词记忆完成后，进入单词听写阶段；
3、页面功能内容：
1、顶部栏，信息布局保持不变；
2、中间内容区域；有两行
第一行：展示词性、词义；
第二行：展示喇叭按钮、输入框；
第三行：要拼写的单词字母（只有键入回车并且拼写错误时，出现，默认隐藏）；
3、底部栏：左侧展示有效时长、右侧展示已拼写通过单词数、拼写单词总数；
4、注意：
1、每次新单词出现时，要播放读音；点击播放按钮、也要播放读音；
2、默认激活输入框，可以键入拼写单词；
3、输入单词后，键入回车，会判断输入单词拼写是否正确，
1、如果正确，输入框右侧打勾；
2、如果错误，中间内容区域，第三行的单词字母要出现，并且标红错误的不匹配的内容；

#### todo16

1、已经完成了 todo15；
2、在 todo15 基础上 补充修改一些需求：
1、单词拼写阶段，输入回车键，检查单词的拼写状态，
如果拼写正确，
1、在中间内容区域的第二行的输入框后面显示一个右箭头图标；
2、第三行，显示音标内容，
3、再播放一遍当前单词读音，
4、此时停留，等待再点击一次回车键，进入下一个单词；
如果拼写失败，
1、再播放一遍当前单词读音；

#### todo17

1、存在问题：
1、拼写阶段，拼写正确时，
1、出现的右箭头没有点击功能；
2、输入框不用变为禁用输入模式；
3、再点击回车按钮，没有进入下一个要拼写的单词；
2、需求：
1、点击右箭头需要进入下一个要拼写的单词；
2、输入框要一直可以输入；
3、拼写正确后，点击回车要进入下一个要拼写的单词；

#### todo18

实现需求：
1、为单词记忆阶段绑定快捷键；
2、按下键盘的向右方向键，等同于点击笑脸按钮、正确按钮、剩余学习次数按钮、下一个按钮；|
3、按下键盘的向右方向键，等同于点击衰脸、错误按钮；

#### todo19

实现需求：
1、修改sys main 系统页面，my-vue3-project\src\views\dcyx\sys-main\index.vue
2、设置它的背景颜色为白色和浅灰色；
3、修改学习页面； my-vue3-project\src\views\dcyx\learn-main\inteli-memory.vue
4、设置它的布局高度为 100%；用合适的 card 卡片、row、col 修改他的空间布局；
