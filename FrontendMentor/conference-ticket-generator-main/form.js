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
    // Need to pass "this" into processFile since it
    // won't preserve "this" context
    processFile(this);
});

function processFile(input) {
    let file;

    // input.files conditional handles click and select from files event
    if (input.files) {
        file = input.files[0];
    // else conditional handles drag and drop from OS event
    } else {
        file = input;
    }

    if (file) {
        readFile(file);
    }
}

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

// Define the "drop zone"
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    
    if (e.dataTransfer.files) {
        processFile(e.dataTransfer.files[0]);
    }
});

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