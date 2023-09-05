import Card from "../../ui/cards/Card.jsx";
import {useState} from "react";

import "../creation.scss"

const PhotosContent = ({onSubmit}) => {

    const [uploadedImages, setUploadedImages] = useState([]);

    const [data, setData] = useState({
        images: [],
    });

    const handleImageUpload = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages([...uploadedImages, ...imagesArray]);

        const imagePromises = Array.from(files).map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then((imageDataArray) => {
            // Merge the image data into the data variable
            setData((prevData) => ({
                ...prevData,
                images: [...prevData.images, ...imageDataArray],
            }));
        });

        console.log(data)
    };


    const handleImageRemove = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);

        setData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index),
        }));

        console.log(data)
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages([...uploadedImages, ...imagesArray]);

        const imagePromises = Array.from(files).map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then((imageDataArray) => {
            // Merge the image data into the data variable
            setData((prevData) => ({
                ...prevData,
                images: [...prevData.images, ...imageDataArray],
            }));
        });
    };

    const handleSubmit = () => {
        // Here, you can access formData and send it to Firebase or perform other actions.
        onSubmit(data);
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
            <div className="button-container final">
                <button className={"doc-button close"}>
                    Cancelar
                </button>
                <button className={"doc-button save"} onClick={handleSubmit}>
                    Guardar
                </button>
            </div>
        </>
    )
}

export default PhotosContent