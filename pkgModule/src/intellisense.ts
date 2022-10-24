import { MapSchema } from "@colyseus/schema"
//            ^                   ^- cmd/ctrl + click "@colyseus/schema"
//            |                      opens node_modules/@colyseus/schema/build/esm/index.mjs
//            |                      instead of some .d.ts file
// cmd/ctrl + click "MapSchema"
// nothing happens

const map = new MapSchema()
//     ^ variable appears as of type `any`

map
// ^ begin here and type dot `.`, no suggestions appear.

map.set(123456, "<- invalid key, no error")
