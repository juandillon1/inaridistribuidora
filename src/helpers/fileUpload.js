export const fileUpload = async ( file, id ) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/inaridistribuidora/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'inaridistribuidora');
    formData.append('public_id', id);
    formData.append('file', file);
    try{
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else{
            throw await resp.json();
        }
    } catch(e) {
        throw e;
    }
}