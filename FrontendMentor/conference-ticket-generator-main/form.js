const hiddenUploadAction = document.querySelector("#upload");
const dropZone = document.querySelector(".drop-zone");
const uploadPreview = document.querySelector("#uploaded-avatar");
const hiddenBtns = document.querySelector('.hidden-btns');
const uploadHint = document.querySelector('#upload-hint');

const previewIcon = uploadPreview.src;
// Need window's getComputedStyle function to fetch CSS styling
// getAttribute only grabs from HTML styling
const previewPadding = window.getComputedStyle(uploadPreview).padding;

// To trigger another event's click within a different event
// --just call its .click() function.
dropZone.addEventListener('click', (e) => {
    hiddenUploadAction.click();
});

// Standard function notation to preserve 'this' context
hiddenUploadAction.addEventListener('change', function(e) {
    // Always access the first element, because only one upload permitted
    const file = this.files[0];
    
    if (file) {
        readFile(file);
    }
});

// DOM Update when an image is uploaded
function dropZoneUpdate() {
    uploadHint.classList.add('hide');
    hiddenBtns.classList.remove('hide');
};

let isDefaultImage = true;

// JS FileReader Web API
function readFile(file) {
    const reader = new FileReader();
    
    reader.addEventListener('load', (e) => {
        const fileContents = e.target.result;
        uploadPreview.setAttribute('src', `${fileContents}`);
        // Make image fill its container
        // Original icon needed padding
        isDefaultImage = false;
        uploadPreview.style.padding = '0';

        if (hiddenBtns.classList.contains('hide')) {
            dropZoneUpdate();
        };
    });
    reader.readAsDataURL(file);
};

function removeImage() {
    uploadPreview.setAttribute('src', previewIcon);
    uploadPreview.style.padding = `${previewPadding}`;
    isDefaultImage = true;

    uploadHint.classList.remove('hide');
    hiddenBtns.classList.add('hide');
};

const removeBtn = document.querySelector('#remove-btn');

removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    removeImage();
});