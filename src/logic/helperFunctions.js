export function getFirstName(fullName) {
  const wordsArray = fullName.split(" ");
  let firstName = "FNAME";
  if (wordsArray[0]) {
    firstName = wordsArray[0];
  }
  return firstName;
}
