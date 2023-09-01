const dropup = document.querySelector(".dropup")
const btn = document.querySelector(".function-btn")
var j = 0; 

btn.addEventListener("click", () => {
    j = j + 1;
    if (j % 2 == 0){
        btn.classList.add("active");
    }
    else{
        btn.classList.remove("active");
    }
    
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
  
    // 进行输入验证
    var email = document.getElementById('email').value;
  
    // 在这里可以添加更复杂的验证逻辑
  
    // 假设验证成功
    if (email = true) {
      // 跳转到另一个网页
      window.location.href = './password.html';
    } else {
      alert('输入验证失败，请检查用户名和密码。');
    }
  });