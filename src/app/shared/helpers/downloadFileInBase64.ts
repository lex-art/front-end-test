function convertArrayBuffer(s: any ): any {
  let buf = new ArrayBuffer(s.length);
  let view = new Uint8Array(buf);
  for (let i = 0; i < s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

function downlaodFileInBase64(fileBase64: string, nameFile: string, type: string = 'application/pdf') {
  try {
    const fileBlob = atob(fileBase64);
    const arrayBuffer = convertArrayBuffer(fileBlob);
    const blob = new Blob([arrayBuffer], {
      type: type,
    });
    const link = window.document.createElement('a');
    window.document.body.appendChild(link);
    link.href = window.URL.createObjectURL(blob);
    //link.target = '__blank';
    link.download = nameFile

    link.click();
    link.remove();
  } catch (error) {
      alert("A ocurrido un error al intentar descargar el archivo.")
  }
}

export default downlaodFileInBase64;
