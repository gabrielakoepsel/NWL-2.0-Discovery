//Procurar o botão
document
  .querySelector("#add-time")
  //Quando clicar no botão
  .addEventListener("click", cloneField);


function isLastScheduleItemFilled() {
  const scheduleItems = Array.from(document.querySelectorAll('.schedule-item'));

  const lastItem = scheduleItems.pop();

  const date = lastItem.querySelector('#weekday');
  const timeFields = lastItem.querySelectorAll("input");

  let isFilled = true

  timeFields.forEach(function (input) {
    if (input.value == "") {
      isFilled = false;
    }
  });

  if (date.value == "") {
    isFilled = false;
  }

  return isFilled;
}

//Executar uma ação
function cloneField() {
  if (isLastScheduleItemFilled()) {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document
      .querySelector(".schedule-item")
      .cloneNode(true); //boolean: true or false

    //pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll("input");

    //para cada campo, limpar
    fields.forEach(function (field) {
      //pegar o field do momento e limpar
      field.value = "";
    });

    //Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
  } else {
    alert("Você precisa preencher todos os campos antes de adicionar um novo horário.")
  }
}
