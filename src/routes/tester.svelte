<script context="module">
    const query = `
    query myQuery {
  mediaItems(where: {categoryIn: "465"}) {
    edges {
      node {
        sourceUrl
        srcSet
      }
    }
  }
}`;


      export async function load({ fetch }) {
        const response = await fetch(import.meta.env.VITE_PUBLIC_IHUB_URL, {
        // const response = await fetch("https://itineraryhub.com/graphql", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
          if (response.ok) {
        const responseObj = await response.json();
        // console.log (responseObj);
        const posts = responseObj.data.mediaItems.edges;
        console.log (posts)
              return {
                  props: {
                      posts
                  }
              };
          }
          return {
              status: response.status,
              error: new Error(`Could not load the URL`)
          };
      }
  </script>
  
  
  <script type="ts">
      export let posts: object[];

      console.log (posts)
  </script>
  
  <h1>Pictures</h1>
  {#if posts}
      {#each posts as post}
      <img src={post.node.sourceUrl} alt="" width="200px" srcset={post.node.srcSet}>
          
      {/each}
  {:else}
    <p>No posts found...</p>
  {/if}