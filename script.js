<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>QR Code Generator</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
</head>
<body>

<div id="qrcode"></div>

<script>
function generateQrCodeContent() {
    const skills = [
        "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Python",
        "SQL (PostgreSQL, MySQL)", "Git/GitHub", "RESTful APIs", "AWS Basics"
    ];

    const certifications = [
        "Certified Web Developer (Udemy)",
        "JavaScript Algorithms and Data Structures (freeCodeCamp)",
        "AWS Cloud Practitioner (in progress)"
    ];

    const address = {
        street: "123 Tech Lane",
        city: "Vijayawada",
        state: "Andhra Pradesh",
        zip: "520008",
        country: "India"
    };

    // Create a Google Maps link for the address
    const googleMapsLink = https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country})};

    let content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>More Details - Your Name</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 800px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                h1, h2 {
                    color: #2c3e50;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                ul li {
                    background: #ecf0f1;
                    margin-bottom: 8px;
                    padding: 10px 15px;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                }
                ul li::before {
                    content: '•';
                    color: #3498db;
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                    margin-left: -1em;
                }
                .section-title {
                    border-bottom: 2px solid #3498db;
                    padding-bottom: 5px;
                    margin-bottom: 15px;
                }
                .address-link {
                    display: inline-block;
                    margin-top: 15px;
                    padding: 10px 15px;
                    background-color: #3498db;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                .address-link:hover {
                    background-color: #2980b9;
                }
            </style>
        </head>
        <body>
            <h1>More About Your Name</h1>

            <h2 class="section-title">Technical Skills</h2>
            <ul>
                ${skills.map(skill => <li>${skill}</li>).join('')}
            </ul>

            <h2 class="section-title">Certification Courses</h2>
            <ul>
                ${certifications.map(cert => <li>${cert}</li>).join('')}
            </ul>

            <h2 class="section-title">Address</h2>
            <p>${address.street}<br>
               ${address.city}, ${address.state} - ${address.zip}<br>
               ${address.country}</p>
            <a href="${googleMapsLink}" target="_blank" class="address-link">View on Google Maps</a>
        </body>
        </html>
    `;
    return content;
}

// Generate QR code on page load
window.onload = function () {
    const qrCodeDiv = document.getElementById("qrcode");
    if (qrCodeDiv) {
        const detailsPageContent = generateQrCodeContent();

        // Encode the HTML content into a data URL
        const dataUrl = data:text/html;charset=utf-8,${encodeURIComponent(detailsPageContent)};

        // Generate QR code
        new QRCode(qrCodeDiv, {
            text: dataUrl,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Optional: Click the QR code to open preview
        qrCodeDiv.onclick = function () {
            const newWindow = window.open();
            newWindow.document.write(detailsPageContent);
            newWindow.document.close();
        };
    }
};
</script>

</body>
</html>