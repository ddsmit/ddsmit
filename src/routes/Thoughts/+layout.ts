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


function createTree(pages: any): any {
    const root: any = {}
    
    pages.forEach(page => {
        let slug = getSlug(page)
        if (!slug) return
        // Remove leading "Thoughts/" since it's the root
        slug = slug.replace(/^Thoughts\//, '')
        if (!slug) return

        
        const parts = slug.split('/').filter(p => p)
        let current = root
        // Navigate/create nested structure
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]
            const isLeaf = i === parts.length - 1
            let slug_part = parts.slice(0, i + 1).join('/')
            if (!current[part]) {
                current[part] = {
                    name: part.replaceAll('-', ' '),
                    slug: pages.includes(`./${slug_part}/+page.svelte`) ? `Thoughts/${slug_part}` : '',
                    _children: {}
                }
            }
            
            if (isLeaf) {
                current[part].slug = `Thoughts/${slug}`
            } else {
                current = current[part]._children
            }
        }
    })
    
    // Convert nested object to array structure
    const convertToArray = (obj: any): any[] => {
        return Object.values(obj).map(item => ({
            name: item.name,
            slug: item.slug,
            children: Object.keys(item._children || {}).length > 0 ? convertToArray(item._children) : []
        }))
    }
    
    return convertToArray(root)
}



export async function load() {
    const pages = [
        ...Object.keys(import.meta.glob(['./**/*.svelte','!./+page.svelte','!./**/+layout.svelte'],{ eager: true, as: "raw" }))
    ].filter((page)=>{return !page.includes('[slug]')})
    const boards = [...await getBoards()].map((value)=> {return `./Boards/${value.slug.current}/+page.svelte`})
    let allPages = pages.concat(boards).sort()
    const allPosts = {
        name: 'Thoughts',
        slug: 'Thoughts',
        children: createTree(allPages)
    }
    return {
        posts: allPosts,
        articles: pages
            .filter(
                page => page.includes('Articles') 
                && page.includes('+page.svelte') 
                && page !== './Articles/+page.svelte'
            ).map(page => {
                return {
                    name: getName(page),
                    slug: getSlug(page)
                }
            })
    }
}   