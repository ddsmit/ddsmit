import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","img/dave.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c08d503e.js","app":"_app/immutable/entry/app.e15a866e.js","imports":["_app/immutable/entry/start.c08d503e.js","_app/immutable/chunks/index.778a1c37.js","_app/immutable/chunks/singletons.db3a85eb.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.e15a866e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.778a1c37.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/12.js'))
		],
		routes: [
			{
				id: "/Thoughts/TIL/2023December23/What-Is-A-Parking-Lot",
				pattern: /^\/Thoughts\/TIL\/2023December23\/What-Is-A-Parking-Lot\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
