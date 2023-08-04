<script>
    import { fade } from "svelte/transition";
</script>

<div
    out:fade={{ duration: 200 }}
    class="d-flex justify-content-center align-items-center"
>
    <h1 class="">Loading...</h1>
</div>

<style>
     div {
        background-color: black;
        height: 100vh;
        width: 100vw;
        position: absolute;
        left: 0;
        top: 0;
     }
</style>
