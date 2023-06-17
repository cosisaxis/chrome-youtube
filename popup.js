document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadButton');
    const videoUrlInput = document.getElementById('videoUrlInput');
    const statusMessage = document.getElementById('statusMessage');
  
    downloadButton.addEventListener('click', function () {
      const videoUrl = videoUrlInput.value.trim();
  
      if (videoUrl) {
        chrome.runtime.sendMessage({ action: 'downloadVideo', videoUrl: videoUrl }, function (response) {
          if (response.success) {
            statusMessage.textContent = 'Video download initiated.';
          } else {
            statusMessage.textContent = 'Failed to initiate video download.';
          }
        });
      } else {
        statusMessage.textContent = 'Please enter a valid YouTube video link.';
      }
    });
  });
  