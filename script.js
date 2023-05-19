function showError(id) {
    const input = document.querySelector(id);
    input.classList.add("error");
}

function removeError(id) {
    const input = document.querySelector(id);
    input.classList.remove("error");
}

function checkQuantity() {
    const input = document.querySelector("#quantity");
    return (input.value > 0);
}

function checkColor() {
    const input = document.querySelector("#color");
    if (input.value === "--") {
        return false;
    } else {
        return true;
    }
}

function checkAddress() {
    const input = document.querySelector("#address");
    if (input.value.length < 5) {
        return false;
    } else {
        return true;
    }
}

function checkCity() {
    const input = document.querySelector("#city");
    if (input.value.length <= 2) {
        return false;
    } else {
        return true;
    }
}

function checkState() {
    const input = document.querySelector("#state");
    if (input.value.length === 2) {
        return true;
    } else {
        return false;
    }
}

function checkForm() {
    if (!checkQuantity()) {
        showError("#quantity");
    } else {
        removeError("#quantity");
    }
    if (!checkColor()) {
        showError("#color");
    } else {
        removeError("#color");
    }
    if (!checkAddress()) {
        showError("#address");
    } else {
        removeError("#address");
    }
    if (!checkCity()) {
        showError("#city");
    } else {
        removeError("#city");
    }
    if (!checkState()) {
        showError("#state");
    } else {
        removeError("#state");
    }
    if (checkQuantity() && checkColor() && checkAddress() && checkCity() && checkState()) {
        document.querySelector("#status").classList.remove("hidden");
    }
}