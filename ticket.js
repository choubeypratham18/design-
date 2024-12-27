const uploadContainer = document.getElementById('uploadContainer');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    const previewImage = document.getElementById('previewImage');

    let uploadedImageSrc = ''; // Variable to store the uploaded image source
    // Handle drag and drop events
    uploadContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadContainer.classList.add('dragover');
    });

    uploadContainer.addEventListener('dragleave', () => {
        uploadContainer.classList.remove('dragover');
    });

    uploadContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadContainer.classList.remove('dragover');

        const file = e.dataTransfer.files[0];
        handleFile(file);
    });

    // Handle file input click
    uploadContainer.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleFile(file);
    });

     //Function to handle file
    function handleFile(file) {
        if (!file || !file.type.startsWith('image/')) {
            alert('Only image files are supported!');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            preview.style.display = 'block';
            previewImage.src = e.target.result;
            uploadedImageSrc = e.target.result; // Save the uploaded image source
        };
        reader.readAsDataURL(file);
    }

    function generateTicket() {
        const fullName = document.getElementById('fullName').value;
        const emailAddress = document.getElementById('emailAddress').value;
        const githubUsername = document.getElementById('githubUsername').value;

        if (!uploadedImageSrc || !fullName || !emailAddress || !githubUsername) {
            alert('Please fill in all the fields.');
            return;
        }

        const ticketId = 'CONF-' + Math.random().toString(36).substr(2, 8).toUpperCase();

        const outputDiv = document.getElementById('ticketOutput');
        outputDiv.style.display = 'block';
        outputDiv.innerHTML = `
            <h1>Thank You</h1>
            <h2>🎉 Ticket Generated!</h2>
            <img src="${uploadedImageSrc}" alt="Uploaded Image" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
            <p><strong>Ticket ID:</strong> ${ticketId}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${emailAddress}</p>
            <p><strong>GitHub:</strong> ${githubUsername}</p>
        `;
    }
