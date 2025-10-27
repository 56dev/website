
async function displayTags()
{
    tag_display = document.getElementById("tag-display");
    const res = await fetch("./data/posts.json");
    const post_list = await res.json();
    let filename = window.location.href;
    filename = filename.split(/(\\|\/)/g).pop()
    const this_post = post_list.find(p => filename == p.url);
    this_post.tags.forEach((t) => {
        const span = document.createElement("span");
        span.classList.add("tag-holder")
        span.innerHTML = t;
        tag_display.appendChild(span);
    })
    
}

displayTags();