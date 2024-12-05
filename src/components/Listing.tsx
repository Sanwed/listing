import {OfferInterface} from "../interfaces/interfaces.ts";
import Offer from "./Offer.tsx";

interface ListingProps {
  items: OfferInterface[]
}

function Listing({items}: ListingProps) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Offer key={item.listing_id} item={item} />
      ))}
    </div>
  )
}

export default Listing
