<script type="ts">
import { goto } from "$app/navigation";


    // export let buttonType = 'primary';
    // export let flat = false;
    export let inverse: boolean = true;
    export let disabled: boolean = false;
    export let link: string|undefined = undefined;

    const handleClick = (  ) : void => {
        if (link) {
            goto(link);
        }
    }

</script>



<button 
class="
my-5
font-bold
cursor-pointer
py-2 px-4 
border
rounded
border-orange-600
text-orange-600
hover:border-transparent
hover:text-white
hover:drop-shadow-lg
hover:bg-orange-600
transition-colors
disabled:hover:drop-shadow-none
disabled:hover:border-orange-600
disabled:hover:text-orange-600
disabled:hover:cursor-not-allowed
disabled:opacity-25"
class:inverse={inverse}
disabled={disabled}
on:click={handleClick}
>
    <slot></slot>
</button>
