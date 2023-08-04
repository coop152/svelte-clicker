<script lang="ts">
    import { storable } from "$lib/stores";
    import { onMount } from "svelte";
    import LoadingScreen from "./loadingScreen.svelte";
    import { fade } from "svelte/transition";

    let loading = true;
    let clicked = false;
    let score = storable("score", 0);
    let scorePerSecond = storable("scorePerSecond", 0);

    onMount(async () => {
        loading = false;
        let previousTime: number;
        let frame = requestAnimationFrame(loop);

        function loop(now: number) {
            requestAnimationFrame(loop);

            if (!previousTime) {
                previousTime = now;
            } else {
                let delta = (now - previousTime) / 1000;
                previousTime = now;
                let scoreToAdd = $scorePerSecond * delta;
                $score += scoreToAdd;
            }
        }
    });
</script>

<div class="container-fluid outermost" style="height:100vh">
    <!-- {#if loading}
        <LoadingScreen /> -->
        <div class="row h-100 gamescreen">
            <!-- Left column (clicker part) -->
            <div class="col-lg-8 col-md-7 col-12 left-column">
                <div class="h-100 d-flex flex-column">
                    <div class="row text-center">
                        <h2>Cookies: {Math.floor($score)}</h2>
                        <label>
                            Cookies per Second:
                            <input type="number" bind:value={$scorePerSecond} />
                        </label>
                    </div>
                    <div class="row flex-grow-1 justify-content-center">
                        <button
                            style="all: unset"
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
                            <img
                                src="cookie.png"
                                alt="Click it!"
                                class="clicker"
                                class:clicked
                            />
                        </button>
                    </div>
                </div>
            </div>
            <!-- Right column (upgrade part)-->
            <div class="col-lg-4 col-md-5 col-12 right-column">
                <div class="row text-center">
                    <h2>Buy upgrades!</h2>
                </div>
            </div>
        </div>
</div>

<style>
    .outermost {
        background-color: black;
        color: rgba(255, 255, 255, 0.8);

    }

    .gamescreen {
        padding: 1em;
    }

    .left-column {
        background-color: #242424;
        padding: 1em;
    }

    .right-column {
        background-color: #242424;
        padding: 1em;
    }

    /* Medium breakpoint and below (mobile) */
    @media (max-width: 768px) {
        .left-column {
            border-bottom: 2px dashed black;
            border-top-left-radius: 1em;
            border-top-right-radius: 1em;
        }

        .right-column {
            border-top: 2px dashed black;
            border-bottom-left-radius: 1em;
            border-bottom-right-radius: 1em;
        }
    }

    /* Medium breakpoint and above (desktop) */
    @media (min-width: 768px) {
        .left-column {
            border-right: 2px dashed black;
            border-top-left-radius: 1em;
            border-bottom-left-radius: 1em;
        }

        .right-column {
            border-left: 2px dashed black;
            border-top-right-radius: 1em;
            border-bottom-right-radius: 1em;
        }
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
