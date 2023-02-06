

export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=HCyQoD2NfCH8P5Yh8iS50SiNNTDZ4V5W&q=${category}&limit=6`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img =>({
        id: img.id,
        url: img.images.downsized_medium.url,
        title:img.title
    }))

    return gifs
}