<script>
    import t, { add, use } from '$lib/aigakira-i18n'
    import en from '$locale/en.json'
    import id from '$locale/id.json'
    
    add('en', en)
    add('id', id)

    let chosenLang = "en"

    $: use(chosenLang)

    let totalFish = 0
</script>

<select bind:value={chosenLang}>
    <option value="en">en</option>
    <option value="id">id</option>
</select>

<h1>{ $t('homepage.title', { name: "arik" }).get('ini title') }</h1>
<p>{ $t('homepage.caption').get() }</p>
<p>{ $t('homepage.fish', { name: "arik", counter: totalFish }).plural(totalFish).get() }</p>
