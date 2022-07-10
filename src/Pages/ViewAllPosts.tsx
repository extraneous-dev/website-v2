import { Link } from "solid-app-router";
import { Component, createResource } from "solid-js";
async function getContent() {
    const req = await fetch('/api/posts');
    const res = await req.json();

    return res;
}
const ViewAllPostsPage: Component = () => {
    const [projects] = createResource(getContent);
    return (
        <>
            <h1>All Completed Projects</h1>
            {!projects.loading && projects().docs.map(val => <>
                <h2><Link href={`/design-gallery/${val.id}`}>{val.name}</Link></h2>
                {val.isDemo && <span>DEMO</span>}
                <p>{val.description}</p>
                {val.images.length !== 0 && <img src={val.images[0].image.sizes.thumbnail.url} />}
            </>
            )}
        </>
    );
};

export default ViewAllPostsPage;
