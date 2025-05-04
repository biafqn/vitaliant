export default function Accordion({ items, parentId }) {
    return (
      <div className="accordion" id={parentId}>
        {items.map((item) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded="false"
                aria-controls={item.id}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={item.id}
              className="accordion-collapse collapse"
              data-bs-parent={`#${parentId}`}
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }