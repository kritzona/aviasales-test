import EKLogotypeImageSource from '../assets/images/aviacompany-logotypes/EK.svg'
import EYLogotypeImageSource from '../assets/images/aviacompany-logotypes/EY.svg'
import FVLogotypeImageSource from '../assets/images/aviacompany-logotypes/FV.svg'
import MHLogotypeImageSource from '../assets/images/aviacompany-logotypes/MH.svg'
import S7LogotypeImageSource from '../assets/images/aviacompany-logotypes/S7.svg'
import SULogotypeImageSource from '../assets/images/aviacompany-logotypes/SU.svg'
import TGLogotypeImageSource from '../assets/images/aviacompany-logotypes/TG.svg'

export const generateAviacompanyLogotype = (carrier: string) => {
  switch (carrier) {
    case 'EK':
      return EKLogotypeImageSource
    case 'EY':
      return EYLogotypeImageSource
    case 'FV':
      return FVLogotypeImageSource
    case 'MH':
      return MHLogotypeImageSource
    case 'S7':
      return S7LogotypeImageSource
    case 'SU':
      return SULogotypeImageSource
    case 'TG':
      return TGLogotypeImageSource
    default:
      return S7LogotypeImageSource
  }
}
