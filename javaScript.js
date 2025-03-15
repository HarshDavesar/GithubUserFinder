
const inputField = document.getElementById('inputField');
const searching = document.getElementById('searching');
const searchBtn = document.getElementById('btn');


const gImg = document.getElementById('gImg');
const detailsImg = document.getElementById('details');
const userName = document.getElementById('userName');
const userId = document.getElementById('userId');
const userLocation = document.getElementById('location');
const userRepo = document.getElementById('userRepo');
const userFollower = document.getElementById('userFollower');
const userFollowing = document.getElementById('userFollowing');
const userLink = document.getElementById('userLink');
const err = document.getElementById('err');

let userVal = "";

document.addEventListener('DOMContentLoaded', () => {
    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            userVal = inputField.value.trim();



            if (userVal === "") {
                err.innerHTML = "Please enter a username!";
                return;
            }


            const reqUrl = `https://api.github.com/users/${userVal}`;


            async function getUserData() {

                try {
                    const response = await fetch(reqUrl)
                    if (response.ok === false) {
                        err.innerHTML = new Error("User not found");
                    }
                    const data = await response.json();
                    gImg.src = data.avatar_url;
                    userLink.innerHTML = `<a href="${data.html_url}" target="_blank">Profile</a>`;
                    userName.innerHTML = data.name || "N/A";
                    userId.innerHTML = data.id;
                    userLocation.innerHTML = data.location || "N/A";
                    userFollower.innerHTML = data.followers;
                    userFollowing.innerHTML = data.following;
                    userRepo.innerHTML = data.public_repos;
                }
                catch (err) {
                    err.innerHTML = "User not found or an error occurred!"
                }
            }

            getUserData()


        });
    }
});
