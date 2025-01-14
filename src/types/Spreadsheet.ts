import { MouseMovePayload } from 'shimo-js-sdk-shared'
import { BaseEditor, EventMap as BaseEventMap } from './BaseEditor'

/** 表格范围 */
export interface Range {
  row: number
  column: number
  rowCount: number
  columnCount: number
}

/**
 * 锁定权限等级
 * 0 - 可编辑
 * 1 - 只能查看
 * 2 - 禁止查看
 */
export type PermissionLevel = 0 | 1 | 2

/** 用户ID对应的权限等级 */
export interface UserPermission {
  [userId: number]: PermissionLevel
}

/** 部门ID对应的权限等级 */
export interface DepartmentPermission {
  [departmentId: number]: PermissionLevel
}

export interface EventMap extends BaseEventMap {
  error: {
    /** 错误信息 */
    data?: any
    /** 错误码 */
    code: number
  }

  /**
   * 鼠标移动事件
   */
  MouseMove: MouseMovePayload

  /**
   * 垂直滚动事件
   */
  VerticalScroll: MouseMovePayload

  /**
   * 水平滚动事件
   */
  HorizontalScroll: MouseMovePayload
}

/** 单元格值类型 */
export type CellValue = string | number | boolean | null

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 展示评论侧边栏
   * @since 22.2.1
   */
  showComments: (options?: {}) => Promise<void>
  /** 关闭评论侧边栏 */
  hideComments: (options?: {}) => Promise<void>
  /** 展示历史侧边栏 */
  showHistory: (options?: {}) => Promise<void>
  /** 关闭历史侧边栏 */
  hideHistory: (options?: {}) => Promise<void>
  /** 展示锁定侧边栏 */
  showLocks: (options?: {}) => Promise<void>
  /** 关闭锁定侧边栏 */
  hideLocks: (options?: {}) => Promise<void>
  /** 创建版本 */
  createRevision: (options?: {}) => Promise<void>
  /** 进入演示模式 */
  startDemonstration: (options?: {}) => Promise<void>
  /** 离开演示模式 */
  endDemonstration: (options?: {}) => Promise<void>
  /** 打印 */
  print: (options?: {}) => Promise<void>
  /** 创建单元格锁定 */
  addRangeLock: (options: {
    /** 用户id对应的权限 */
    userPermissions: UserPermission
    /**
     * 单元格范围
     * @default 默认当前选中区域范围
     */
    ranges?: Range[]
    /**
     * 工作表id
     * @default 默认当前工作表id
     */
    sheetId?: string
    /** 对该锁定的描述 */
    description?: string
    /** 部门id对应的权限 */
    departmentPermissions?: DepartmentPermission
    /**
     * 其他访问者的权限
     * @default 1
     */
    visitorPermission?: PermissionLevel
  }) => Promise<void>
  /** 创建工作表锁定 */
  addSheetLock: (options: {
    /** 用户id对应的权限 */
    userPermissions: UserPermission
    /**
     * 工作表id
     * @default 默认当前工作表id
     */
    sheetId?: string
    /** 对该锁定的描述 */
    description?: string
    /** 部门id对应的权限 */
    departmentPermissions?: DepartmentPermission
    /**
     * 其他访问者的权限
     * @default 1
     */
    visitorPermission?: PermissionLevel
  }) => Promise<void>
  /** 删除指定范围内的所有单元格锁定 */
  removeRangeLocksInRanges: (options: {
    /**
     * 工作表id
     * @default 默认当前工作表id
     */
    sheetId?: string
    /**
     * 单元格范围
     * @default 默认当前选中区域范围
     */
    ranges?: Range[]
  }) => Promise<void>
  /** 删除工作表锁定 */
  removeSheetLock: (options: {
    /**
     * 工作表id
     * @default 默认当前工作表id
     */
    sheetId?: string
  }) => Promise<void>

  /** 获取当前激活sheet的id */
  getActiveSheetId: () => Promise<string>

  /** 获取所有工作表的id */
  getSheetIds: () => Promise<string[]>

  /** 根据工作表 index 获取工作表 ID */
  getSheetIdByIndex: (options: { index: number }) => Promise<string>

  /** 获取指定工作表行数量 */
  getRowCount: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     */
    sheetId?: string
  }) => Promise<number>

  /** 获取指定工作表列数量 */
  getColumnCount: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     */ sheetId?: string
  }) => Promise<number>

  getCellValue: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     * */
    sheetId?: string
    /** 行index */
    row: number
    /** 列index */
    column: number
  }) => Promise<CellValue>

  /** 获取工作表指定范围内的单元格的值 */
  getRangeValues: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     */
    sheetId?: string
    /**
     * 单元格范围
     * @default 默认当前选中范围
     */ range?: Range[]
  }) => Promise<CellValue[][]>

  /**
   * 指定工作表是否可见，不传值为当前工作表
   */
  isSheetVisible: (options?: { sheetId?: string }) => Promise<boolean>
}

/**
 * 控制插件是否开启，无特殊说明默认都是 true。某些插件设置为 false 后，可能影响数据呈现。
 * 受后端服务版本影响，不是所有插件都可用，请以实际部署版本为准。
 */
export interface PluginOptions {
  /**
   * 附件 (附件 / 云文件)
   */
  Attachment?: boolean

  /**
   * 高亮行列
   */
  HighlightPosition?: boolean

  /**
   * 计算选项
   */
  CalcOption?: boolean

  /**
   * 单元格历史
   */
  CellHistory?: boolean

  /**
   * 图表
   */
  ChartV2?: boolean

  /**
   * 任务清单
   */
  CheckList?: boolean

  /**
   * 清除重复项
   */
  ClearRepeat?: boolean

  /**
   * 合并工作表 (合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)
   */
  CombineSheets?: boolean

  /**
   * 评论
   */
  Comment?: boolean

  /**
   * 条件格式
   */
  ConditionalFormat?: boolean

  /**
   * 复制为图片
   */
  CopyAsImage?: boolean

  /*
   * 定义名称
   */
  CustomNames?: boolean

  /*
   * 数据验证
   */
  DataValidation?: boolean

  /*
   * 文件瘦身
   */
  FileSlimming?: boolean

  /*
   * 历史模块
   */
  HistorySidebar?: boolean

  /*
   * 独立视图
   */
  IndependentViewport?: boolean

  /*
   * 分组
   */
  Outline?: boolean

  /*
   * 数据透视表
   */
  PivotTable?: boolean

  /*
   * 备注
   */
  Remarks?: boolean

  /*
   * 套用表格样式
   */
  SheetStyles?: boolean

  /*
   * 切片器 (切片器依赖套用表格样式 / 数据透视表创建，如果设置表格样式 / 数据透视表为不显示，切片器也会不显示)
   */
  Slicer?: boolean

  /*
   * 分列
   */
  SplitColumns?: boolean

  /*
   * 图片权限设置，默认 false
   */
  ImagePermission?: boolean

  /*
   * 获取指向此选区的链接
   */
  CopyRangeLink?: boolean

  /*
   * 复制视图链接以分享
   */
  CopyViewportLink?: boolean

  /*
   * 跨表格引用
   */
  ImportFormula?: boolean

  /*
   * 批量锁定
   */
  BatchLock?: boolean

  /*
   * @人/文件
   */
  Mention?: boolean

  /*
   * 日期提醒
   */
  DateMention?: boolean

  /*
   * 锁定
   */
  Lock?: boolean
}
