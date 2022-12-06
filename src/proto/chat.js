/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  chat: {
    options: {
      go_package: "../msg/chat;chat"
    },
    nested: {
      Body: {
        fields: {
          Data: {
            type: "string",
            id: 1
          },
          Type: {
            type: "int32",
            id: 2
          },
          Size: {
            type: "int64",
            id: 3
          }
        }
      },
      Chat: {
        fields: {
          Id: {
            type: "int64",
            id: 1
          },
          From: {
            type: "int64",
            id: 2
          },
          To: {
            type: "int64",
            id: 3
          },
          Room: {
            type: "int64",
            id: 4
          },
          Data: {
            type: "Body",
            id: 5
          }
        }
      }
    }
  }
});

module.exports = $root;
