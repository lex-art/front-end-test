export const getDateNowTime = () => {
    let date = new Date();
    let output = String(
      date.getFullYear() +
        '-' +
        String(date.getMonth() + 1).padStart(2, '0') +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        String(date.getMinutes()).padStart(2, '0') +
        ':' +
        String(date.getSeconds()).padStart(2, '0')
    ).padStart(2, '0');
    return output;
}

export const getDateNowTimeReport = () => {
  let date = new Date();
  let output = String(
    date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      date.getDate() +
      ' ' +
      date.getHours() +
      '-' +
      String(date.getMinutes()).padStart(2, '0') +
      '-' +
      String(date.getSeconds()).padStart(2, '0')
  ).padStart(2, '0');
  return output;
}