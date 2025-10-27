const Ordering = {
    LAST_UPDATED: 0,
    LAST_CREATED: 1,
    OLDEST_FIRST: 2,
    OLDEST_UPDATED: 3
};
//based on last call to showPosts
let current_selected_tag = null
//based on last call to showPosts
let current_selected_order = 0;

async function loadPosts()
{
    const res = await fetch("./data/posts.json");
    const posts = await res.json();

    //get all unique tags
    const tags = [...new Set(posts.flatMap(p => p.tags))];

    const list = document.getElementById("tag-list");
    tags.forEach((tag) => {                
        const link = document.createElement("a");
        link.href = "#";
        link.onclick = () => {showPosts(tag, posts, current_selected_order); return false;};
        link.textContent = tag;
                
        list.appendChild(link);
    });

    const select = document.getElementById("ordering-options");
        select.addEventListener("change", () => {
        showPosts(current_selected_tag, posts, Number(select.value));
    });

        showPosts(current_selected_tag, posts, current_selected_order);
}
        

function showPosts(tag, posts, ordering)
{
    current_selected_tag = tag;
    current_selected_order = ordering;
    const list = document.getElementById("post-list");
    list.innerHTML = "";

    let predicate;
    if (ordering === Ordering.LAST_UPDATED)
    {
        predicate = (p1, p2) => new Date(p2.date_updated) - new Date(p1.date_updated);
    }
    else if(ordering === Ordering.LAST_CREATED)
    {
        predicate = (p1, p2) => new Date(p2.date_created) - new Date(p1.date_created);
    }
    else if(ordering === Ordering.OLDEST_FIRST)
    {
        predicate = (p1, p2) => new Date(p1.date_created) - new Date(p2.date_created);
    }
    else if(ordering === Ordering.OLDEST_UPDATED)
    {
        predicate = (p1, p2) => new Date(p1.date_updated) - new Date(p2.date_updated);
    }

    
    const filtered = (tag ? posts.filter(p => p.tags.includes(tag)) : posts).sort(predicate);

    filtered.forEach((p) => {

        const link = document.createElement("a");
        const list_element = document.createElement("li");

        link.href = p.url;
        link.textContent = p.title;
        
        list_element.appendChild(link);
        const dateObject = new Date(p.date_updated);
        const dateUpdatedFormatted = dateObject.toLocaleDateString('en-ca', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        list_element.innerHTML += " - Last Updated " + dateUpdatedFormatted;
        list.appendChild(list_element);

    });
    showTagDescription(tag);
}

async function showTagDescription(tag)
{
    const tag_description = document.getElementById("tag-desc");
    if(tag === null)
    {
        tag_description.innerHTML = "<b>No tag is selected.<b>"
        return;
    }

    const res = await fetch("./data/tags.json");
    const tags = await res.json();
    const tag_match = tags.find((t) => t.tag === tag);
    
    tag_description.innerHTML = `<b>Selected Tag: ${tag_match.tag}</b><br> ${tag_match.description}`;
    
}

loadPosts();