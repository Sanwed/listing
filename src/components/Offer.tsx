import {OfferInterface} from "../interfaces/interfaces.ts";

interface OfferProps {
  item: OfferInterface
}

function Offer({item}: OfferProps) {
  if (item.error_messages?.length) {
    console.error(item.error_messages[0])
    return;
  }

  const title = item.title.length > 50
    ? `${item.title.slice(0, 50)}...`
    : item.title;

  let total_price: string;
  switch (item.currency_code) {
    case 'USD':
      total_price = `$${item.price}`
      break
    case 'EUR':
      total_price = `€${item.price}`
      break;
    default:
      total_price = `${item.price} ${item.currency_code}`
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{total_price}</p>
        <p className={`item-quantity ${
          item.quantity < 30 ? 'level-high'
            : item.quantity < 20
              ? 'level-medium'
              : item.quantity < 10
                ? 'level-low'
                : ''
        }`}
        >
          {item.quantity} left
        </p>
      </div>
    </div>
  )
}

export default Offer
