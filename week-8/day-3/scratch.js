function giveMeNumber(num) {
  if (typeof num !== 'number') {
    // Yes, we can throw JS errors too
    throw new TypeError('Give Me Number');
  } else {
    return 'yupp'
  }
}

try{
  giveMeNumber('aye')
} catch (error) {
  console.error(`Gon' Fishin'...\nCaught: ${error.name}: ${error.message}`);
}
console.log('We keep going');