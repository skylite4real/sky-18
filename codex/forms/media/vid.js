// Open the video upload section when the "Add Video" button is clicked
document.getElementById('addVideo').addEventListener('click', function() {
    document.getElementById('videoUploadSection').style.display = 'flex';
});

// Close the video upload section when the close icon is clicked
document.getElementById('closevideoUploadSection').addEventListener('click', function() {
    document.getElementById('videoUploadSection').style.display = 'none';
});

function toggleDescription(id) {
    var description = document.getElementById(id);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

function displayVideo(input) {
    var videoBox = document.getElementById('videoBox');
    var file = input.files[0];
    var url = URL.createObjectURL(file);
    
    // Create a new video element
    var video = document.createElement('video');
    video.id = 'uploadedVideo';
    video.src = url;
    video.controls = true;
    video.controlsList = 'nodownload';
    video.className = 'responsive-video';

    // Clear any existing content in the box and add the new video element
    videoBox.innerHTML = '';
    videoBox.appendChild(video);

    // Show the video box
    videoBox.style.display = 'flex';

    // Show the next button
    document.getElementById('nextButton').style.display = 'block';
}

function displayThumbnail(input) {
    var thumbnailBox = document.getElementById('thumbnailBox');
    var file = input.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        // Create a new img element
        var img = document.createElement('img');
        img.id = 'chosenThumbnail';
        img.src = e.target.result;
        img.alt = 'Thumbnail';
        img.className = 'responsive-thumbnail';
        
        // Clear any existing content in the box and add the new img element
        thumbnailBox.innerHTML = '';
        thumbnailBox.appendChild(img);

        // Show the thumbnail box
        thumbnailBox.style.display = 'flex';
    }
    
    reader.readAsDataURL(file);
}

function goToNext() {
    // Hide circle-1 content
    document.getElementById('circle1Content').style.display = 'none';
    // Show circle-2 content
    document.getElementById('circle2Content').style.display = 'block';
}
