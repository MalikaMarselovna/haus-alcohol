function openPopup(content) {
    // Отобразить всплывающее окно
    document.getElementById('popupContent').innerHTML = content;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    // Закрыть всплывающее окно
    document.getElementById('popup').style.display = 'none';
}