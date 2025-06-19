const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "if0_39261120",
  password: "EsuavCIfU0U",
  host: "ftpupload.net",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/htdocs/",
  include: ["*", "**/*"],
  deleteRemote: true,
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("Finished:", res))
  .catch(err => console.log(err));