const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};

function findValueByKey(companyName, obj = company) {
  if (obj.name === companyName) {
    return obj;
  }

  // перевіряємо, чи існують клієнти в об*єкті
  if (obj.clients) {
    for (let client of obj.clients) {
      // рекурсивно викликаємо функцію для кожного клієнта
      const result = findValueByKey(companyName, client);
      if (result !== "Компанія не знайдена") {
        return result;
      }
    }
  }

  // перевіряємо, чи існують партнери в об*єкті
  if (obj.partners) {
    for (let partner of obj.partners) {
      // рекурсивно викликаємо функцію для кожного партнера
      const result = findValueByKey(companyName, partner);
      if (result !== "Компанія не знайдена") {
        return result;
      }
    }
  }

  // якщо компанія не знайдена виводимо:
  return "Компанія не знайдена";
}

const companyInfo = findValueByKey("Клієнт 1");
console.log(companyInfo);
