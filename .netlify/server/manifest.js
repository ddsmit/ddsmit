export const manifest = (() => {
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
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Future",
				pattern: /^\/Future\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/History",
				pattern: /^\/History\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/History/[slug]",
				pattern: /^\/History\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/ReadList",
				pattern: /^\/ReadList\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Thoughts",
				pattern: /^\/Thoughts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Thoughts/A-Few-Of-My-Favorite-Things",
				pattern: /^\/Thoughts\/A-Few-Of-My-Favorite-Things\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Thoughts/My-RSI",
				pattern: /^\/Thoughts\/My-RSI\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Thoughts/TIL",
				pattern: /^\/Thoughts\/TIL\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/Thoughts/TIL/2023December23/What-Is-A-Parking-Lot",
				pattern: /^\/Thoughts\/TIL\/2023December23\/What-Is-A-Parking-Lot\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/Thoughts/Tech-Wish-List",
				pattern: /^\/Thoughts\/Tech-Wish-List\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/Thoughts/Tech-Wish-List/Azure-Data-Factories",
				pattern: /^\/Thoughts\/Tech-Wish-List\/Azure-Data-Factories\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/Thoughts/Tech-Wish-List/Power-BI",
				pattern: /^\/Thoughts\/Tech-Wish-List\/Power-BI\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/Thoughts/Tech-Wish-List/Python",
				pattern: /^\/Thoughts\/Tech-Wish-List\/Python\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/Thoughts/Tech-Wish-List/VSCode",
				pattern: /^\/Thoughts\/Tech-Wish-List\/VSCode\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/Thoughts/this.site/Resources-Used",
				pattern: /^\/Thoughts\/this\.site\/Resources-Used\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/api/metadata",
				pattern: /^\/api\/metadata\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/metadata/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
