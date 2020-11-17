import * as jspb from "google-protobuf";

export class UpdateI extends jspb.Message {
  getApi(): UpdateI_API | undefined;
  setApi(value?: UpdateI_API): UpdateI;
  hasApi(): boolean;
  clearApi(): UpdateI;

  getObj(): UpdateI_Obj | undefined;
  setObj(value?: UpdateI_Obj): UpdateI;
  hasObj(): boolean;
  clearObj(): UpdateI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateI): UpdateI.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI;
  static deserializeBinaryFromReader(
    message: UpdateI,
    reader: jspb.BinaryReader
  ): UpdateI;
}

export namespace UpdateI {
  export type AsObject = {
    api?: UpdateI_API.AsObject;
    obj?: UpdateI_Obj.AsObject;
  };
}

export class UpdateI_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_API
  ): UpdateI_API.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_API;
  static deserializeBinaryFromReader(
    message: UpdateI_API,
    reader: jspb.BinaryReader
  ): UpdateI_API;
}

export namespace UpdateI_API {
  export type AsObject = {};
}

export class UpdateI_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): UpdateI_Obj;

  getPropertyList(): Array<UpdateI_Obj_Property>;
  setPropertyList(value: Array<UpdateI_Obj_Property>): UpdateI_Obj;
  clearPropertyList(): UpdateI_Obj;
  addProperty(
    value?: UpdateI_Obj_Property,
    index?: number
  ): UpdateI_Obj_Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Obj
  ): UpdateI_Obj.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Obj;
  static deserializeBinaryFromReader(
    message: UpdateI_Obj,
    reader: jspb.BinaryReader
  ): UpdateI_Obj;
}

export namespace UpdateI_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
    propertyList: Array<UpdateI_Obj_Property.AsObject>;
  };
}

export class UpdateI_Obj_Property extends jspb.Message {
  getDataList(): Array<UpdateI_Obj_Property_Data>;
  setDataList(value: Array<UpdateI_Obj_Property_Data>): UpdateI_Obj_Property;
  clearDataList(): UpdateI_Obj_Property;
  addData(
    value?: UpdateI_Obj_Property_Data,
    index?: number
  ): UpdateI_Obj_Property_Data;

  getText(): string;
  setText(value: string): UpdateI_Obj_Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Obj_Property.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Obj_Property
  ): UpdateI_Obj_Property.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Obj_Property,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Obj_Property;
  static deserializeBinaryFromReader(
    message: UpdateI_Obj_Property,
    reader: jspb.BinaryReader
  ): UpdateI_Obj_Property;
}

export namespace UpdateI_Obj_Property {
  export type AsObject = {
    dataList: Array<UpdateI_Obj_Property_Data.AsObject>;
    text: string;
  };
}

export class UpdateI_Obj_Property_Data extends jspb.Message {
  getSpace(): string;
  setSpace(value: string): UpdateI_Obj_Property_Data;

  getValueList(): Array<number>;
  setValueList(value: Array<number>): UpdateI_Obj_Property_Data;
  clearValueList(): UpdateI_Obj_Property_Data;
  addValue(value: number, index?: number): UpdateI_Obj_Property_Data;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Obj_Property_Data.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Obj_Property_Data
  ): UpdateI_Obj_Property_Data.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Obj_Property_Data,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Obj_Property_Data;
  static deserializeBinaryFromReader(
    message: UpdateI_Obj_Property_Data,
    reader: jspb.BinaryReader
  ): UpdateI_Obj_Property_Data;
}

export namespace UpdateI_Obj_Property_Data {
  export type AsObject = {
    space: string;
    valueList: Array<number>;
  };
}

export class UpdateO extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): UpdateO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateO): UpdateO.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO;
  static deserializeBinaryFromReader(
    message: UpdateO,
    reader: jspb.BinaryReader
  ): UpdateO;
}

export namespace UpdateO {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
  };
}
