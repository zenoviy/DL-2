export const linkNameCreator = (name) => {
    const regex = new RegExp(/\s\W\w/g);
    
    return name.replace(regex, '-')
    .replaceAll('/', '-')
    .split(' ')
    .map(char => char.toLowerCase())
    .join('')
}

export const convertSearchToObject = (target) => {
    let linkObject = {};
    const urlSearch = new URLSearchParams(target)

    for(let [key, val] of urlSearch.entries()){
        linkObject[key] = val;
    } 
    return linkObject
}


export const pictureSourceDefine = (source) => {
    const regexp = new RegExp(/^(http|https)/);
    return source.match(regexp)
} 
