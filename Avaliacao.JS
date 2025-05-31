const listaStorage = localStorage.getItem("listaLivros");
let listaLivros = [];
if (listaStorage) {
  listaLivros = JSON.parse(listaStorage);
}

function buscartitulo() {
    const inputtitle = document.getElementById("input_title");
    const valortitulo = inputCep.value;
    console.log("buscando titulo " + valortitulo);
    fetch("https://brasilapi.com.br/api/isbn/v1/{isbn}" + valortitulo)
      .then((resposta) => {
        return resposta.json();
      })
      .then((json) => {
        console.log(json);
        const inputtitle = document.getElementById("input_title");
        inputtitle.value = json.title;
  
        const inputsubttitle = document.getElementById("input_subtitle");
        inputsubtitle.value = json.subtitle
  
        const inputauthor = document.getElementById("input_author");
        inputauthor.value = json.author

        const inputpublisher = document.getElementById("input_publisher");
        inputpublisher.value = json.publisher

        const inputsinopsis = document.getElementById("input_sinopsis");
        inputsinopsis.value = json.sinopsis

        const inputyear = document.getElementById("input_year");
        inputyear.value = json.year

        const inputpage_count = document.getElementById("input_page_count");
        inputpage_count.value = json.page_count

        const inputsubject = document.getElementById("input_subject");
        inputsubject.value = json.subject

        const inputcover_url = document.getElementById("input_cover_url");
        inputcover_url.value = json.cover_url

      });
  }
  
  function clicarSalvar() {
    console.log("Clicou para salvar");
    const inputtitle = document.getElementById("input_title");
    const valortitle = inputtitle.value;
  
    const inputsubtitle = document.getElementById("input_subtitle");
    const valorsubtitle = subtitle.value;
  
    const inputauthor = document.getElementById("input_author");
    const valorauthor = inputauthor.value;
  
    const inputpublisher = document.getElementById("input_publisher");
    const valorpublisher = inputpublisher.value;
  
    const inputsinopsis = document.getElementById("input_sinopsis");
    const valorsinopsis = inputsinopsis.value;

    const inputtyear = document.getElementById("input_year");
    const valoryear = year.value;

    const inputpage_count = document.getElementById("input_page_count");
    const valorpage_count = page_count.value;

    const inputsubject = document.getElementById("input_subject");
    const valorsubject = valorsubject.value;

    const inputcover_url = document.getElementById("input_cover_url");
    const valorcover_url = cover_urlt.value;
  
    const novoEndereco = {
      title: valortitle,
      subtitle: valorsubtitle,
      author: valorauthor,
      publisher: valorpublisher,
      sinopsis: valorsinopsis,
      year: valoryear,
      page_count: valorpage_count,
      subject: valorsubject,
      cover_url: valorcover_url,




}}



{
  listaLivros.push(novoLivro);
  console.log(listaLivros);
  localStorage.setItem("listaLivros", JSON.stringify(listaLivros));
  alert("Livro salvo com sucesso!");
}

function configurarEventos() {
  const botaoSalvar = document.getElementById("botao_salvar");
  botaoSalvar.addEventListener("click", clicarSalvar);
}

window.addEventListener("load", configurarEventos);