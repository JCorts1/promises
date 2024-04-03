function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You didn't walk the dog.");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenClean = true;
      if (kitchenClean) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashOutside = false;

      if (trashOutside) {
        resolve("You take out the trash");
      } else {
        reject("You didn't take out the trash.");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You are done for today!");
  })
  .catch(error => console.error(error));
