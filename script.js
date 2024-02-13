window.onload = function () {
    const text = document.querySelector('.text p');
    const chars = text.innerText.split(""); 
    const count = chars.length; 
    text.innerHTML = chars.map((char, i) => 
        `<span style="transform:rotate(${i * (360 / count)}deg)">${char}</span>`
    ).join("");
};
