import * as jspb from "google-protobuf";

export class UpdateI extends jspb.Message {
  getYaxisList(): Array<number>;
  setYaxisList(value: Array<number>): UpdateI;
  clearYaxisList(): UpdateI;
  addYaxis(value: number, index?: number): UpdateI;

  getText(): string;
  setText(value: string): UpdateI;

  getTimeline(): string;
  setTimeline(value: string): UpdateI;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateI;

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
    yaxisList: Array<number>;
    text: string;
    timeline: string;
    timestamp: number;
  };
}

export class UpdateO extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): UpdateO;

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
    timestamp: number;
  };
}
