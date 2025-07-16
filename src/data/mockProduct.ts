// mockProduct.ts
export interface IProductType {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  price: number;
  rating?: number;
  isFavorite?: boolean;
}

export const mockProducts: IProductType[] = [
  {
    id: 1,
    name: "Khóa học HTML & CSS cơ bản",
    price: 199000,
    image: "../html-css.png",
    description: "Nắm vững nền tảng xây dựng giao diện web.",
    longDescription:
      "Khóa học này hướng dẫn bạn từ những kiến thức cơ bản về HTML, cấu trúc website, đến cách tạo layout với CSS. Phù hợp với người mới bắt đầu.",
    rating: 4.5,
    isFavorite: true,
  },
  {
    id: 2,
    name: "JavaScript từ A đến Z",
    price: 599000,
    image: "../js.png",
    description: "Hiểu và áp dụng JavaScript trong web hiện đại.",
    longDescription:
      "Học cú pháp, vòng lặp, function, DOM manipulation và các khái niệm nâng cao như callback, promise, async/await.",
    rating: 4.7,
    isFavorite: false,
  },
  {
    id: 3,
    name: "ReactJS cho người mới",
    price: 699000,
    image: "../react.png",
    description: "Xây dựng ứng dụng web tương tác với React.",
    longDescription:
      "Làm quen với component, state, props, useEffect và cách quản lý dữ liệu trong React.",
    rating: 4.8,
    isFavorite: true,
  },
  {
    id: 4,
    name: "NodeJS & Express cơ bản",
    price: 499000,
    image: "../nodejs.png",
    description: "Tạo backend API với NodeJS & Express.",
    longDescription:
      "Bạn sẽ học cách tạo server, route, xử lý request/response, sử dụng middleware và làm việc với MongoDB.",
    rating: 4.6,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Lập trình TypeScript",
    price: 399000,
    image: "../typescript.png",
    description: "Viết code an toàn hơn với TypeScript.",
    longDescription:
      "Tìm hiểu kiểu dữ liệu, interface, generic, module và ứng dụng TypeScript trong React hoặc NodeJS.",
    rating: 4.4,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Khóa học Git & GitHub",
    price: 179000,
    image: "../git.png",
    description: "Quản lý source code chuyên nghiệp với Git.",
    longDescription:
      "Từ cơ bản như init, commit, push/pull đến branching, merge conflict và workflow làm việc nhóm với GitHub.",
    rating: 4.3,
    isFavorite: true,
  },
  {
    id: 7,
    name: "Python cơ bản cho người mới",
    price: 299000,
    image: "../python.png",
    description: "Làm quen Python, ngôn ngữ lập trình phổ biến.",
    longDescription:
      "Giới thiệu biến, toán tử, hàm, vòng lặp, list, dictionary và viết chương trình đơn giản.",
    rating: 4.6,
    isFavorite: false,
  },
  {
    id: 8,
    name: "SQL & Cơ sở dữ liệu",
    price: 349000,
    image: "../sql.png",
    description: "Thành thạo truy vấn dữ liệu với SQL.",
    longDescription:
      "Học cách tạo bảng, truy vấn SELECT, JOIN, GROUP BY, và thao tác CRUD trong MySQL hoặc PostgreSQL.",
    rating: 4.5,
    isFavorite: false,
  },
  {
    id: 9,
    name: "Next.js toàn tập",
    price: 799000,
    image: "../nextjs.png",
    description: "Xây dựng web fullstack hiện đại với Next.js.",
    longDescription:
      "SSR, routing, API routes, deployment, và tối ưu hiệu năng trong NextJS.",
    rating: 4.8,
    isFavorite: true,
  },
  {
    id: 10,
    name: "Docker cho lập trình viên",
    price: 459000,
    image: "../docker.png",
    description: "Deploy dự án dễ dàng với Docker container.",
    longDescription:
      "Tạo Dockerfile, image, container, Docker Compose, volume và triển khai dự án backend/frontend.",
    rating: 4.7,
    isFavorite: false,
  },
];
