import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter({
      edge: false,
      split: true
    })
  }
};

// module.exports = {
//   pluginOptions: {
//     electronBuilder: {
//       // List native deps here if they don't work
//       externals: ['fseventsc'],
//       // If you are using Yarn Workspaces, you may have multiple node_modules folders
//       // List them all here so that VCP Electron Builder can find them
//       nodeModulesPath: ['../../node_modules', './node_modules']
//     }
//   }
// }

