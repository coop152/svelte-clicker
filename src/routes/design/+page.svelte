<script lang="ts">
    let clicked = false;
</script>

<div class="container-fluid outermost">
    <div class="row fill">
        <!-- Clicker column -->
        <div class="col-8 left-column text-center p-3">
            <h1>Click it!</h1>
            <button style="all: unset"
                on:mousedown={() => {
                    clicked = true;
                }}
                on:mouseup={() => {
                    clicked = false;
                }}
                on:mouseleave={() => {
                    clicked = false;
                }}
            >
                <div class="clicker border rounded shadow" class:clicked>

                </div>
            </button>
        </div>
        <!-- Upgrade column -->
        <div class="col-4 right-column text-center p-3">
            <h2>Buy upgrades!</h2>
        </div>
    </div>
</div>



<style>
    .outermost {
        background-color: #242424;
        color: rgba(255, 255, 255, 0.8);
    }   

    .fill {
        min-height: 100vh;
    }

    .left-column {
        border-right: 4px grey solid;
    }

    .right-column {
        border-left: 4px grey solid;
    }

    .clicker {
        width: 320px;
        height: 320px;
        transition: transform 0.1s ease-in-out;
    }

    .clicked {
        transform: scale(0.9);
    }
</style>