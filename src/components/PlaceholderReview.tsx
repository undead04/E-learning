import Placeholder from 'react-bootstrap/Placeholder';

function PlaceholderReview() {
  return (
    <div className="mb-3">
      <div className="bg-white p-4 rounded shadow-sm h-100">
        <div className="d-flex mb-3 align-items-center">
          <Placeholder
            as="div"
            animation="glow"
            className="rounded-circle me-3"
            style={{ width: 48, height: 48, backgroundColor: '#ddd' }}
          />
          
          <div className="flex-grow-1">
            <Placeholder as="p" animation="glow" className="mb-2">
              <Placeholder xs={5} />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-2">
              <Placeholder xs={3} />
            </Placeholder>
          </div>
        </div>

        <Placeholder as="p" animation="glow">
          <Placeholder xs={11} style={{ height: 30 }} />
        </Placeholder>
      </div>
    </div>
  );
}

export default PlaceholderReview;
