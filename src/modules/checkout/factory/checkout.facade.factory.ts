
import ClientAdmFacadeFactory from "../../client-adm/factory/client-adm.facade.factory";
import ProductAdmFacadeFactory from "../../product-adm/factory/facade.factory";
import StoreCatalogFacadeFactory from "../../store-catalog/factory/facade.factory";
import CheckoutFacade from "../facade/checkout.facade";
import CheckoutFacadeInterface from "../facade/checkout.facade.interface";
import CheckoutGateway from "../gateway/checkout.gateway";
import PlaceOrderUseCase from "../usecase/place-order/place-order.usecase";

export default class CheckoutFacadeFactory {
  static create(): CheckoutFacadeInterface {

    let clientAdm = ClientAdmFacadeFactory.create()
    let productAdm = ProductAdmFacadeFactory.create()
    let catalog = StoreCatalogFacadeFactory.create()
    let repo: CheckoutGateway = null;

    let placeOrder = new PlaceOrderUseCase(clientAdm, productAdm, catalog, repo)


    return new CheckoutFacade(placeOrder);
  }
}