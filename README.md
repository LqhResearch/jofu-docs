# JofuDocs

JofuDocs là một nền tảng hiển thị tài liệu Markdown từ GitHub với hiệu suất cao, giao diện chuyên nghiệp và hỗ trợ caching tối ưu.

## 🚀 Tính năng chính

- Fetch & hiển thị Markdown từ GitHub
- Tích hợp MDX với code highlighting
- Hỗ trợ front-matter metadata
- Giao diện sidebar & breadcrumbs chuyên nghiệp
- Caching & ISR giúp tải nhanh hơn
- Hỗ trợ README.md làm trang chính

## 🛠️ Công nghệ sử dụng

- **Next.js** + **MDX** + **Tailwind CSS**
- **GitHub API** (REST/GraphQL) để fetch Markdown
- **ISR & Redis Cache** để tối ưu hiệu suất

## 📦 Cài đặt & Chạy dự án

1. **Clone repository về máy:**
    ```bash
    git clone https://github.com/LqhResearch/jofu-docs.git
    ```
2. **Di chuyển vào thư mục dự án:**
    ```bash
    cd jofu-docs
    ```
3. **Cài đặt các dependencies:**
    ```bash
    npm install
    ```
4. **Chạy dự án ở môi trường development:**
    ```bash
    npm run dev
    ```
