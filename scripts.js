const paragraphCEP = document.getElementById("result-search-1");
const paragraphAdress = document.getElementById("result-search-2");
const paragraphComplement = document.getElementById("result-search-3");
const paragraphNeighborhood = document.getElementById("result-search-4");
const paragraphCity = document.getElementById("result-search-5");
const paragraphState = document.getElementById("result-search-6");
const inputCEP = document.getElementById("CEP-input");
const cleanButton = document.getElementById("clear");

function clearCEP() {
  inputCEP.value = "";

  paragraphCEP.innerHTML = "";
  paragraphAdress.innerHTML = "";
  paragraphComplement.innerHTML = "";
  paragraphNeighborhood.innerHTML = "";
  paragraphCity.innerHTML = "";
  paragraphState.innerHTML = "";
}

inputCEP.addEventListener("blur", async (e) => {
  const cepValue = inputCEP.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  try {
    const data = await fetch(
      `http://viacep.com.br/ws/${cepValue}/json/`,
      options
    ).then((response) => response.json());

    paragraphCEP.innerHTML = data.cep;
    paragraphAdress.innerHTML = data.logradouro;
    paragraphComplement.innerHTML = data.complemento;
    paragraphNeighborhood.innerHTML = data.bairro;
    paragraphCity.innerHTML = data.localidade;
    paragraphState.innerHTML = data.uf;
  } catch (err) {
    return alert("CEP Invalid");
  }
});
cleanButton.addEventListener("click", clearCEP);
