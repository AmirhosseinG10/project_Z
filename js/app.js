const scores = document.querySelectorAll(".score");
const names = document.querySelectorAll(".name");
const group = document.querySelectorAll(".group");
const percent = document.querySelectorAll(".percent");
const total_score = 63;

let temp;
for (let i = 1; i < scores.length; i++) {
    for (let j = 0; j < scores.length - i; j++) {
        if (Number(scores[j].innerHTML) < Number(scores[j + 1].innerHTML)) {
            temp = scores[j + 1].innerHTML;
            scores[j + 1].innerHTML = scores[j].innerHTML;
            scores[j].innerHTML = temp;
            temp = names[j + 1].innerHTML;
            names[j + 1].innerHTML = names[j].innerHTML;
            names[j].innerHTML = temp;
            temp = group[j + 1].innerHTML;
            group[j + 1].innerHTML = group[j].innerHTML;
            group[j].innerHTML = temp;
        }
    }
}

for (let k = 0; k < names.length; k++) {
    percent[k].innerHTML = parseInt(Number(scores[k].innerHTML) / total_score * 100) + "%";
}
