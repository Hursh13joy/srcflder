// Store uploaded images in an array
let gallery = [];

// Function to upload image and display it in the gallery
function uploadImage() {
    const fileInput = document.getElementById('image-upload');
    const caption = document.getElementById('caption').value;

    if (!fileInput.files.length || !caption) {
        alert('Please select an image and add a caption.');
        return;
    }

    // Get the image file and create a URL for it
    const file = fileInput.files[0];
    const imageURL = URL.createObjectURL(file);

    // Create a new gallery item object
    const newImage = {
        src: imageURL,
        caption: caption,
        likes: 0,
    };

    // Add the new image to the gallery array
    gallery.push(newImage);

    // Display the updated gallery
    displayGallery();

    // Clear the form
    fileInput.value = '';
    document.getElementById('caption').value = '';
}

// Function to display all images in the gallery
function displayGallery() {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';

    gallery.forEach((image, index) => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('gallery-item');

        imageElement.innerHTML = `
            <img src="${image.src}" alt="Pet Photo">
            <p>${image.caption}</p>
            <div class="actions">
                <button onclick="likeImage(${index})">Like (${image.likes})</button>
            </div>
        `;

        galleryContainer.appendChild(imageElement);
    });
}

// Function to like an image
function likeImage(index) {
    gallery[index].likes += 1;
    displayGallery();
}
