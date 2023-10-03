document.addEventListener("DOMContentLoaded", function () {
    const userInfo = getCookie("userInfo");
    const userInfoDiv = document.getElementById("user-info");

    if (!userInfo) {
        // Collect user information if not already collected
        const name = prompt("Please enter your name:");
        const studentID = prompt("Please enter your student ID:");

        if (name && studentID && /^[a-zA-Z\s]+$/.test(name) && /^\d{6}$/.test(studentID)) {
            // Store user information in a cookie
            const user = { name, studentID };
            setCookie("userInfo", JSON.stringify(user), 365); // Store for 1 year
            userInfoDiv.textContent = `Welcome, ${name} (Student ID: ${studentID})`;
        } else {
            userInfoDiv.textContent = "Invalid information. Please refresh the page.";
        }
    } else {
        // Display user information if already collected
        const user = JSON.parse(userInfo);
        userInfoDiv.textContent = `Welcome, ${user.name} (Student ID: ${user.studentID})`;
    }
});

// Helper function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Helper function to get a cookie by name
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith(cookieName)) {
            return trimmedCookie.substring(cookieName.length, trimmedCookie.length);
        }
    }
    return null;
}
