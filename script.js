const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const quoteDisplayElement = document.getElementById("quote-display");
const quoteInputElement = document.getElementById("quote-input");

quoteInputElement.addEventListener("input", () => {
  console.log("changing");
});

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    // If the response is not 200 OK...
    if (!response.ok) {
      // ...throw an error. This causes control flow
      // to skip to the `catch` block below.
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json.message;
  } catch (err) {
    console.log(err);
    alert("Failed to fetch new quote");
  }
}

async function renderNewQuote() {
  const quote = await getQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
}

renderNewQuote();
