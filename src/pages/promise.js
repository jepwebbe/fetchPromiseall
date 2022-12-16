const handleMyOwnSillyPromise = (a, b, c) => {
  return new Promise((resolve, reject) => {
    
    const success = a + b === c;

    if (success) {
      resolve();
      /** løftet blev løst - the promise was resolved*/
    } else {
      reject();
      /** løftet blev ikke løst - the promise was not resolved but rejected*/
    }
  });
};

const myOwnSillyPromise = handleMyOwnSillyPromise(12, 23, 34);
//** check if myOwnSillyPromise is resolved */
myOwnSillyPromise
  .then(() => {
    /** if the (promise) is resolved run this code */
    console.log("Fedt løftet blev holdt");
  })
  .catch(() => {
    /** if the (promise) is rejected run this code */
    console.error("Fandens også løftet blev ikke holdt");
  });
