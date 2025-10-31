const halloweenTasks = {
    sweets: [
        { text: "Скажи всем самый милый комплимент, какой сможешь придумать.", difficulty: 1, points: 5 },
        { text: "Спой куплет из любимой детской песенки, но очень страшным голосом.", difficulty: 2, points: 10 },
        { text: "Расскажи короткий позитивный случай, который с тобой произошёл.", difficulty: 1, points: 5 },
        { text: "Станцуй «радостный танец ведьмы» в течение 10 секунд.", difficulty: 2, points: 10 },
        { text: "Улыбнись максимально широко и удерживай улыбку 15 секунд.", difficulty: 1, points: 5 },
        { text: "Придумай и произнеси «заклинание счастья» из трёх смешных слов.", difficulty: 2, points: 10 },
        { text: "Изобрази привидение, которое хочет всех обнять.", difficulty: 1, points: 5 },
        { text: "Назови трёх людей, за которых ты сегодня благодарен.", difficulty: 2, points: 10 },
        { text: "Скажи «Счастливого Хэллоуина!» с разными эмоциями — радость, грусть, ужас.", difficulty: 2, points: 10 },
        { text: "Сделай комплимент соседу слева в стиле волшебника.", difficulty: 3, points: 15 }
    ],
    tricks: [
        { text: "Скажи «бу!» каждому по очереди, как будто ты настоящий монстр.", difficulty: 1, points: 5 },
        { text: "Съешь что-нибудь кислое или странное (по выбору ведущего).", difficulty: 2, points: 10 },
        { text: "Говори в течение 1 минуты как зомби.", difficulty: 2, points: 10 },
        { text: "Изобрази, что ты превращаешься в вампира.", difficulty: 2, points: 10 },
        { text: "Придумай страшную историю длиной в три предложения.", difficulty: 3, points: 15 },
        { text: "Сделай «ужасное лицо» и держи его 10 секунд.", difficulty: 1, points: 5 },
        { text: "Произнеси случайную фразу с самым жутким смехом, на какой способен.", difficulty: 2, points: 10 },
        { text: "Проползи по полу, как паук (или хотя бы сделай вид).", difficulty: 3, points: 15 },
        { text: "Притворись, что ты кот-оборотень, который требует внимания.", difficulty: 2, points: 10 },
        { text: "Говори в рифму до конца следующего раунда.", difficulty: 3, points: 15 }
    ]
};

function getRandomTask(type) {
    const list = halloweenTasks[type];
    return list[Math.floor(Math.random() * list.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const sweetText = document.getElementById("sweetText");
    const trickText = document.getElementById("trickText");
    const nextBtn = document.getElementById("nextTaskBtn");
    const next_btn2 = document.getElementById("next_btn2")

    const flipCards = document.querySelectorAll(".flip-inner");
    const sweetCard = flipCards[0];
    const trickCard = flipCards[1];

    if (!sweetCard || !trickCard || !nextBtn) {

        return;
    }

    nextBtn.addEventListener("click", () => {
        sweetCard.style.transform = "rotateY(0deg)";
        trickCard.style.transform = "rotateY(0deg)";

        setTimeout(() => {
            const sweetTask = getRandomTask("sweets");
            const trickTask = getRandomTask("tricks");

            sweetText.textContent = sweetTask.text;
            trickText.textContent = trickTask.text;


        }, 600);
    });
    next_btn2.addEventListener("click", () => {
        sweetCard.style.transform = "rotateY(0deg)";
        trickCard.style.transform = "rotateY(0deg)";

        setTimeout(() => {
            const sweetTask = getRandomTask("sweets");
            const trickTask = getRandomTask("tricks");

            sweetText.textContent = sweetTask.text;
            trickText.textContent = trickTask.text;


        }, 600);
    });

    const ghosts = document.querySelectorAll("img[alt='Ghost']");
    const playerLabels = document.querySelectorAll("#mainPage .text-2xl");

    playerLabels[0].insertAdjacentHTML("afterend", `<p id="score1" class="text-xl mt-2 opacity-70">Очки: 0</p>`);
    playerLabels[1].insertAdjacentHTML("afterend", `<p id="score2" class="text-xl mt-2 opacity-70">Очки: 0</p>`);

    let scores = [0, 0];
    let currentPlayer = 0; // 0 — игрок 1, 1 — игрок 2

    function updatePulse() {
        ghosts.forEach(g => {
            g.classList.remove("animate-pulse", "glow-active");
        });
        ghosts[currentPlayer].classList.add("animate-pulse", "glow-active");
    }

    updatePulse();
    function renderScores() {
        document.getElementById("score1").textContent = `Очки: ${scores[0]}`;
        document.getElementById("score2").textContent = `Очки: ${scores[1]}`;
    }

    const doneTaskBtn = document.getElementById("doneTaskBtn")

    doneTaskBtn.addEventListener("click", () => {
        sweetCard.style.transform = "rotateY(0deg)";
        trickCard.style.transform = "rotateY(0deg)";

        setTimeout(() => {
            const sweetTask = getRandomTask("sweets");
            const trickTask = getRandomTask("tricks");

            sweetText.textContent = sweetTask.text;
            trickText.textContent = trickTask.text;

            const isSweet = Math.random() > 0.5;
            const task = isSweet ? sweetTask : trickTask;

            scores[currentPlayer] += task.points;
            renderScores();


            currentPlayer = currentPlayer === 0 ? 1 : 0;
            updatePulse();
        }, 600);
    });


});

