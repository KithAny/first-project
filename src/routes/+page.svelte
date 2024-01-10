  <script>
    import {goto} from '$app/navigation'


    const handleClick =()=>{
        console.log("place your order")

        goto('/products')
    }



</script>

<a href="/aboutme">About</a>
<a href="/profile">Profile</a>

<h1>Welcome to SvelteKit</h1>
<h2>Dashboard</h2>

<button on:click={handleClick}>Place Order</button>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
