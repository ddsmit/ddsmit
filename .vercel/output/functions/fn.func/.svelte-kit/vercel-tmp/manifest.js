export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","img/Mastodon_Logotype.svg","img/dave.png","img/favicon.png","img/main.webp"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.649eaf81.js","app":"_app/immutable/entry/app.0608e675.js","imports":["_app/immutable/entry/start.649eaf81.js","_app/immutable/chunks/index.a0601391.js","_app/immutable/chunks/singletons.bed4cce4.js","_app/immutable/entry/app.0608e675.js","_app/immutable/chunks/index.a0601391.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js')
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
				id: "/Thoughts",
				pattern: /^\/Thoughts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Thoughts/Data/What-Is-A-Data",
				pattern: /^\/Thoughts\/Data\/What-Is-A-Data\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Thoughts/LearningPath/Rust",
				pattern: /^\/Thoughts\/LearningPath\/Rust\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Thoughts/My-Family/Kiddos/Cyddy-Biddy-Art",
				pattern: /^\/Thoughts\/My-Family\/Kiddos\/Cyddy-Biddy-Art\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Thoughts/My-Family/My-Wife",
				pattern: /^\/Thoughts\/My-Family\/My-Wife\/?$/,
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
				id: "/Thoughts/this.site/ResourcesUsed",
				pattern: /^\/Thoughts\/this\.site\/ResourcesUsed\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
