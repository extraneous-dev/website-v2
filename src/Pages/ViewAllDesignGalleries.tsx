import { Link } from "solid-app-router";
import { Component, createResource } from "solid-js";
import Post from '../Types/Post'
async function getContent() {
    const req = await fetch('/api/design-galleries');
    const res = await req.json();

    return res;
}
const ViewAllDesignGalleriesPage: Component = () => {
    const [galleries] = createResource(getContent);
    return (
        <>
            <h1>All Galleries</h1>
            {!galleries.loading && galleries().docs.map((val: Post) => <>
                <h2><Link href={`/design-gallery/${val.id}`}>{val.name}</Link></h2>
                {val.isDemo && <span>DEMO</span>}
                <p>{val.description}</p>
                {val.images.length !== 0 && <img src={val.images[0].image.sizes.thumbnail.url} />}
            </>
            )}
        </>
    );
};

export default ViewAllDesignGalleriesPage;
