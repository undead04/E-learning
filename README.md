# E-Learning Platform

Nền tảng học trực tuyến hiện đại, giao diện đẹp, trải nghiệm mượt mà, tích hợp AI gợi ý khoá học phù hợp cho từng người dùng.

## 🚀 Tính năng nổi bật

- **Trang chủ hiện đại**: Hero section, giới thiệu, carousel khoá học nổi bật, đánh giá học viên.
- **Tìm kiếm & lọc sản phẩm**: Tìm kiếm theo tên, lọc theo giá, hiển thị sản phẩm dạng thẻ đẹp mắt.
- **Gợi ý AI thông minh**:
  - Chatbot AI tư vấn sản phẩm: Giao diện chat, gợi ý khoá học dựa trên từ khoá nhập.
  - Gợi ý sản phẩm dựa trên lịch sử xem và yêu thích (modal Suggestion).
- **Lịch sử xem sản phẩm**: Xem lại các khoá học đã từng truy cập, nhóm theo ngày.
- **Sản phẩm yêu thích**: Lưu và quản lý danh sách khoá học yêu thích.
- **Đánh giá học viên**: Carousel review từ học viên thật.
- **Skeleton loading**: Hiệu ứng loading đẹp mắt khi chờ dữ liệu.
- **Mock API & dữ liệu mẫu**: Không cần backend thật, dễ dàng demo và phát triển.

## 🖼️ Demo giao diện

- Trang chủ: Hero, tính năng, carousel khoá học, review học viên, footer.
- Trang sản phẩm: Tìm kiếm, lọc, gợi ý AI, danh sách sản phẩm.
- Trang lịch sử: Nhóm sản phẩm đã xem theo ngày.
- Trang yêu thích: Danh sách sản phẩm đã lưu.
- Chatbot AI: Nổi bật ở góc phải, tư vấn khoá học theo từ khoá.

## 🏗️ Cấu trúc thư mục

```
src/
  components/      // Các component UI: ChatBot, ProductCard, Header, Carousel, Review, ...
  pages/           // Các trang chính: HomePage, ProductPage, HistoryPage, FavoritesPage, NotFoundPage
  data/            // Dữ liệu mock, API giả lập (axios-mock-adapter)
  utils/           // Hàm tiện ích: search, localStorage, ...
  styles/          // CSS module cho từng component
  App.tsx          // Định tuyến và layout tổng
  index.tsx        // Entry point
```

## ⚙️ Cài đặt & chạy thử

1. **Clone project:**
   ```bash
   git clone <repo-url>
   cd e-learning-platform
   ```
2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```
3. **Chạy ứng dụng:**
   ```bash
   npm start
   ```
   Truy cập [http://localhost:3000](http://localhost:3000)

## 🛠️ Các lệnh npm khác

- `npm test`: Chạy unit test.
- `npm run build`: Build production.
- `npm run eject`: Eject cấu hình (không khuyến khích).

## 📦 Công nghệ sử dụng

- React, TypeScript, React Router, React Bootstrap, Bootstrap 5
- axios, axios-mock-adapter (mock API)
- react-toastify (thông báo)
- FontAwesome, React Icons

## 📚 Ghi chú

- Dữ liệu sản phẩm, review, gợi ý đều là mock, không cần backend thật.
- Có thể mở rộng tích hợp backend thật dễ dàng.
- Giao diện responsive, tối ưu cho desktop và mobile.

---

> Dự án mẫu cho các bài tập, demo, hoặc phát triển nền tảng học trực tuyến cá nhân.
