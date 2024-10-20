import DeliveryType from "@/types/delivery";
import Client from "./Client";
import Company from "./Company";
import DeliveryPerson from "./DeliveryPerson";
import Map from "./Map";
import Product from "./Product";
import Vehicle from "./Vehicle";
import Comment from "./Comment";

export default function Body({ delivery }: { delivery: DeliveryType }) {
  return (
    <div className="w-full px-8 py-4 gap-4 h-full flex-1 flex flex-col">
      {/* Client and comment */}
      {delivery.client && (
        <div className="w-full flex flex-row gap-4 items-stretch">
          {/* Client */}
          <Client client={delivery.client} location={delivery.location} />

          {/* Map */}
          <Map delivery={delivery} />

          {/* Comment */}
          {delivery.comment && <Comment delivery={delivery} />}
        </div>
      )}

      {/* Product and company */}
      {delivery.product && (
        <div className="w-full flex flex-row gap-4">
          {/* Product */}
          <Product product={delivery.product} price={delivery.price} />

          {/* Company */}
          {delivery.product.company && (
            <Company company={delivery.product.company} />
          )}
        </div>
      )}

      {/* Deliver person and vehicle */}
      {delivery.delivery_person && (
        <div className="w-full flex flex-row gap-4">
          {/* Deliver person */}
          <DeliveryPerson
            deliveryPerson={delivery.delivery_person}
            commission={delivery.commission}
          />

          {/* Vehicle */}
          {delivery.vehicle && <Vehicle vehicle={delivery.vehicle} />}
        </div>
      )}
    </div>
  );
}
