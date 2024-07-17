/**
 * Created by trungquandev.com's author on 18/02/2020.
 * server.js
 */
const express = require('express');
const { exec } = require('child_process');
const app = express();
const initRoutes = require('./routes/web');

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));

// Khởi tạo các routes cho ứng dụng
initRoutes(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
const port = 8017;
app.listen(port, () => {
  console.log(`Xin Chào! Tôi là Huỳnh Vĩnh Tiến, Bạn đang chạy ở URL: http://127.0.0.1:${port}/`);
  
  // Mở URL trong trình duyệt khi server bắt đầu
  exec(`start http://127.0.0.1:${port}/`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Could not open browser: ${err}`);
      return;
    }
    console.log(`Browser opened successfully!`);
  });
});
