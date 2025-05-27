import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">
          Chào mừng đến với Trung Tâm Tư Vấn & Khám HIV
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Chúng tôi cung cấp dịch vụ tư vấn, xét nghiệm và điều trị HIV một cách{" "}
          <strong>an toàn, ẩn danh và chuyên nghiệp</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">
              Giới thiệu cơ sở
            </h2>
            <p className="text-gray-600 mb-4">
              Tìm hiểu về đội ngũ y tế, phương pháp điều trị và sứ mệnh của
              trung tâm.
            </p>
            <Link to="/about" className="text-teal-500 hover:underline">
              Xem thêm →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">
              Tài liệu & Giáo dục
            </h2>
            <p className="text-gray-600 mb-4">
              Thông tin khoa học giúp bạn hiểu rõ hơn về HIV và cách phòng ngừa.
            </p>
            <Link to="/blogs" className="text-teal-500 hover:underline">
              Đọc tài liệu →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">
              Câu chuyện thực tế
            </h2>
            <p className="text-gray-600 mb-4">
              Trải nghiệm từ những người đã vượt qua kỳ thị và điều trị thành
              công.
            </p>
            <Link to="/blogs" className="text-teal-500 hover:underline">
              Đọc blog →
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/survey"
            className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition"
          >
            Khảo sát nguy cơ nhiễm HIV
          </Link>
          <Link
            to="/chat"
            className="bg-gray-100 border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Tư vấn ẩn danh
          </Link>
          <Link
            to="/login"
            className="text-teal-600 underline hover:text-teal-800 mt-2 md:mt-0"
          >
            Đăng nhập / Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
}
