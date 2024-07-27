import { getBoards } from "$lib/utils/sanity"

function getSlug(path: string): string {
    if (path.split('/').at(-1) == '+page.svelte') {
        return path.replace('.','Thoughts').replace('/+page.svelte','')
    } else {
        return ''
    }
    
}

function getName(path: string): any {
    let slug = getSlug(path)
    return slug.replaceAll('-',' ').split('/').at(-1)
}


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



export async function load() {
    const pages = [
        ...Object.keys(import.meta.glob(['./**/*.svelte','!./+page.svelte','!./**/+layout.svelte'],{ eager: true, as: "raw" }))
    ].filter((page)=>{return !page.includes('[slug]')})
    const boards = [...await getBoards()].map((value)=> {return `./Boards/${value.slug.current}/+page.svelte`})
    let allPages = pages.concat(boards).sort()
    console.log(allPages)
    const allPosts = {
        name: 'Thoughts',
        slug: 'Thoughts',
        children: createTree(allPages, {})
    }
    return {
        posts: allPosts,
        boards: boards,
    }
}


