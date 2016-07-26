export default {
  UTILS: {
    LOADING: '载入中...',
    NAME: '名称',
    CANCEL: '取消',
    CREATE: '创建',
    UPLOAD: '上传',
    OPEN: '开启',
    DOWNLOAD: '下载',
    DELETE: '删除',
    RENAME: '重新命名',
    REFRESH: '刷新',
    OR: '或',
  },
  VALIDATION: {
    REQUIRED: '此栏位不得为空。',
    EMAIL: '此栏位必须符合电邮格式。',
    MIN_LENGTH: '此栏位不得小于 {{ minlength }} 个字元。',
    MAX_LENGTH: '此栏位不得大于 ​​{{ maxlength }} 个字元。',
    MATCH: '请输入与前一个栏位相同的值。',
  },
  SETTINGS: {
    ACCOUNT: '我的帐户',
    BILLING: '付款与费用管理',
    SECURITY: '安全凭证',
    SIGN_OUT: '登出',
    SIGN_OUT_CONFIRM_TITLE: '你确定要停止所有上传并登出吗？',
    SIGN_OUT_CONFIRM_MESSAGE: '你有正在进行的操作或上传档案，若离开会将它们全部取消。确定要离开吗？',
    LEAVE: '离开',
    STAY: '留下',
  },
  BUCKET: {
    EMPTY_MESSAGE: '看来你目前没有任何的 Bucket',
    CREATE_MESSAGE: '别担心，建立一个是很容易的',
    ERROR_MESSAGE: '糟糕，您的连线中断了⋯⋯',
    REFRESH_MESSAGE: '别担心，你可以再试着刷新。',
    DUPLICATE_MESSAGE: '此 bucket 已存在！请选择一个不同的名称并再试一次。',
    CREATE: '创建 Bucket',
    DELETE: '删除 Bucket',
    NAME: 'Bucket 名称',
    CREATE_DESCRIPTION: '你所使用的名称不得重复于 S3 Portal 中已存在的 bucket 名称。',
    DELETE_DESCRIPTION: 'S3 Portal 的 bucket 是唯一的。如果你删除此 bucket，其他 S3 的使用者可能会使用此名称。',
    DELETE_TYPE_NAME: '请输入 bucket 名称以确认删除。',
    DELETE_ERROR_MESSAGE: '请输入欲删除的完整 bucket 名称。',
    DELETE_CONFIRM: `删除此 bucket 及此 bucket 内的所有文件与文件夹
    （若有支援旧版本则包含旧版本）<b>会无法复原</b>。
    你确认要删除 <b>{{ name }}</b> 吗？`,
  },
  ACTION_NAVBAR: {
    ACTIONS: '操作',
    PROPERTIES: '属性',
    TRANSFERS: '传输',
    NONE: '无',
  },
  TOAST: {
    SIGN_IN_SUCCESS: '登入成功！',
    SIGN_UP_SUCCESS: '注册成功！',
    SIGN_OUT_SUCCESS: '登出成功！',
    SIGN_OUT_FAILURE: '登出失敗！',
    CREATE_BUCKET_SUCCESS: 'Bucket {{ bucket }} 已创建成功！',
    CREATE_BUCKET_FAILURE: 'Bucket {{ bucket }} 创建失敗，请再试一次！',
    DELETE_BUCKET_SUCCESS: 'Bucket {{ bucket }} 删除成功!',
    DELETE_BUCKET_FAILURE: 'Bucket {{ bucket }} 删除失败,请再试一次!',
    CREATE_FOLDER_SUCCESS: '资料夹 {{ folder }} 建立成功！',
    CREATE_FOLDER_FAILURE: '资料夹 {{ folder }} 建立失败，请再试一次！',
    UPLOAD_FILE_SUCCESS: '档案 {{ name }} 上传成功!',
    UPLOAD_FILE_FAILURE: '档案 {{ name }} 上传失败，请再试一次!',
    DELETE_FILE_SUCCESS: '{{ name }} 删除成功！',
    DELETE_FILE_FAILURE: '{{ name }} 删除失败,请再试一次！',
    RESET_SUCCESS: '{{ email }} 更改密码成功!',
    RESET_FAIL: '{{ email }} 更改密码失败，请再试一次',
  },
  AUTH: {
    EMAIL: '电邮',
    PASSWORD: '密码',
    RETYPE_PASSWORD: '再次输入密码',
    SIGN_IN: '登入',
    SIGN_UP: '注册',
    HAVE_ACCOUNT: '已经有帐户了吗？',
    HAVE_NOT_ACCOUNT: '尚未注册帐戶吗？',
    CREATE_ACCOUNT: '创建帐户',
    LOGIN_TO_YOUR_ACCOUNT: '登入你的帐户',
    ALREADY_EXIST: '已有其他人使用这个电邮，请换一个试试',
    SIGN_IN_INCORRECT: '你的电邮或密码不正确，请再试一次。',
  },
  TRANSFER: {
    CANCEL: '取消',
    CANCELED: '取消传输',
    AUTO_CLEAR: '自动清除已完成传输',
    TITLE: {
      UPLOAD: '上传 {{ name }} 至 {{ bucket }}',
      DELETE: '從 {{ bucket }} 删除 {{ name }}',
    },
    STATUS: {
      DELETING: '删除中',
      DELETED: '已删除',
      UPLOADING: '上传中',
      COMPLETED: '已完成',
      RESUMING: '重新开始',
    },
  },
  FILE: {
    CREATE_FOLDER: '创建文件夹',
    STORAGE_CLASS: '储存类型',
    SIZE: '容量大小',
    LAST_MODIFIED: '最后修改时间',
    OWNER: '拥有者',
    DO_ACTIONS: '你可以执行以下操作',
    UPLOAD: '上传档案',
    EMPTY_BUCKET: '这个 bucket 是空的',
    EMPTY_FOLDER: '这个文件夹是空的',
    UPLOAD_DESCRIPTION: '点击新增档案以上传文件至 S3 Portal。点击文件名称右侧的 ✖ 可以清除以选择的文件。',
    ADD: '新增文件',
    NUMBER_OF: '档案总数：',
    TOTAL_SIZE: '总上传容量大小：',
    FOLDER_NAME: '文件夹名称',
    FOLDER_DUPLICATED_MESSAGE: '此文件夹已存在！请选择一个不同的名称并再试一次。',
    NEW_FOLDER: '新文件夾',
    DELETE_TITLE: '您确定要删除所选项目吗?',
    DELETE_DESCRIPTION: `删除后将无法复原，您确定要删除所选项目吗?`,
    DELETE_ARIA_LABEL: 'Delete Objects',
    RENAME_TITLE: '重新命名',
    RENAME_DESCRIPTION: `您确定要修改这个物件的名称吗?`,
    RENAME_ARIA_LABEL: 'Rename Object',
    ITEM_NAME:'物件名称',
    NEW_NAME:'新名称',
    RENAME_SUCCESS: '档案 {{ fileName }} 重新命名成功',
    RENAME_FAILURE: '档案 {{ fileName }} 重新命名失败，请再试一次!',
  },
  MANAGER: {
    USER_LIST: '使用者列表',
    SEARCH: '搜寻',
    CREATE_USER: '新增使用者',
    USER_DELETE: '删除使用者',
    USER_ACCOUNT: '账号',
    USER_ROLE: '权限',
    USER_REGISTER_TIME: '注册时间',
    USER_RESET: '重新设定密码',
    EMAIL:'使用者 Email',
    DELETE_TYPE_NAME: '请输入 Email 以确认删除。',
    DELETE_ERROR_MESSAGE: '请输入欲删除的完整 Email。',
    DELETE_CONFIRM: `删除此 Account 及此 Account 内的所有 Bucket 
    （若有支持旧版本则包含旧版本）<b>会无法复原</b>。
    你确认要删除 <b>{{ name }}</b> 吗？`,

  },
};
