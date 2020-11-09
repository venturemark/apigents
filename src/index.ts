//
// Do not edit. This file was generated via the "pag" command line tool. More
// information about the tool can be found at github.com/xh3b4sd/pag.
//
//     pag generate typescript
//

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

// -------------------------------------------------------------------------- //

import * as UserClient from "./pbf/user/ApiServiceClientPb";
import * as UserCreate from "./pbf/user/create_pb";
import * as UserDelete from "./pbf/user/delete_pb";
import * as UserSearch from "./pbf/user/search_pb";
import * as UserUpdate from "./pbf/user/update_pb";

export const User = {
  Client: UserClient.APIClient,
  Create: {
    I: UserCreate.CreateI,
    O: UserCreate.CreateO,
  },
  Delete: {
    I: UserDelete.DeleteI,
    O: UserDelete.DeleteO,
  },
  Search: {
    I: UserSearch.SearchI,
    O: UserSearch.SearchO,
  },
  Update: {
    I: UserUpdate.UpdateI,
    O: UserUpdate.UpdateO,
  },
};

// -------------------------------------------------------------------------- //
