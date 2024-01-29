import FindInvoiceUseCase from '../usecase/find-invoice/find-invoice.usecase'

import GenerateInvoiceUseCase from '../usecase/generate-invoice/generate-invoice.usecase'
import InvoiceFacadeInterface, {
  FindInvoiceFacadeInputDTO,
  FindInvoiceFacadeOutputDTO,
  GenerateInvoiceFacadeInputDto,
  GenerateInvoiceFacadeOutputDto,
} from './invoice.facade.interface'

type InvoiceFacadeProps = {
  generateInvoiceUseCase: GenerateInvoiceUseCase
  findInvoiceUseCase: FindInvoiceUseCase
}

export default class InvoiceFacade implements InvoiceFacadeInterface {
  private _generateInvoiceUseCase: GenerateInvoiceUseCase
  private _findInvoiceUseCase: FindInvoiceUseCase

  constructor(props: InvoiceFacadeProps) {
    this._generateInvoiceUseCase = props.generateInvoiceUseCase
    this._findInvoiceUseCase = props.findInvoiceUseCase
  }

  generateInvoice(input: GenerateInvoiceFacadeInputDto): Promise<GenerateInvoiceFacadeOutputDto> {
    return this._generateInvoiceUseCase.execute(input)
  }

  findInvoice(input: FindInvoiceFacadeInputDTO): Promise<FindInvoiceFacadeOutputDTO> {
    return this._findInvoiceUseCase.execute(input)
  }
}
