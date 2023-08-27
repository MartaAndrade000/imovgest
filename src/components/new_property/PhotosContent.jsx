import Card from "../ui/cards/Card.jsx";
import {useState} from "react";

import "../../scss/new_property_content.scss"

const PhotosContent = () => {

    const [uploadedImages, setUploadedImages] = useState([]);
    const handleImageUpload = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages([...uploadedImages, ...imagesArray]);
    };

    const handleImageRemove = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages([...uploadedImages, ...imagesArray]);
    };
    return (
        <>
            <div className={"tab-column"}>
                <Card title={"Fotografias"} className={"form-container"} content={
                    <div className={"form-wrapper1"}>
                        <div className={"form-group"}>
                            <div className={"form-label"}>
                                Fotos
                            </div>
                            <div className={"form-input"}>
                                <label
                                    htmlFor="image-upload"
                                    className="upload-area"
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    Clique aqui ou arraste uma imagem para adicionar
                                </label>
                                <input
                                    type="file"
                                    id="image-upload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    multiple
                                />
                                <div className="uploaded-images">
                                    {uploadedImages.map((image, index) => (
                                        <div className="uploaded-image" key={index}>
                                            <img src={image} alt={`Uploaded ${index}`}/>
                                            <span onClick={() => handleImageRemove(index)}>Remover</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }></Card>
            </div>
        </>
    )
}

export default PhotosContent