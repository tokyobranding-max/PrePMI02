const steps = Array.from(document.querySelectorAll(".step"));
const stepNumber = document.getElementById("stepNumber");
const stepTitle = document.getElementById("stepTitle");
const progressBar = document.getElementById("progressBar");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const form = document.getElementById("trialForm");
const resultPanel = document.getElementById("resultPanel");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

const titles = [
    "案件の基本情報",
    "文化・ブランド診断",
    "組織・IT・シナジー診断",
    "結果の受け取り"
];

let currentStep = 1;

function showStep(nextStep) {
    currentStep = Math.max(1, Math.min(steps.length, nextStep));
    steps.forEach((step) => {
        step.classList.toggle("active", Number(step.dataset.step) === currentStep);
    });

    stepNumber.textContent = currentStep;
    stepTitle.textContent = titles[currentStep - 1];
    progressBar.style.width = `${(currentStep / steps.length) * 100}%`;
    backButton.disabled = currentStep === 1;
    nextButton.textContent = currentStep === steps.length ? "診断結果を見る" : "次へ";
}

function getCheckedValue(name) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? Number(checked.value) : 0;
}

function average(values) {
    return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function getJudgement(score) {
    if (score >= 80) {
        return {
            grade: "A判定",
            title: "統合の見通しは良好です",
            lead: "早期シナジーが期待できます。次はDay1メッセージと100日計画を具体化する段階です。"
        };
    }

    if (score >= 65) {
        return {
            grade: "B判定",
            title: "統合可能。ただし重点管理が必要です",
            lead: "大きな障害は限定的ですが、文化・ブランド・ITの優先順位を誤るとPMIが遅れる可能性があります。"
        };
    }

    if (score >= 50) {
        return {
            grade: "C判定",
            title: "統合難易度が高い案件です",
            lead: "PMI開始前に、キーパーソン面談、ブランド統合方針、IT分離運用の判断を急ぐ必要があります。"
        };
    }

    return {
        grade: "D判定",
        title: "重大リスクを含む案件です",
        lead: "買収条件や統合方針の再検討が必要です。追加DDで文化・組織・ITの深掘りを推奨します。"
    };
}

function buildRisks(scores) {
    const risks = [];

    if (scores.brand < 65) {
        risks.push("ブランド統合方針が未確定です。吸収型・並存型・新ブランド創出型の比較が必要です。");
    }

    if (scores.people < 65) {
        risks.push("キーパーソンの特定と面談が不足しています。離職リスクを契約前に確認してください。");
    }

    if (scores.it < 65) {
        risks.push("IT・SaaS棚卸しが不十分です。Day1統合ではなく分離運用の前提を置くべきです。");
    }

    if (scores.culture < 70) {
        risks.push("意思決定スタイルや価値観の差分を経営者同士で言語化する必要があります。");
    }

    if (scores.synergy < 70) {
        risks.push("100日以内に実現するシナジーKPIが曖昧です。買収目的とPMI施策を接続してください。");
    }

    if (risks.length < 3) {
        risks.push("Day1の社員向けメッセージを作成し、不安を先回りして解消してください。");
        risks.push("追加DD質問リストを作成し、文化・制度・ITの不明点を契約前に潰してください。");
    }

    return risks.slice(0, 4);
}

function showResult() {
    const scores = {
        culture: average([getCheckedValue("cultureFit"), getCheckedValue("originClarity")]),
        brand: getCheckedValue("brandPolicy"),
        people: getCheckedValue("keyPeople"),
        it: getCheckedValue("itInventory"),
        synergy: getCheckedValue("synergy")
    };
    const total = Math.round(
        scores.culture * 0.24 +
        scores.brand * 0.20 +
        scores.people * 0.18 +
        scores.it * 0.18 +
        scores.synergy * 0.20
    );
    const judgement = getJudgement(total);

    document.getElementById("resultScore").textContent = total;
    document.getElementById("resultRing").style.background =
        `radial-gradient(circle at center, #fff 0 57%, transparent 58%), conic-gradient(var(--purple) 0 ${total}%, #edf0f5 ${total}% 100%)`;
    document.getElementById("resultTitle").textContent = `${judgement.grade}：${judgement.title}`;
    document.getElementById("resultLead").textContent = judgement.lead;
    document.getElementById("cultureScore").textContent = scores.culture;
    document.getElementById("brandScore").textContent = scores.brand;
    document.getElementById("peopleScore").textContent = scores.people;
    document.getElementById("itScore").textContent = scores.it;

    const riskList = document.getElementById("riskList");
    riskList.innerHTML = "";
    buildRisks(scores).forEach((risk) => {
        const item = document.createElement("li");
        item.textContent = risk;
        riskList.appendChild(item);
    });

    form.style.display = "none";
    document.querySelector(".step-header").style.display = "none";
    resultPanel.classList.add("show");
}

backButton.addEventListener("click", () => showStep(currentStep - 1));

nextButton.addEventListener("click", () => {
    if (currentStep === steps.length) {
        showResult();
        return;
    }
    showStep(currentStep + 1);
});

fileInput.addEventListener("change", () => {
    fileList.innerHTML = "";
    Array.from(fileInput.files).slice(0, 5).forEach((file) => {
        const item = document.createElement("li");
        item.textContent = file.name;
        fileList.appendChild(item);
    });
});

showStep(1);
