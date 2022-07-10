import { Link, useParams } from "solid-app-router";
import { Component, createResource } from "solid-js";
async function getContent(id: number) {
    const req = await fetch(`/api/design-galleries/${id}`);
    const res = await req.json();

    return res;
}
const ViewDesignGalleryPage: Component = () => {
    const { id } = useParams();
    const [galleries] = createResource(id, getContent);
    return (
        <>
            <h1>View Gallery</h1>
            {!galleries.loading && <>
                <h2>{galleries().name}</h2>
                <p>{galleries().description}</p>
                <span>Created: {galleries().createdAt}</span>
                {galleries().isDemo && <span>Note: this is a site that was created specifically to show our capabilities.</span>}
            </>}
        </>
    );
};

export default ViewDesignGalleryPage;
