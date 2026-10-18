const courses = [
  { name: "토목기사 필기", type: "기사", desc: "6과목 핵심 개념을 비유로 잡고 기출로 마무리합니다.", meta: "주말반 · 12주 (예시)" },
  { name: "토목기사 실기", type: "기사", desc: "공정관리·물량산출을 손으로 직접 풀며 익힙니다.", meta: "평일 저녁 · 8주 (예시)" },
  { name: "측량기능사·산업기사", type: "기사", desc: "거리·각·높이를 재는 원리부터 계산까지 연결합니다.", meta: "주말반 · 8주 (예시)" },
  { name: "토목시공기술사", type: "기술사", desc: "답안 구성법과 현장 사례로 서술형을 준비합니다.", meta: "주말반 · 16주 (예시)" },
  { name: "토목구조기술사", type: "기술사", desc: "구조 해석 흐름을 그림으로 정리해 답안에 씁니다.", meta: "주말반 · 16주 (예시)" },
];

const grid = document.getElementById("course-grid");
const select = document.getElementById("course-select");

function render(filter) {
  grid.innerHTML = "";
  courses
    .filter((c) => filter === "all" || c.type === filter)
    .forEach((c) => {
      const card = document.createElement("div");
      card.className = "card course";
      card.innerHTML = `<span class="level"></span><h3></h3><p></p><div class="meta"></div>`;
      card.querySelector(".level").textContent = c.type;
      card.querySelector("h3").textContent = c.name;
      card.querySelector("p").textContent = c.desc;
      card.querySelector(".meta").textContent = c.meta;
      grid.appendChild(card);
    });
}

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    render(chip.dataset.filter);
  });
});

courses.forEach((c) => select.add(new Option(c.name, c.name)));

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  document.getElementById("form-result").textContent =
    `${data.get("name")}님, ${data.get("course")} 상담 신청이 접수되었습니다. (샘플이라 실제로 전송되지는 않습니다)`;
  e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
render("all");
