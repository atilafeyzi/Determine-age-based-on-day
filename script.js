// Challege: Determine age based on day

const determineAge = (birthDate) => {
  const birthDateStandart = new Date(birthDate);
  const birthDateMS = birthDateStandart.getTime();
  const now = new Date().getTime();
  const ageMS = now - birthDateMS;
  const oneDay = 24 * 60 * 60 * 1000;
  const age = Math.floor(ageMS / oneDay);
  return age;
};

console.log(determineAge("1/18/1971"));
