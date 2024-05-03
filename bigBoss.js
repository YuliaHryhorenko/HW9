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
  let foundCompanies = []; // масив, щоб зберігати знайдені компанії

  if (obj.name === companyName) {
    foundCompanies.push(obj); // додаємо об'єкт до масиву, якщо знаходимо компанію
  }

  // перевіряємо, чи є клієнти у поточному об'єкті
  if (obj.clients) {
    for (let client of obj.clients) {
      // рекурсивно викликаємо функцію
      const result = findValueByKey(companyName, client);
      foundCompanies.push(...result); // додаємо знайдені компанії до масиву
    }
  }

  // перевіряємо, чи є партнери у поточному об'єкті
  if (obj.partners) {
    for (let partner of obj.partners) {
      // рекурсивно викликаємо функцію
      const result = findValueByKey(companyName, partner);
      foundCompanies.push(...result); // додаємо знайдені компанії до масиву
    }
  }

  // повертаємо знайдені компанії або порожній масив, якщо компанія не знайдена
  return foundCompanies;
}

const companyInfo = findValueByKey("Клієнт 1.2");

// перевірка, чи є знайдені компанії
if (companyInfo.length > 0) {
  companyInfo.forEach(function (company) {
    console.log(company);
  });
} else {
  console.log("Компанія не знайдена");
}
