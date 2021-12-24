const state = {
  menu : [
    {
      icon: 'icon-shouye',
      authName: '考试管理',
      path: '/homePage',
      children: [
        {
          icon: '',
          authName: '试卷列表',
          path: '/examList'
        },
        {
          icon: '',
          authName: '新增考试',
          path: '/examAdd'
        }
      ]
    },
    {
      icon: 'icon-qiyeguanli',
      path: '/multipleChoice',
      authName: '题库管理',
      children: [
        {
          icon: '',
          authName: '单选题',
          path: '/singleChoice'
        },
        {
          icon: '',
          authName: '多选题',
          path: '/multipleChoice'
        },
        {
          icon: '',
          authName: '判断题',
          path: '/companyAudit'
        },
        {
          icon: '',
          authName: '填空题',
          path: '/companyAudit'
        }
      ]
    }
  ]
}

export default {
  state
}
