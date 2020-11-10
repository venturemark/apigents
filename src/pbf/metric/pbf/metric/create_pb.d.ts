import * as jspb from "google-protobuf";

export class CreateI extends jspb.Message {
  getDatapointList(): Array<number>;
  setDatapointList(value: Array<number>): CreateI;
  clearDatapointList(): CreateI;
  addDatapoint(value: number, index?: number): CreateI;

  getMetricId(): string;
  setMetricId(value: string): CreateI;

  getTimestamp(): string;
  setTimestamp(value: string): CreateI;

  getUpdateId(): string;
  setUpdateId(value: string): CreateI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI.AsObject;
  static toObject(includeInstance: boolean, msg: CreateI): CreateI.AsObject;
  static serializeBinaryToWriter(
    message: CreateI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI;
  static deserializeBinaryFromReader(
    message: CreateI,
    reader: jspb.BinaryReader
  ): CreateI;
}

export namespace CreateI {
  export type AsObject = {
    datapointList: Array<number>;
    metricId: string;
    timestamp: string;
    updateId: string;
  };
}

export class CreateO extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO.AsObject;
  static toObject(includeInstance: boolean, msg: CreateO): CreateO.AsObject;
  static serializeBinaryToWriter(
    message: CreateO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO;
  static deserializeBinaryFromReader(
    message: CreateO,
    reader: jspb.BinaryReader
  ): CreateO;
}

export namespace CreateO {
  export type AsObject = {};
}
