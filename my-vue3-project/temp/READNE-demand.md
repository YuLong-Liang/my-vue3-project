1. 功能需求详细描述
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


1.2 学习主页模块
1.2.1 单词训练
描述

单词训练模块提供基于当前教材和单元的多样化单词学习方式，包括智能记忆、智能听写、智能默写，用户可查看教材、单元进度和切换学习内容。

输入
当前选择的教材、单元ID
学习记录数据

处理逻辑
调用接口获取教材基础信息（名称、系列、单词总数等）
获取当前单元列表，用于侧边栏展示
根据用户操作选择智能记忆、听写、默写，加载对应学习单词
支持“重学”功能，删除选中单元的学习记录

输出
顶部栏显示当前教材和系列信息
侧边栏显示单元列表
主页面显示当前学习单词及学习状态信息

异常处理
单元或教材信息加载异常时，提示用户刷新或稍后重试
重学操作确认机制，避免误操作
用户界面

顶部栏、侧边栏、主学习区布局
重学弹窗支持多选单元和学习类型


1.2.2 智能记忆
（拆分为词义记忆和词义强化两个子模块）

词义记忆

描述
用户通过卡片展示单词拼写、音标及发音，结合倒计时进行记忆训练，用户标记是否认识单词，系统依据反馈更新学习进度。

输入
当前单元学习单词
用户“认识”或“不认识”反馈

处理逻辑
展示单词卡片及倒计时，时长最长15秒
用户点击“笑脸”（认识）或“哭脸”（不认识）按钮
倒计时结束自动标记“不认识”
后端更新学习记录，前端刷新底部信息栏

输出
当前单词拼写、音标、发音
当前学习进度和有效学习时长展示

异常处理
网络异常时，本地缓存反馈标记，稍后同步

用户界面
单词卡片、进度条、倒计时显示
笑脸/哭脸按钮位置明确易点击


词义强化

描述
通过输入单词拼写强化记忆，首个错误字符高亮提示，错误时显示完整单词帮助纠正。

输入
用户输入的单词拼写

处理逻辑
用户输入内容实时校验拼写正确性
首次错误显示完整单词，错误字符标红
用户继续输入直到正确或放弃

输出
拼写校验结果
正确或错误提示

异常处理
输入框异常处理（支持删除、重置）

用户界面
输入框及错误高亮显示
播放按钮辅助发音

1.2.3 智能听写

描述
播放单词音标发音，用户输入单词拼写，实时提示正确性。

输入
用户输入单词拼写

处理逻辑
同智能记忆词义强化拼写校验流程。

输出
拼写正确性提示
学习进度更新

异常处理
播放异常提示

用户界面
音标显示，播放按钮，拼写输入框，进度条

1.2.4 智能默写

描述
展示单词词义，用户输入拼写，系统实时校验。

输入
用户输入单词拼写

处理逻辑
同智能记忆词义强化拼写校验流程。

输出、异常处理、用户界面
同智能听写模块。
