const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "E_Commerce_Product");

    console.log("Cloud Name:", process.env.REACT_APP_CLOUD_NAME_CLOUDINARY);  // Debugging log
    console.log("URL:", url);

    const dataResponse = await fetch(url, {
        method: "POST",
        body: formData,
    });

    if (!dataResponse.ok) {
        console.error("Upload failed:", dataResponse.statusText);
        throw new Error(`Upload failed: ${dataResponse.statusText}`);
    }

    return dataResponse.json();
};

export default uploadImage;
