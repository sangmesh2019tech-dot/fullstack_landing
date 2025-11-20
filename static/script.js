document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    try {
        const response = await fetch("/submit", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        document.getElementById("message").textContent = data.message;
    } catch (err) {
        document.getElementById("message").textContent = "Error submitting form.";
    }
});
