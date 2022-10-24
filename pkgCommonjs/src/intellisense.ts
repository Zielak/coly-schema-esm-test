import { MapSchema } from "@colyseus/schema"
//            ^                   ^- cmd/ctrl + click "@colyseus/schema"
//            |                      ✅ opens node_modules/@colyseus/schema/lib/index.d.ts
//            |                      picks that up from "package.json" field "types": "lib/index.d.ts"
// cmd/ctrl + click "MapSchema"
// ✅ opens node_modules/@colyseus/schema/lib/types/MapSchema.d.ts

const map = new MapSchema()
//     ^ ✅ correct type on hover: "const map: MapSchema<any, string>"

map
// ^ ✅ begin here and type dot `.`, all suggestions appear.

map.set(123456, "<- invalid key")
