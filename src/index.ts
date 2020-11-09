//
// Do not edit. This file was generated via the "pag" command line tool. More
// information about the tool can be found at github.com/xh3b4sd/pag.
//
//     pag generate typescript
//

// -------------------------------------------------------------------------- //

import * as MetricClient from "./pbf/metric/ApiServiceClientPb";
import * as MetricCreate from "./pbf/metric/create_pb";
import * as MetricDelete from "./pbf/metric/delete_pb";
import * as MetricSearch from "./pbf/metric/search_pb";
import * as MetricUpdate from "./pbf/metric/update_pb";

export const Metric = {
  Client: MetricClient.APIClient,
  Create: {
    I: MetricCreate.CreateI,
    O: MetricCreate.CreateO,
  },
  Delete: {
    I: MetricDelete.DeleteI,
    O: MetricDelete.DeleteO,
  },
  Search: {
    I: MetricSearch.SearchI,
    O: MetricSearch.SearchO,
  },
  Update: {
    I: MetricUpdate.UpdateI,
    O: MetricUpdate.UpdateO,
  },
};

// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //

import * as UpdateClient from "./pbf/update/ApiServiceClientPb";
import * as UpdateCreate from "./pbf/update/create_pb";
import * as UpdateDelete from "./pbf/update/delete_pb";
import * as UpdateSearch from "./pbf/update/search_pb";
import * as UpdateUpdate from "./pbf/update/update_pb";

export const Update = {
  Client: UpdateClient.APIClient,
  Create: {
    I: UpdateCreate.CreateI,
    O: UpdateCreate.CreateO,
  },
  Delete: {
    I: UpdateDelete.DeleteI,
    O: UpdateDelete.DeleteO,
  },
  Search: {
    I: UpdateSearch.SearchI,
    O: UpdateSearch.SearchO,
  },
  Update: {
    I: UpdateUpdate.UpdateI,
    O: UpdateUpdate.UpdateO,
  },
};

// -------------------------------------------------------------------------- //
