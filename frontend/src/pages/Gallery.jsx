import { useState } from "react";
import "../styles/gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: "Smart Class",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000",
    },
    {
      id: 2,
      title: "Library",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000",
    },
    {
      id: 3,
      title: "Computer Lab",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
    },
    {
      id: 4,
      title: "Sports",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1000",
    },
    {
      id: 5,
      title: "Science Lab",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000",
    },
    {
      id: 6,
      title: "School Campus",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1000",
    },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-heading">
        <h1>Our Gallery</h1>
        <p>Memories & Moments of Excellence</p>
      </div>

      <div className="gallery-grid">
        {images.map((item) => (
          <div
            className="gallery-card"
            key={item.id}
            onClick={() => setSelectedImage(item.image)}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
            />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default Gallery;