const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.getElementsByClassName('close')[0];
  const downloadLink = document.getElementById('download-link');
  const downloadButton = document.querySelector('.download-btn');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullImageSrc = item.querySelector('img').getAttribute('data-full');
      modal.style.display = 'block';
      modalImage.src = fullImageSrc;
      downloadLink.href = fullImageSrc;
    });
  });
  
  closeModal.onclick = function() {
    modal.style.display = 'none';
  };
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  
  downloadButton.onclick = function(event) {
    event.stopPropagation();
  };