import  { useRef, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { chunkArray } from "../utils/chunkArray";
import { IReview } from "../data/mockReview";
import { getReview } from "../data/reviewApi";
import PlaceholderReview from "./PlaceholderReview";

function ReviewCarouselWithSideControls() {
  const carouselRef = useRef<any>(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // default: desktop
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3); // <768px: mobile → 1 item
    };

    handleResize(); // Run on first render
    window.addEventListener('resize', handleResize); // Listen on resize

    getReview().then(res => {
      setReviews(res);
    }).catch(err => {
      console.error('Failed to fetch reviews:', err);
    }).finally(()=>{
      setIsLoadingReviews(false)
    });
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);
  const groupedReviews = chunkArray(reviews, itemsPerSlide);

  // Để review rộng bằng CourseCarousel, dùng maxWidth: 1140px (giống container bootstrap)
  return (
    <div style={{ maxWidth: 1140, margin: "0 auto" }}>
      <div className="d-flex justify-content-between align-items-center mb-3" style={{ maxWidth: 1140, margin: "0 auto" }}>
        <button
          className="btn btn-outline-primary d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50%",
            width: 44,
            height: 44,
            fontSize: 22,
            boxShadow: "0 2px 8px 0 rgba(88,74,248,0.10)",
            lineHeight: 1,
            textAlign: "center"
          }}
          onClick={() => carouselRef.current?.prev()}
          aria-label="Trước"
          tabIndex={0}
        >
          &#8592;
        </button>
        <button
          className="btn btn-outline-primary d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50%",
            width: 44,
            height: 44,
            fontSize: 22,
            boxShadow: "0 2px 8px 0 rgba(88,74,248,0.10)",
          }}
          onClick={() => carouselRef.current?.next()}
          aria-label="Sau"
          tabIndex={0}
        >
          &#8594;
        </button>
      </div>
      <Carousel
        ref={carouselRef}
        indicators={false}
        controls={false}
        interval={5000}
        fade={true}
      >
        { isLoadingReviews ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {Array.from({ length: itemsPerSlide }, (_, index) => (
              <div className="col mb-3" key={index}>
                <PlaceholderReview />
              </div>
            ))}
          </div>
        ) : (
          groupedReviews.map((group, idx) => (
            <Carousel.Item key={idx}>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {group.map(r => (
                  <div className="mb-3" key={r.id} style={{ cursor: 'pointer' }}>
                    <div className="bg-white p-4 rounded shadow-sm h-100">
                      <div className="d-flex align-items-center mb-3">
                        <img src={r.avatar} alt={r.name} className="rounded-circle me-3" width={48} height={48} />
                        <div>
                          <strong>{r.name}</strong>
                          <div style={{ color: '#f7b731' }}>
                            {'★'.repeat(r.rating)}
                            {'☆'.repeat(5 - r.rating)}
                          </div>
                        </div>
                      </div>
                      <div className="fst-italic">"{r.text}"</div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </div>
  );
}

function ReviewSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h3 className="mb-4 text-center fw-bold">Học viên nói gì?</h3>
        <div className="d-flex justify-content-center">
          {/* Để review rộng bằng CourseCarousel, dùng maxWidth: 1140px */}
          <div style={{ maxWidth: 1140, width: '100%' }}>
            <ReviewCarouselWithSideControls />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;