export interface IReview {
  id: number;
  name: string;
  avatar: string;
  rating: number; // 1–5
  text: string;
}

export const mockReviews: IReview[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Khoá học rất bổ ích, giảng viên nhiệt tình, mình đã áp dụng được nhiều kiến thức vào công việc.',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    text: 'Nội dung dễ hiểu, có nhiều ví dụ thực tế, AI gợi ý khoá học rất chuẩn.',
  },
  {
    id: 3,
    name: 'Lê Văn C',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5,
    text: 'Giao diện đẹp, trải nghiệm mượt mà, sẽ giới thiệu cho bạn bè.',
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    rating: 4,
    text: 'Khóa học phù hợp cho người mới bắt đầu, tài liệu kèm theo rất hữu ích.',
  },
  {
    id: 5,
    name: 'Đỗ Minh E',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
    rating: 5,
    text: 'Trợ lý AI phản hồi rất nhanh, giúp mình tìm đúng khóa học trong vài phút.',
  },
  {
    id: 6,
    name: 'Vũ Thị F',
    avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
    rating: 5,
    text: 'Trải nghiệm học tập tuyệt vời, mình đã hoàn thành 3 khoá và học tiếp mỗi ngày!',
  },
];
