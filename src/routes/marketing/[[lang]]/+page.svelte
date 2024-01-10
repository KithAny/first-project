<script>
    import {page} from '$app/stores'

    const languages={
        en:"Hello !",
        es:"Hola !",
        fr:"bonjour !"
    }
    
    const {lang = 'en'} = $page.params

    const language = languages[lang]
</script>

<h1>{language}</h1>