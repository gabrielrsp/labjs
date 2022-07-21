const email = 'gabrielrsp18@gmail.com'


console.log(email.replace(/^(.{1})[^@]+(.{2})(.{3})/, '$1*****$2*****'))


  console.log(email.replace(/^(.{1})(.{1}[^@])+(.{3})(.{3})/, '$1*****$2$3*****'))