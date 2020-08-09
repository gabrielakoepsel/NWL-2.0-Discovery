document.getElementById('schedule-items').addEventListener('click', function (event) {
    // if(se clicou no botao delete) {
    //   trate evento
    // }

    if (event.target && event.target.id == 'button-delete') {
        if (document.querySelectorAll('.schedule-item').length > 1) {
            event.target.parentNode.remove();
        } else {
            alert('Você precisa preencher no mínimo um horário.')
        }
    }
});

