const subjectCount = document.getElementById("subjectCount");
const subjectsContainer = document.getElementById("subjects");
const marksForm = document.getElementById("marksForm");
const resultSection = document.getElementById("result");

function renderSubjects() {
  const count = Number(subjectCount.value);
  subjectsContainer.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const field = document.createElement("div");
    field.className = "subject-field";

    const label = document.createElement("label");
    label.htmlFor = `subject${i}`;
    label.textContent = `Subject ${i} (out of 100)`;

    const input = document.createElement("input");
    input.id = `subject${i}`;
    input.name = `subject${i}`;
    input.type = "number";
    input.min = "0";
    input.max = "100";
    input.step = "0.5";
    input.placeholder = "0–100";
    input.required = true;

    field.append(label, input);
    subjectsContainer.appendChild(field);
  }

  resultSection.hidden = true;
}

subjectCount.addEventListener("change", renderSubjects);

marksForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const inputs = [...subjectsContainer.querySelectorAll("input")];
  const marks = inputs.map((input) => Number(input.value));

  if (!name) {
    alert("Please enter the student's name.");
    return;
  }

  if (marks.some((mark, index) =>
    inputs[index].value.trim() === "" || !Number.isFinite(mark) || mark < 0 || mark > 100
  )) {
    alert("Enter a mark from 0 to 100 for every subject.");
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const maximum = marks.length * 100;
  const percentage = (total / maximum) * 100;
  const passed = marks.every((mark) => mark >= 35);

  let grade;
  if (!passed) grade = "F";
  else if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "E";

  document.getElementById("greeting").textContent = `Well done, ${name} — here is your result.`;
  document.getElementById("total").textContent = `${formatNumber(total)} / ${maximum}`;
  document.getElementById("percentage").textContent = `${percentage.toFixed(2)}%`;
  document.getElementById("grade").textContent = grade;
  document.getElementById("status").textContent = passed ? "Pass" : "Fail";
  document.getElementById("message").textContent = passed
    ? "You passed all subjects. Keep learning and improving! 🌟"
    : "You need at least 35 marks in every subject to pass. Review the subjects below 35 and keep practising.";

  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  marksForm.reset();
  subjectCount.value = "5";
  renderSubjects();
  document.getElementById("studentName").focus();
});

document.getElementById("printBtn").addEventListener("click", () => window.print());

function formatNumber(number) {
  return Number.isInteger(number) ? String(number) : number.toFixed(1);
}

renderSubjects();
