function checkLoginStatus() {
    // Make an HTTP request to the check_login_status.php script
    fetch('check_login_status.php')
        .then(response => response.json())
        .then(data => {
            // Check if the user is logged in
            if (data.isLoggedIn) {
                // Redirect to the profile page
                location.href = './profile.html';
            } else {
                // Redirect to the login page
                location.href = './login.html';
            }
        })
        .catch(error => console.error(error));
}