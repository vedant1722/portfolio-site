export function generateUrl(base: string, path: string, queryParams: { [key: string]: string | string[] } = {}) {
    let url =  `${base}${path}`;
    
    let prefix = "?";
    const appendQueryParam = (key: string, value: string) => {
        url += `${prefix}${key}=${value}`;
        prefix = "&";
    }
    
    Object.entries(queryParams).forEach(([key, value]) =>{
        if (Array.isArray(value)) {
            value.forEach(v => appendQueryParam(key, v));
        } else {
            appendQueryParam(key, value);
        }
    });

    return url;
}

export function generateImageUrl(imgPath: string, tr:string=null) {
    const imagekitId = "zmc91qb0y1t";
    const baseUrl = `https://ik.imagekit.io/${imagekitId}`;
    const fullpath = `${(tr ? "/"+tr : '')}/portfolio/${imgPath}`
    return generateUrl(baseUrl, fullpath);
}