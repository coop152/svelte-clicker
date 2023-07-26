<script lang="ts">
    let clicked = false;
    let score = 0;

    function click() {
        clicked = true;
        score = 0
    }
</script>

<div class="container">
    <h1>Click it</h1>
    <h2>Score: {score}</h2>
    <button
        style="all: unset" 
        on:mousedown={() => {
            clicked = true;
            score++;
        }}
        on:mouseup={() => {
            clicked = false;
        }}
        on:mouseleave={() => {
            clicked = false;
        }}
    >
        <div class="border rounded shadow" id="clicker" class:clicked />
    </button>
</div>

<style>
    #clicker {
        width: 320px;
        height: 320px;
        transition: transform 0.1s ease-in-out;
    }

    .clicked {
        transform: scale(0.9);
    }
</style>
