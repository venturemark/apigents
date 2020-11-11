import * as jspb from "google-protobuf";

export class SearchI extends jspb.Message {
  getFilter(): SearchI.Filter | undefined;
  setFilter(value?: SearchI.Filter): SearchI;
  hasFilter(): boolean;
  clearFilter(): SearchI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI.AsObject;
  static toObject(includeInstance: boolean, msg: SearchI): SearchI.AsObject;
  static serializeBinaryToWriter(
    message: SearchI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI;
  static deserializeBinaryFromReader(
    message: SearchI,
    reader: jspb.BinaryReader
  ): SearchI;
}

export namespace SearchI {
  export type AsObject = {
    filter?: SearchI.Filter.AsObject;
  };

  export class Filter extends jspb.Message {
    getChunking(): SearchI.Filter.Chunking | undefined;
    setChunking(value?: SearchI.Filter.Chunking): Filter;
    hasChunking(): boolean;
    clearChunking(): Filter;

    getOperatorList(): Array<string>;
    setOperatorList(value: Array<string>): Filter;
    clearOperatorList(): Filter;
    addOperator(value: string, index?: number): Filter;

    getPropertyList(): Array<SearchI.Filter.Property>;
    setPropertyList(value: Array<SearchI.Filter.Property>): Filter;
    clearPropertyList(): Filter;
    addProperty(
      value?: SearchI.Filter.Property,
      index?: number
    ): SearchI.Filter.Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static serializeBinaryToWriter(
      message: Filter,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(
      message: Filter,
      reader: jspb.BinaryReader
    ): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      chunking?: SearchI.Filter.Chunking.AsObject;
      operatorList: Array<string>;
      propertyList: Array<SearchI.Filter.Property.AsObject>;
    };

    export class Chunking extends jspb.Message {
      getPointer(): string;
      setPointer(value: string): Chunking;

      getPerpage(): string;
      setPerpage(value: string): Chunking;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Chunking.AsObject;
      static toObject(
        includeInstance: boolean,
        msg: Chunking
      ): Chunking.AsObject;
      static serializeBinaryToWriter(
        message: Chunking,
        writer: jspb.BinaryWriter
      ): void;
      static deserializeBinary(bytes: Uint8Array): Chunking;
      static deserializeBinaryFromReader(
        message: Chunking,
        reader: jspb.BinaryReader
      ): Chunking;
    }

    export namespace Chunking {
      export type AsObject = {
        pointer: string;
        perpage: string;
      };
    }

    export class Property extends jspb.Message {
      getTimestamp(): string;
      setTimestamp(value: string): Property;

      getUpdateId(): string;
      setUpdateId(value: string): Property;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Property.AsObject;
      static toObject(
        includeInstance: boolean,
        msg: Property
      ): Property.AsObject;
      static serializeBinaryToWriter(
        message: Property,
        writer: jspb.BinaryWriter
      ): void;
      static deserializeBinary(bytes: Uint8Array): Property;
      static deserializeBinaryFromReader(
        message: Property,
        reader: jspb.BinaryReader
      ): Property;
    }

    export namespace Property {
      export type AsObject = {
        timestamp: string;
        updateId: string;
      };
    }
  }
}

export class SearchO extends jspb.Message {
  getFilter(): SearchO.Filter | undefined;
  setFilter(value?: SearchO.Filter): SearchO;
  hasFilter(): boolean;
  clearFilter(): SearchO;

  getResult(): SearchO.Result | undefined;
  setResult(value?: SearchO.Result): SearchO;
  hasResult(): boolean;
  clearResult(): SearchO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO.AsObject;
  static toObject(includeInstance: boolean, msg: SearchO): SearchO.AsObject;
  static serializeBinaryToWriter(
    message: SearchO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO;
  static deserializeBinaryFromReader(
    message: SearchO,
    reader: jspb.BinaryReader
  ): SearchO;
}

export namespace SearchO {
  export type AsObject = {
    filter?: SearchO.Filter.AsObject;
    result?: SearchO.Result.AsObject;
  };

  export class Filter extends jspb.Message {
    getChunking(): SearchO.Filter.Chunking | undefined;
    setChunking(value?: SearchO.Filter.Chunking): Filter;
    hasChunking(): boolean;
    clearChunking(): Filter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static serializeBinaryToWriter(
      message: Filter,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(
      message: Filter,
      reader: jspb.BinaryReader
    ): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      chunking?: SearchO.Filter.Chunking.AsObject;
    };

    export class Chunking extends jspb.Message {
      getPointer(): string;
      setPointer(value: string): Chunking;

      getPerpage(): string;
      setPerpage(value: string): Chunking;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Chunking.AsObject;
      static toObject(
        includeInstance: boolean,
        msg: Chunking
      ): Chunking.AsObject;
      static serializeBinaryToWriter(
        message: Chunking,
        writer: jspb.BinaryWriter
      ): void;
      static deserializeBinary(bytes: Uint8Array): Chunking;
      static deserializeBinaryFromReader(
        message: Chunking,
        reader: jspb.BinaryReader
      ): Chunking;
    }

    export namespace Chunking {
      export type AsObject = {
        pointer: string;
        perpage: string;
      };
    }
  }

  export class Result extends jspb.Message {
    getDatapointList(): Array<number>;
    setDatapointList(value: Array<number>): Result;
    clearDatapointList(): Result;
    addDatapoint(value: number, index?: number): Result;

    getTimestamp(): string;
    setTimestamp(value: string): Result;

    getUpdateId(): string;
    setUpdateId(value: string): Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static serializeBinaryToWriter(
      message: Result,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(
      message: Result,
      reader: jspb.BinaryReader
    ): Result;
  }

  export namespace Result {
    export type AsObject = {
      datapointList: Array<number>;
      timestamp: string;
      updateId: string;
    };
  }
}
