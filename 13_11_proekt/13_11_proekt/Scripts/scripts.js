document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".ajax-load").addEventListener("click", function () {
    });
    document.querySelector(".ajax-post").addEventListener("click", function () {
        ajaxPost(this.closest("form"));
    });
});

function ajaxPost(form) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData(form);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.querySelector(".ajax-container-post").innerHTML = xhr.responseText;
        }
    };

    xhr.open("POST", "/home/ajax");
    xhr.send(formData);
}

function loadAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            alert(xhr.responseText);
            document.querySelector(".ajax-container").innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "/home/index/name1");
    xhr.send();
}