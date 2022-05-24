<script context="module">
    const query = `
    query myQuery {
  pages {
    edges {
      node {
        id
        title
      }
    }
  }
}`;
      export async function load({ fetch }) {
      const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
          if (response.ok) {
        const responseObj = await response.json();
        // console.log (responseObj);
        const posts = responseObj.data.pages.edges;
        // console.log (posts)
              return {
                  props: {
                      posts
                  }
              };
          }
          return {
              status: response.status,
              error: new Error(`Could not load ${url}`)
          };
      }
  </script>
  
  
  <script type="ts">
      export let posts: object[];

      // console.log (posts)
  </script>
  
  <h1>Testimonials</h1>
  {#if posts}
    <ul>
      {#each posts as post}
        <li>
          {post.node.title}
        </li>
      {/each}
    </ul>
  {:else}
    <p>No posts found...</p>
  {/if}