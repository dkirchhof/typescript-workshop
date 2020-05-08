// /**
//  * 
//  * @param {"toUpperCase" | "toLowerCase"} transformFn 
//  * @param {{ firstname: string; lastname: string; }} me 
//  */
export function transformMeJS(transformFn, me) {
    return Object
        .entries(me)
        .reduce((transformed, [key, value]) => ({
            ...transformed,
            [key]: value[transformFn](),
        }), {});
}
