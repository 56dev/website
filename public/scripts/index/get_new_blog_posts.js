
async function getNewBlogPosts()
{
    const res = await fetch("./blog/data/posts.json");
    const posts = await res.json();
    const list_element = document.getElementById("new-blog-posts")
    list_element.innerHTML = "";
    posts.sort((a, b) => new Date(b.date_updated) - new Date(a.date_updated));
    
    for(let i = 0; i < 2; i++)
    {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = posts[i].title;
        link.href = `./blog/${posts[i].url}`;
        li.appendChild(link);
        date_updated = new Date(posts[i].date_updated);
        const dateUpdatedFormatted = date_updated.toLocaleDateString('en-ca', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })

        li.innerHTML += `Last Updated - ${dateUpdatedFormatted}`;
        list_element.appendChild(li);
    }

}

getNewBlogPosts()

