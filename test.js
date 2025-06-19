const jsonData = {
  bio: '',
  signature: '我是傻福',
  readme: ''
};

fetch('https://www.nodeseek.com/api/account/introduction', {
  method: 'POST',
  credentials: 'include', // 如果你想带上当前页面的 Cookie
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(jsonData)
})
.then(response => response.json())
.then(data => {
  console.log('响应数据:', data);
})
.catch(error => {
  console.error('请求失败:', error);
});
