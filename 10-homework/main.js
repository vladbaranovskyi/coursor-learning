async function getRandomChinese(length) {
  let resault = [];
  let count = 0;

  while (count < length) {
    let time = String.fromCharCode(Date.now()).slice(-5);
    count++;
    resault.push(time);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(resault)
      }, 50)
    })
  }
  console.log(resault.join(' '));
}
getRandomChinese(4);