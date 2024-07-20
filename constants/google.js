export const google = {
  CLIENT_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
  PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
  SPREADSHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
  SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
};

export const scriptURLPostAlgorand =
  "https://script.google.com/macros/s/AKfycbwhEalx8jxGdDMWEjVJi9zuwbw163YKFpOehNlo9ALiXq31T6IG73-pLq14ZUfNaL4I/exec"; // Algorand

export const scriptURLGetAlgorand = "https://script.google.com/macros/s/AKfycbzItMT5wjG55ouEDdigj7kgfa7xUhtetiIUYw3VqmDDxD-eXFTEpvKKhkybFpe7wr0mkw/exec" // Algorand

export const scriptURLPostEvmApt =
  "https://script.google.com/macros/s/AKfycbw3cfd-_uendwTLMebNOYeLVUorYLseFKDDRtueNUA6ff6qqXT3Ww2_q3NFEt6A4HXB/exec"; // Evm-Apt

export const scriptURLGetEvmApt = "https://script.google.com/macros/s/AKfycbwpKywlfgvuc_P_6ZYtAArtiKW9pgEmGuuKpmWOsqcAqQbG2C1My2kaV3eQkUdMicTK/exec" // Evm-Apt
