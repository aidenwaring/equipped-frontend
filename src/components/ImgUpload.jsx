import React from 'react'

export default function ImgUpload() {

    const handleImageUpload = (event, id) => {
        event.preventDefault()
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'qnsvlare');
        formData.append('public_id', id)
        const options = {
        method: 'POST',
        body: formData,
        };

        return fetch('https://api.Cloudinary.com/v1_1/dgeizgzdw/image/upload', options)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        })
        .catch(err => console.log(err))
        }

    return(
        <div>
            <h1>Upload Image</h1>
            <form onSubmit={(event) => handleImageUpload(event,"foo")}>
                <input
                type="file"
                />
                {/* To be moved into complete product form */}
                <button>Submit</button>
            </form>
        </div>
    )
}