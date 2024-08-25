function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Code to shorten URL using TinyURL API via Axios

document.getElementById("btn").onclick = async (event) => {
  event.preventDefault();
  const longUrl = document.getElementById("longUrl").value;
  const answer = document.getElementById("answer");
  if (!longUrl) {
    answer.style.display = "block";
    alert("Enter a valid URL address.");
    return;
  }
  try {
    const response = await axios.get(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
    );
    const shortenedUrl = response.data;
    answer.style.display = "block";
    answer.innerHTML = `Short URL: <a href="${shortenedUrl}" target="_blank" id="shortUrl">${shortenedUrl}</a>`;
  } catch (error) {
    console.error("Axios error:", error);
    answer.innerHTML = `An error occurred: ${error.message}`;
  }
};
