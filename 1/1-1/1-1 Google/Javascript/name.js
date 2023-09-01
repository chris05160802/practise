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
    var name = document.getElementById('name').value;
  
    // 在这里可以添加更复杂的验证逻辑
  
    // 假设验证成功
    if (name = true) {
      // 跳转到另一个网页
      window.location.href = './email.html';
    }
  });