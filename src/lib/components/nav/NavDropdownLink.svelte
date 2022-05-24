<script lang="ts">
  export let link: string;
</script>

<a
  href={link}
  class="px-3 py-2 rounded-md transition-all duration-100 opacity-0 hover:bg-transparent sm:hover:bg-transparent group-hover:opacity-100"
  ><slot /></a
>
