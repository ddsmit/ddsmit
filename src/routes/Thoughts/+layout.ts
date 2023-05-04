function getSlug(path: string): string {
    if (path.split('/').at(-1) == '+page.svelte') {
        return path.replace('.','Thoughts').replace('/+page.svelte','')
    } else {
        return ''
    }
    
}

function getName(path: string): any {
    let slug = getSlug(path)
    return slug.split('/').at(-1).replaceAll('-',' ')
}

// function pageExists (name: string, pages: any): boolean {

// }

function createTree(pages: any, children: any): any {
    children =  !!children? []: children
    pages.forEach(page => {
        let name = getName(page)
        let slug = getSlug(page)
        children.push({
            name: name,
            slug: slug,
            children:[]
        })

    });
    return children
}



export function load() {
    const pages = Object.keys(import.meta.glob(['./**/*.svelte','!./+page.svelte','!./**/+layout.svelte']))
    console.log(import.meta.glob(['./**/*.svelte','!./+page.svelte','!./**/+layout.svelte'])['./LearningPath/Rust/+page.svelte'])

    const allPosts = {
        name: 'Thoughts',
        slug: 'Thoughts',
        children: createTree(pages, {})
    }
    return {
        posts: allPosts
    }
}

import("/src/routes/Thoughts/LearningPath/Rust/+page.svelte?t=1679237800492").then(result=>{console.log(result)})


// {
//     name:'TIL',
//     slug:'Thoughts/TIL',
//     children:[
//         {
//             name:'Coding',
//             children:[
//                 {
//                     name:'PythonADF',
//                     slug:'Thoughts/TIL/Coding/ADF-Python-SDK'
//                 }
//             ]
//         }
//     ]
//  }
// ,
// {
//     name:'Family',
//     slug:'Thoughts/Family',
//     children:[
//         {
//             name:'Wife',
//             slug:'Thoughts/Family/Wife',
//         },
//         {
//             name:'CyddyBiddyArt',
//             slug:'Thoughts/Family/CyddyBiddyArt',
//         }
//     ]
// }

