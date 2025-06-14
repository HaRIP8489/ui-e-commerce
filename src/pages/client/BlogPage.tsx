import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import cam2 from "../../assets/images/cam2.jpg"
import {Box, Button} from "@mui/material";

const blogPosts = [
  {
    id: 1,
    title: '5 mẹo chụp ảnh đẹp cho người mới bắt đầu',
    date: '15/05/2025',
    author: 'EagleCam Team',
    excerpt: 'Khám phá các mẹo đơn giản nhưng hiệu quả giúp bạn cải thiện kỹ năng chụp ảnh một cách nhanh chóng.',
    image: cam2
  },
  {
    id: 2,
    title: 'So sánh máy ảnh Sony A7 III và Canon R6',
    date: '10/05/2025',
    author: 'EagleCam Reviewer',
    excerpt: 'Cùng đánh giá chi tiết hai mẫu máy ảnh nổi bật nhất trong phân khúc bán chuyên hiện nay.',
    image: cam2
  },
  {
    id: 3,
    title: 'Top 3 lens chụp chân dung nên thuê',
    date: '05/05/2025',
    author: 'Nhiếp ảnh gia Linh',
    excerpt: 'Gợi ý những ống kính chụp chân dung tốt nhất dành cho nhu cầu cá nhân hoặc thương mại.',
    image: cam2
  }
];

const BlogPage: React.FC = () => {
  return (
    <Box sx={{ px: 5, py: 3, backgroundColor: '#D0D5DD' }}>
      <Header />
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4">Tin Tức & Blog</h1>
        <p className="text-center text-muted mb-5">Cập nhật thông tin, mẹo vặt và đánh giá thiết bị từ EagleCam.</p>

        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card h-100 shadow-sm">
                <img src={post.image} className="card-img-top" alt={post.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="text-muted small mb-1">{post.date} • {post.author}</p>
                  <p className="card-text">{post.excerpt}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <Button variant="contained" size="large" fullWidth
                          sx={{  mt: 1,  color: "white", backgroundColor: "black", "&:hover": { backgroundColor: "#0070f3" } }}>
                    Gửi tin nhắn
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       <Footer /> 
    </Box>
  );
};

export default BlogPage;
