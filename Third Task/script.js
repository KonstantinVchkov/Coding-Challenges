const formHTML = `
  <div class="form">
    <div class="underForm">
      <label for="from">From:</label>
      <br />
      <input type="text" placeholder="from" id="from" />
      <br />
      <label for="to">To:</label>
      <br />
      <input type="text" placeholder="to" id="to" />
      <br />
      <label for="subject">Subject:</label>
      <br />
      <input type="text" placeholder="subject" id="subject" />
      <br />
      <label for="message">Message:</label>
      <br />
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <br />
      <button>Submit</button>
    </div>
  </div>
`;

document.body.innerHTML = formHTML;

class Formmail {
  constructor(_from, _to, _subject, _message) {
    this.from = _from;
    this.to = _to;
    this.subject = _subject;
    this.message = _message;
  }

  messageE() {
    alert(
      `The message is from: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\nMessage: ${this.message}`
    );
  }
}

let firstPrompt = prompt("Enter your name");
let secondPrompt = prompt("Enter who you are sending the email to");
let thirdPrompt = prompt("What is the subject for the mail?");
let fourthPrompt = prompt("Enter your message here");

let mail = new Formmail(firstPrompt, secondPrompt, thirdPrompt, fourthPrompt);

const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const subjectInput = document.getElementById("subject");
const messageTextarea = document.getElementById("message");

fromInput.value = firstPrompt;
toInput.value = secondPrompt;
subjectInput.value = thirdPrompt;
messageTextarea.value = fourthPrompt;

const btn = document.querySelector("button");
let allInputs = [from, to, subject, message];
btn.addEventListener("click", () => {
  fromInput.value = "";
  toInput.value = "";
  subjectInput.value = "";
  messageTextarea.value = "";
  mail.messageE();
});
