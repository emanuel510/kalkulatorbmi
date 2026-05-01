const waga = document.getElementById("inputWagi");
const wzrost = document.getElementById("inputWzrostu");
const klasyfikacjaBmi = document.getElementById("klasyfikacjaBmi");
const guzikObliczeniowy = document.getElementById("guzikObliczeniowy");
const guzikResetujacy = document.getElementById("guzikResetujacy");
const wynikBmi = document.getElementById("wynikBmi");
const informacjaBmi = document.getElementById("informacjaBmi");

guzikObliczeniowy.addEventListener("click", () => {
    let wartoscBmi = 0;
    let wartoscWagi = Number(waga.value.replace("," , "."));
    let wartoscWzrostu = Number(wzrost.value.replace("," , ".") / 100);

    wartoscBmi = Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu));
    wynikBmi.textContent = `BMI: ${wartoscBmi.toFixed(3)}`;
    if(isNaN(wartoscBmi)){
        wartoscBmi = 0;
        wartoscWagi = 0;
        wartoscWzrostu = 0;
        wynikBmi.textContent = `BMI: Wypisz prawidłowe dane!`;
        klasyfikacjaBmi.textContent = `Brak klasyfikacji`;
        klasyfikacjaBmi.style.color = `rgb(0, 0, 0)`;
        informacjaBmi.textContent = `Brak informacji`;
        informacjaBmi.style.color = `rgb(0, 0, 0)`;
    }
    if(waga.value < 0.1 || wzrost.value < 0.1){
        wartoscBmi = 0;
        wartoscWagi = 0;
        wartoscWzrostu = 0;
        wynikBmi.textContent = `BMI: Wypisz prawidłowe dane!`;
        klasyfikacjaBmi.textContent = `Brak klasyfikacji`;
        klasyfikacjaBmi.style.color = `rgb(0, 0, 0)`;
        informacjaBmi.textContent = `Brak informacji`;
        informacjaBmi.style.color = `rgb(0, 0, 0)`;
    }
    if(Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) < 0.001){
        wartoscBmi = 0;
        wartoscWagi = 0;
        wartoscWzrostu = 0;
        wynikBmi.textContent = `BMI: Wypisz prawidłowe dane!`;
        klasyfikacjaBmi.textContent = `Brak klasyfikacji`;
        klasyfikacjaBmi.style.color = `rgb(0, 0, 0)`;
        informacjaBmi.textContent = `Brak informacji`;
        informacjaBmi.style.color = `rgb(0, 0, 0)`;
    }
    if(Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) < 18.5){
        klasyfikacjaBmi.textContent = `Niedowaga (< 18.50)`;
        klasyfikacjaBmi.style.color = `rgb(81, 174, 255)`;
        informacjaBmi.textContent = `Masz niedowagę. Warto skonsultować się z lekarzem, aby ocenić stan zdrowia i sprawdzić przyczynę.`;
        informacjaBmi.style.color = `rgb(81, 174, 255)`;
    }
    if(Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) >= 18.5 && Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) < 25){
        klasyfikacjaBmi.textContent = `Waga prawidłowa (18.50 - 24.99)`;
        klasyfikacjaBmi.style.color = `rgb(14, 172, 14)`;
        informacjaBmi.textContent = `Masz wagę prawidłową. Utrzymuj zdrową dietę i regularną aktywność fizyczną.`;
        informacjaBmi.style.color = `rgb(14, 172, 14)`;
    }
    if(Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) >= 25 && Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) < 30){
        klasyfikacjaBmi.textContent = `Nadwaga (25.00 - 29.99)`;
        klasyfikacjaBmi.style.color = `rgb(255, 170, 11)`;
        informacjaBmi.textContent = `Masz nadwagę. Warto skonsultować się z lekarzem oraz wprowadzić zdrową dietę i regularną aktywność fizyczną.`;
        informacjaBmi.style.color = `rgb(255, 170, 11)`;
    }
    if(Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) >= 30 && Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) < 35){
        klasyfikacjaBmi.textContent = `Otyłość 1 stopnia (30.00 - 34.99)`;
        klasyfikacjaBmi.style.color = `rgb(208, 93, 0)`;
        informacjaBmi.textContent = `Masz otyłość 1 stopnia. Wskazana konsultacja z lekarzem oraz wprowadzenie zmian trybu życia.`;
        informacjaBmi.style.color = `rgb(208, 93, 0)`;
    }
    if(Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) >= 35 && Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) < 40){
        klasyfikacjaBmi.textContent = `Otyłość 2 stopnia (35.00 - 39.99)`;
        klasyfikacjaBmi.style.color = `rgb(255, 44, 44)`;
        informacjaBmi.textContent = `Masz otyłość 2 stopnia. Wskazana konsultacja z lekarzem i zmiana trybu życia. `;
        informacjaBmi.style.color = `rgb(255, 44, 44)`;
    }
    if(Number(wartoscWagi / (wartoscWzrostu * wartoscWzrostu)) >= 40){
        klasyfikacjaBmi.textContent = `Otyłość 3 stopnia ( => 40)`;
        klasyfikacjaBmi.style.color = `rgb(127, 1, 1)`;
        informacjaBmi.textContent = `Masz otyłość 3 stopnia. Wskazana natychmiastowa konsultacja z lekarzem. Stan ten może doprowadzić do poważnych uszczerbków na zdrowiu.`;
        informacjaBmi.style.color = `rgb(127, 1, 1)`;
    }
});

guzikResetujacy.addEventListener("click", () => {
    const waga = document.getElementById("inputWagi");
    const wzrost = document.getElementById("inputWzrostu");
    const klasyfikacjaBmi = document.getElementById("klasyfikacjaBmi");

    waga.value = ``;
    wzrost.value = ``;
    klasyfikacjaBmi.textContent = `Brak klasyfikacji`;
    klasyfikacjaBmi.style.color = `rgb(0, 0, 0)`;
    informacjaBmi.textContent = `Brak informacji`;
    informacjaBmi.style.color = `rgb(0, 0, 0)`;
    wartoscBmi = 0;

    wynikBmi.textContent = `BMI: ${wartoscBmi.toFixed(3)}`;
});



