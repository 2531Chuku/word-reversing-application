const container = document.querySelector(".formContainer");
function generateHTML(container) {
  const wordForm = document.createElement("div");
  wordForm.innerHTML = `<form id="wordSubmissionForm">
        <div>
          <label for="normalWord">Perfect Word:</label><br />
          <div class="inputs">
            <input
              type="text"
              id="normalWord"
              placeholder="Enter a word"
              name="normalWord"
            />
            <input type="submit" value="Submit" />
          </div>
        </div>
        <br />
        <div class="output">
          <label for="reversedWord">Reading Backward:</label><br />
          <textarea disabled="disabled" name="reversedWord" id="reversedWord">
          </textarea>
        </div>
      </form>`;
  container.appendChild(wordForm);
}
generateHTML(container);

const Form = document.getElementById("wordSubmissionForm");
function event(Form) {
  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    iterateWord();
  });
}
event(Form);

function iterateWord() {
  const input = document.getElementById("normalWord");
  const output = document.getElementById("reversedWord");
  userValue = input.value;

  Loop(userValue, output);
  clearInputBox(output, input);
}

function Loop(userValue, output) {
  let generateNewWord = "";
  for (let index = userValue.length - 1; index >= 0; index--) {
    generateNewWord += userValue[index];
  }
  output.innerHTML = generateNewWord;
}

function clearInputBox(output, input) {
  setTimeout(() => {
    output.innerHTML = "";
    input.value = "";
  }, 5000);
}
