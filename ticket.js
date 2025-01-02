// Get references to DOM elements
const uploadContainer = document.getElementById('uploadContainer');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    const previewImage = document.getElementById('previewImage');

    let uploadedImageSrc = ''; // Variable to store the uploaded image source
    // Handle drag and drop events
    uploadContainer.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default behavior (e.g., opening file in browser)
        e.stopPropagation();    // Stop event propagation
        uploadContainer.classList.add('dragover');  // Add visual feedback for dragover
    });
// Remove visual feedback when the drag leaves the container
    uploadContainer.addEventListener('dragleave', () => {
        uploadContainer.classList.remove('dragover');
    });
// Handle file drop event
    uploadContainer.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default behavior
        e.stopPropagation();    // Stop event propagation

        uploadContainer.classList.remove('dragover');   // Remove dragover visual feedback

        const file = e.dataTransfer.files[0];    // Get the first file from the dropped files
        handleFile(file);   // Process the file
    });

    // Handle file input click
    uploadContainer.addEventListener('click', () => {
        fileInput.click();
    });
// Handle file selection via the file input
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];  // Get the selected file
        handleFile(file);   // Process the file
    });

     //Function to handle file
    function handleFile(file) {
        if (!file || !file.type.startsWith('image/')) {
              // Alert if the file is invalid or not an image
            alert('Only image files are supported!');
            return;
        }

        const reader = new FileReader();     // Create a FileReader instance
        reader.onload = (e) => {
            // Display the preview of the uploaded image
            preview.style.display = 'block';
            previewImage.src = e.target.result; // Set the image preview source
            uploadedImageSrc = e.target.result; // Save the uploaded image source
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
// Function to generate a ticket with user details and the uploaded image
    function generateTicket() {
        const fullName = document.getElementById('fullName').value; // Get full name input
        const emailAddress = document.getElementById('emailAddress').value; // Get email input
        const githubUsername = document.getElementById('githubUsername').value; // Get GitHub username input
        // Validate that all required inputs are provided
        if (!uploadedImageSrc || !fullName || !emailAddress || !githubUsername) {
            alert('Please fill in all the fields.');    // Show alert if any field is missing
            return;
        }
         // Generate a unique ticket ID
        const ticketId = 'CONF-' + Math.random().toString(36).substr(2, 8).toUpperCase();
           // Display the generated ticket in the output div
        const outputDiv = document.getElementById('ticketOutput');
        outputDiv.style.display = 'block';   // Make the output div visible
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

