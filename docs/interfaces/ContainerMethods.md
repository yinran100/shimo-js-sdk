[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ContainerMethods

# Interface: ContainerMethods

需要容器提供给编辑器使用的方法

## Table of contents

### Properties

- [generateUrl](ContainerMethods.md#generateurl)

### Methods

- [getContainerRect](ContainerMethods.md#getcontainerrect)
- [getFileInfoFromUrl](ContainerMethods.md#getfileinfofromurl)
- [mentionClickHandlerForMobile](ContainerMethods.md#mentionclickhandlerformobile)
- [openLink](ContainerMethods.md#openlink)

## Properties

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](../modules.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Defined in

[src/ShimoSDK.ts:653](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/ShimoSDK.ts#L653)

## Methods

### getContainerRect

▸ `Optional` **getContainerRect**(): [`ContainerRect`](ContainerRect.md)

获取容器尺寸等信息

#### Returns

[`ContainerRect`](ContainerRect.md)

#### Defined in

[src/ShimoSDK.ts:633](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/ShimoSDK.ts#L633)

___

### getFileInfoFromUrl

▸ `Optional` **getFileInfoFromUrl**(`url`): `Promise`<`undefined` \| { `fileId`: `string` ; `type`: `string`  }\>

用于从客户业务 URL 中获取对应的文件 ID，供编辑器使用。

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`undefined` \| { `fileId`: `string` ; `type`: `string`  }\>

#### Defined in

[src/ShimoSDK.ts:665](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/ShimoSDK.ts#L665)

___

### mentionClickHandlerForMobile

▸ `Optional` **mentionClickHandlerForMobile**(`payload`): `void`

用于移动端处理 @ 点击事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MouseMovePayload`](MouseMovePayload.md) |

#### Returns

`void`

#### Defined in

[src/ShimoSDK.ts:658](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/ShimoSDK.ts#L658)

___

### openLink

▸ `Optional` **openLink**(`url`, `target?`): `void`

处理石墨文档内点击链接事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `target?` | `string` |

#### Returns

`void`

#### Defined in

[src/ShimoSDK.ts:638](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/ShimoSDK.ts#L638)