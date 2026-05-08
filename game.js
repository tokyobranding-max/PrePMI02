const cards = document.querySelectorAll(".task-card");
const actionButton = document.querySelector(".primary-action");
const scoreLabel = document.querySelector(".score-card strong");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        cards.forEach((item) => item.classList.remove("selected"));
        card.classList.add("selected");
    });
});

if (actionButton) {
    actionButton.addEventListener("click", () => {
        actionButton.textContent = "生成中...";
        actionButton.disabled = true;
        setTimeout(() => {
            actionButton.textContent = "AIレポート生成";
            actionButton.disabled = false;
            if (scoreLabel) {
                scoreLabel.textContent = "B+判定";
            }
        }, 900);
    });
}
