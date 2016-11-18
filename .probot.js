// Close invalid issues
on('issues.opened')
  .filter((event) => !filledOutIssueTemplate(event))
  .comment('Hey @{{ sender.login }}, thanks for opening an issue, but you must fill out the template.')
  .label('invalid')
  .close();

// Welcome new contributors
on("issues.opened")
  .filter(filledOutIssueTemplate)
  .comment("Hey @{{ sender.login }}, thanks for opening an issue! We will be in touch soon.")
  .label("triage");

function filledOutIssueTemplate(event) {
  const body = event.payload.issue.body;
  return !body.includes('* [ ]')
    && body.includes('* [x]')
    && body.match(/### Steps to Reproduce/);
}
