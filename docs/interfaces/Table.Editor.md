[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Table](../modules/Table.md) / Editor

# Interface: Editor

[Table](../modules/Table.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](Table.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [createRevision](Table.Editor.md#createrevision)
- [hideRevision](Table.Editor.md#hiderevision)
- [off](Table.Editor.md#off)
- [on](Table.Editor.md#on)
- [setTitle](Table.Editor.md#settitle)
- [showRevision](Table.Editor.md#showrevision)

## Methods

### createRevision

▸ **createRevision**(`options?`): `Promise`<`void`\>

创建版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:24](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/Table.ts#L24)

___

### hideRevision

▸ **hideRevision**(`options?`): `Promise`<`void`\>

隐藏版本侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:20](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/Table.ts#L20)

___

### off

▸ **off**<`K`\>(`event`, `handler?`): `void`

取消监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler?` | (`payload`: `T`[`K`]) => `void` |

#### Returns

`void`

#### Inherited from

BaseEditor.off

#### Defined in

[src/types/BaseEditor.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/BaseEditor.ts#L31)

___

### on

▸ **on**<`K`\>(`event`, `handler`): `void`

监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | (`payload`: `T`[`K`]) => `void` |

#### Returns

`void`

#### Inherited from

BaseEditor.on

#### Defined in

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/BaseEditor.ts#L26)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<`void`\>

设置文档标题

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseEditor.setTitle

#### Defined in

[src/types/BaseEditor.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/BaseEditor.ts#L36)

___

### showRevision

▸ **showRevision**(`options?`): `Promise`<`void`\>

显示版本侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:16](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/Table.ts#L16)
