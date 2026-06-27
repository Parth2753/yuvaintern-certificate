document.addEventListener("DOMContentLoaded", function () {

    // Verification Time
    const today = new Date();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };

    const verifyTime = document.createElement("p");
    verifyTime.className = "verify-time";
    verifyTime.innerHTML =
        "<strong>Last Verified:</strong> " +
        today.toLocaleString("en-IN", options);

    document.querySelector("footer").prepend(verifyTime);

    // Copy Certificate ID
    const rows = document.querySelectorAll(".row");

    rows.forEach(row => {

        const label = row.querySelector("span");

        if (label && label.textContent === "Certificate ID") {

            row.style.cursor = "pointer";

            row.title = "Click to copy Certificate ID";

            row.addEventListener("click", () => {

                const id = row.querySelector("strong").textContent;

                navigator.clipboard.writeText(id);

                alert("Certificate ID copied:\n" + id);

            });

        }

    });

    // Button Click Effect
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {

        btn.addEventListener("click", function () {

            this.style.opacity = ".7";

            setTimeout(() => {

                this.style.opacity = "1";

            }, 300);

        });

    });

});
