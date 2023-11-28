const clock = document.querySelector("#clock");

function getChristmasCountdown() {
    const currentDate = new Date(); // 현재 날짜
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // 크리스마스 날짜 (월은 0부터 시작하므로 11은 12월을 나타냄)

    // 크리스마스까지 남은 일 수 계산
    const timeDiff = christmasDate - currentDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // 현재 시간 계산
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    clock.innerText = `크리스마스까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}

getChristmasCountdown();
setInterval(getChristmasCountdown, 1000);