<script>
    import FormContato from './FormContato.svelte';

    let contatos = [];

    $: numContatos = contatos.length;

    const salvarContato = (event) => {
        contatos = [...contatos, {
            nome: event.detail.nome,
            telefone: event.detail.telefone
        }]
    };

    const excluirContato = (idx) => {
        let copy = [...contatos];
        copy.splice(idx, 1);
        contatos = copy;
    };
</script>

<main>
    <h1>Agenda Svelte</h1>

    <hr>

    <FormContato on:novo-contato={salvarContato} />

    <div class="list-group">
        {#if numContatos <= 0}
            <p>Adicione um contato na agenda...</p>
        {:else}
            <p>Há {numContatos} contatos na agenda.</p>
        {/if}

        {#each contatos as contato, index}
            <div class="list-group-item">
                <span class="nome_class">Nome: <strong>{ contato.nome }</strong></span>
                <p>
                    <span class="telefone_class">
                        Telefone: <strong>{ contato.telefone }</strong>
                    </span>
                </p>
                <div>
                    <button title="Excluir"
                            on:click={() => excluirContato(index)}>
                        Excluir
                    </button>
                </div>
            </div>
        {/each}

     </div>

     <hr />
</main>

<style>
    .nome_class {
        margin-top: 3px;
    }
</style>
