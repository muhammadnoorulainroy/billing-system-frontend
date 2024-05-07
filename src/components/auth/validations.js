const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(\.+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

const validNameRegex = RegExp(/^[A-Za-z\s]*$/);

export const isValidEmail = email => validEmailRegex.test(email);

export const isValidFullname = fullname => validNameRegex.test(fullname);








