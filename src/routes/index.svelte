<script>
    import t, { add, use } from '$lib/aigakira-i18n'
    import en from '$lib/locale/en.json'
    import id from '$lib/locale/id.json'
    
    add('en', en)
    add('id', id)

    let chosenLang = "en"

    $: use(chosenLang)
</script>

<select bind:value={chosenLang}>
    <option value="en">en</option>
    <option value="id">id</option>
</select>

<h1>{ $t('homepage.title').get('ini title') }</h1>
<p>{ $t('homepage.caption').get() }</p>
