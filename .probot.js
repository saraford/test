on("issues.opened")
  .filter(event => !event.payload.issue.body.includes("- [x]"))
  .comment("You did not fill out the issue template")
  .close();

on("issues.opened")
  .filter(event => event.payload.issue.body.includes("- [x]"))
  .comment(`
    Hello, @{{ sender.login }}! Thanks for opening an issue. This is a
    demo of PRobot, a trainable robot that responds to activity on GitHub.
    Check out the config in
    [.probot](https://github.com/bkeepers/test/blob/master/.probot) and
    see http://github.com/bkeepers/probot for more information.
  `)
  .label("feedback");

// Add WIP label if title contains WIP
on("pull_request.opened")
  .filter(event => event.payload.pull_request.title.includes("WIP"))
  .label("wip");
