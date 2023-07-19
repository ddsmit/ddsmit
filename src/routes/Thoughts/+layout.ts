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
    // let pages = [
    //     './Data/What-Is-A-Data/+page.svelte',
    //     './LearningPath/Rust/+page.svelte',
    //     './My-Family/Kiddos/Cyddy-Biddy-Art/+page.svelte',
    //     './My-Family/My-Wife/+page.svelte',
    //     './TIL/+page.svelte',
    //     './TIL/Coding/ADF-Python-SDK/wip-page.svelte',
    //     './Tutorials/A-Non-Coders-Guide-To-GitHUB/wip-page.svelte',
    //     './this.site/ResourcesUsed/+page.svelte'
    // ]
    
    const allPosts = {
        name: 'Thoughts',
        slug: 'Thoughts',
        children: createTree(pages, {})
    }
    return {
        posts: allPosts
    }
}


