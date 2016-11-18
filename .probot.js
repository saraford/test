on('issues.opened')
  .filter((event) => {
      const body = event.payload.issue.body;
      return body.includes('* [ ]')
        || !body.includes('* [x]')
        || !body.match(/### Steps to Reproduce/);
    })
  .comment('Hey @{{ sender.login }}, thanks for opening an issue, but you must fill out the template.')
  .label('invalid')
  .close();
