const express = require('express');

const server = express();
const { exec } = require('child_process');

server.get('/update-dev', (req, res) => {
  const key = req.query.key ? req.query.key : '';

  if (key !== 'UzGPLdBTGW83OXVbKUp76rwxDaOzYvAI') {
    res.json({ msg: '未授權' });
    return;
  }

  exec('cd /var/www/caipiao-wechat-dev;'
    + 'ssh-agent bash -c "ssh-add ~/.ssh/id_rsa;'
    + 'git checkout develop;'
    + 'git reset HEAD --hard;'
    + 'git pull origin develop;'
    + 'npm install;'
    + 'bash ./start.sh;"');

  res.json({ msg: 'develop分支開始執行更新打包!!!' });
});

server.get('/replace_chatroom_api', (req, res) => {
  const key = req.query.key ? req.query.key : '';

  if (key !== 'UzGPLdBTGW83OXVbKUp76rwxDaOzYvAI') {
    res.json({ msg: '未授權' });
    return;
  }

  exec('cd /var/www/caipiao-wechat-dev;'
    + 'ssh-agent bash -c "ssh-add ~/.ssh/id_rsa;'
    + 'git checkout feature/replace_chatroom_api;'
    + 'git reset HEAD --hard;'
    + 'git pull origin feature/replace_chatroom_api;'
    + 'npm install;'
    + 'bash ./start.sh;"');

  res.json({ msg: 'feature/replace_chatroom_api分支開始執行更新打包!!!' });
});


server.get('/update-prod', (req, res) => {
  const key = req.query.key ? req.query.key : '';

  if (key !== 'UzGPLdBTGW83OXVbKUp76rwxDaOzYvAI') {
    res.json({ msg: '未授權' });
    return;
  }

  exec('cd /var/www/caipiao-wechat;'
      + 'ssh-agent bash -c "ssh-add ~/.ssh/id_rsa;'
      + 'git checkout master;'
      + 'git reset HEAD --hard;'
      + 'git pull origin master;'
      + 'npm install;'
      + 'bash ./start.sh;"');

  res.json({ msg: 'master分支開始執行更新打包!!!' });
});

server.listen(7000);
