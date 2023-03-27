const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// const setTimer = (method, url, data) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return fetch(url, {
//         method: method,
//         body: data,
//       });
//     }, 20);
//   });
//   return promise;
// };

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data,
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then(errData => {
          console.log(errData);
          throw new Error("Something went wrong - server-side.");
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}

function toggleLoader(isLoading) {
    fetchButton.disabled = isLoading;
    fetchButton.classList.toggle('disabled')
    fetchButton.innerHTML = isLoading ? 'FETCHING...' : 'FETCH POSTS'
}

async function fetchPosts() {
    toggleLoader(true);
  const to = await new Promise(resolve => setTimeout(resolve, 2000));
  try {
    const responseData = await sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    const listOfPosts = responseData;
    console.log(listOfPosts);
    toggleLoader(false);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();

  const fd = new FormData(form);
  fd.append('title', title);
  fd.append('body', content);
  fd.append("userId", userId);

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
