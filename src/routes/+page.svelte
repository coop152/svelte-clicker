<script lang="ts">
    import { storable } from "$lib/stores";
    import { onMount } from "svelte";

    let clicked = false;
    let score = storable("score", 0);
    let scorePerSecond = storable("scorePerSecond", 0);
    
    onMount(async () => {
        let previousTime: number;
        let frame = requestAnimationFrame(loop);
        
        function loop(now: number) {
            requestAnimationFrame(loop);
            
            if (!previousTime) {
                previousTime = now;
            } else {
                let delta = (now - previousTime) /1000;
                previousTime = now;
                let scoreToAdd = $scorePerSecond * delta;
                $score += scoreToAdd;
            }
        }
    })
</script>

<div class="container-fluid" style="height:100vh">
    <div class="row h-100 outermost">
        <!-- Left column (clicker part) -->
        <div class="col-8 left-column">
            <div class="h-100 d-flex flex-column">
                <div class="row text-center">
                    <h2>Cookies: {Math.floor($score)}</h2>
                    <label>
                        Cookies per Second: 
                        <input type="number" bind:value={$scorePerSecond}>
                    </label>
                </div>
                <div class="row flex-grow-1 justify-content-center">
                    <button style="all: unset"
                    on:mousedown={() => {
                        clicked = true;
                        $score++;
                    }}
                    on:mouseup={() => {
                        clicked = false;
                    }}
                    on:mouseleave={() => {
                        clicked = false;
                    }}
                >
                    <!-- <div class="clicker border rounded shadow" class:clicked> </div> -->
                        <img src="cookie.png" alt="Click it!" class="clicker" class:clicked>
                </button>
                </div>
            </div>
        </div>
        <!-- Right column (upgrade part)-->
        <div class="col-4 right-column">
            <div class="row text-center">
                <h2>
                    Buy upgrades!
                </h2>
            </div>
        </div>
    </div>
</div>



<style>
    .outermost {
        background-color: black;
        color: rgba(255, 255, 255, 0.8);
        padding: 1em;
    }

    .left-column {
        background-color: #242424;
        border-right: 2px dashed black;
        border-top-left-radius: 1em;
        border-bottom-left-radius: 1em;
        padding: 1em;
    }

    .right-column {
        background-color: #242424;
        border-left: 2px dashed black;
        border-top-right-radius: 1em;
        border-bottom-right-radius: 1em;
        padding: 1em;
    }

    .clicker {
        width: 320px;
        height: 320px;
        /* transition: transform 0.1s ease-in-out; */
    }

    .clicked {
        transform: scale(0.9);
    }
</style>