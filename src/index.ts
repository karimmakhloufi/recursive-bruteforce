const characters = "abcdefghijklmnopqrstuvwxyz".split("");

const generatePassword = (password: string, length: number) => {
  if (password.length < length) {
    characters.forEach((char) => {
      generatePassword(password + char, length);
    });
  } else {
    console.log(password);
  }
};

for (let i = 0; i <= 3; i++) {
  generatePassword("", i);
}
