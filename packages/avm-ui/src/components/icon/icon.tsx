// @ts-ignore
import {fontName} from './icon.config.json';
import {tag} from "../../utils/tag";

export type IconProps = {
  color?: '',
  fontSize: number
}
const classPrefix = `adm-icon`;

@tag('avm-icon')
export class Icon extends Component {
  code = 59913;

  css = () => {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/${fontName}.ttf') format('truetype');}
        .${classPrefix} {font-family: ${fontName};}`;
  }


  render = props => {
    const code = props.code || this.code;
    const name = props.name || this.constructor.name;

    return <text _code={code} _name={name} style={{...props}}
                 class={`${classPrefix} ${classPrefix}-font-icon-text`}>
      {String.fromCharCode(code)}
    </text>
  }
}
  
  
export class ApiCloudLogo extends Icon {code = 59905;}
export class AaOutline extends Icon {code = 59906;}
export class AddCircleOutline extends Icon {code = 59907;}
export class AddOutline extends Icon {code = 59908;}
export class AddSquareOutline extends Icon {code = 59909;}
export class AddressBookFill extends Icon {code = 59910;}
export class AlipayCircleFill extends Icon {code = 59911;}
export class AlipaySquareFill extends Icon {code = 59912;}
export class AntOutline extends Icon {code = 59913;}
export class AppOutline extends Icon {code = 59914;}
export class AppstoreOutline extends Icon {code = 59915;}
export class ArrowDownCircleOutline extends Icon {code = 59916;}
export class ArrowsAltOutline extends Icon {code = 59917;}
export class AudioFill extends Icon {code = 59918;}
export class AudioMutedOutline extends Icon {code = 59919;}
export class AudioOutline extends Icon {code = 59920;}
export class BankcardOutline extends Icon {code = 59921;}
export class BellMuteOutline extends Icon {code = 59922;}
export class BellOutline extends Icon {code = 59923;}
export class BillOutline extends Icon {code = 59924;}
export class CalculatorOutline extends Icon {code = 59925;}
export class CalendarOutline extends Icon {code = 59926;}
export class CameraOutline extends Icon {code = 59927;}
export class ChatAddOutline extends Icon {code = 59928;}
export class ChatCheckOutline extends Icon {code = 59929;}
export class ChatWrongOutline extends Icon {code = 59930;}
export class CheckCircleFill extends Icon {code = 59931;}
export class CheckCircleOutline extends Icon {code = 59932;}
export class CheckOutline extends Icon {code = 59933;}
export class CheckShieldFill extends Icon {code = 59934;}
export class CheckShieldOutline extends Icon {code = 59935;}
export class ClockCircleFill extends Icon {code = 59936;}
export class ClockCircleOutline extends Icon {code = 59937;}
export class CloseCircleFill extends Icon {code = 59938;}
export class CloseCircleOutline extends Icon {code = 59939;}
export class CloseOutline extends Icon {code = 59940;}
export class CloseShieldOutline extends Icon {code = 59941;}
export class CollectMoneyOutline extends Icon {code = 59942;}
export class CompassOutline extends Icon {code = 59943;}
export class ContentOutline extends Icon {code = 59944;}
export class CouponOutline extends Icon {code = 59945;}
export class DeleteOutline extends Icon {code = 59946;}
export class DownCircleOutline extends Icon {code = 59947;}
export class DownFill extends Icon {code = 59948;}
export class DownOutline extends Icon {code = 59949;}
export class DownlandOutline extends Icon {code = 59950;}
export class EditFill extends Icon {code = 59951;}
export class EditSFill extends Icon {code = 59952;}
export class EditSOutline extends Icon {code = 59953;}
export class EnvironmentOutline extends Icon {code = 59954;}
export class ExclamationCircleFill extends Icon {code = 59955;}
export class ExclamationCircleOutline extends Icon {code = 59956;}
export class ExclamationOutline extends Icon {code = 59957;}
export class ExclamationShieldFill extends Icon {code = 59958;}
export class ExclamationShieldOutline extends Icon {code = 59959;}
export class ExclamationTriangleOutline extends Icon {code = 59960;}
export class EyeFill extends Icon {code = 59961;}
export class EyeInvisibleFill extends Icon {code = 59962;}
export class EyeInvisibleOutline extends Icon {code = 59963;}
export class EyeOutline extends Icon {code = 59964;}
export class FaceRecognitionOutline extends Icon {code = 59965;}
export class FileOutline extends Icon {code = 59966;}
export class FileWrongOutline extends Icon {code = 59967;}
export class FillinOutline extends Icon {code = 59968;}
export class FilterOutline extends Icon {code = 59969;}
export class FingerdownOutline extends Icon {code = 59970;}
export class FireFill extends Icon {code = 59971;}
export class FlagOutline extends Icon {code = 59972;}
export class FolderOutline extends Icon {code = 59973;}
export class ForbidFill extends Icon {code = 59974;}
export class FrownFill extends Icon {code = 59975;}
export class FrownOutline extends Icon {code = 59976;}
export class GiftOutline extends Icon {code = 59977;}
export class GlobalOutline extends Icon {code = 59978;}
export class HandPayCircleOutline extends Icon {code = 59979;}
export class HeartFill extends Icon {code = 59980;}
export class HeartOutline extends Icon {code = 59981;}
export class HistogramOutline extends Icon {code = 59982;}
export class InformationCircleFill extends Icon {code = 59983;}
export class InformationCircleOutline extends Icon {code = 59984;}
export class KeyOutline extends Icon {code = 59985;}
export class KoubeiFill extends Icon {code = 59986;}
export class KoubeiOutline extends Icon {code = 59987;}
export class LeftOutline extends Icon {code = 59988;}
export class LikeOutline extends Icon {code = 59989;}
export class LinkOutline extends Icon {code = 59990;}
export class LocationFill extends Icon {code = 59991;}
export class LocationOutline extends Icon {code = 59992;}
export class LockFill extends Icon {code = 59993;}
export class LockOutline extends Icon {code = 59994;}
export class LoopOutline extends Icon {code = 59995;}
export class MailFill extends Icon {code = 59996;}
export class MailOpenOutline extends Icon {code = 59997;}
export class MailOutline extends Icon {code = 59998;}
export class MessageFill extends Icon {code = 59999;}
export class MessageOutline extends Icon {code = 60000;}
export class MinusCircleOutline extends Icon {code = 60001;}
export class MinusOutline extends Icon {code = 60002;}
export class MoreOutline extends Icon {code = 60003;}
export class MovieOutline extends Icon {code = 60004;}
export class PayCircleOutline extends Icon {code = 60005;}
export class PhoneFill extends Icon {code = 60006;}
export class PhonebookFill extends Icon {code = 60007;}
export class PhonebookOutline extends Icon {code = 60008;}
export class PictureOutline extends Icon {code = 60009;}
export class PictureWrongOutline extends Icon {code = 60010;}
export class PicturesOutline extends Icon {code = 60011;}
export class PieOutline extends Icon {code = 60012;}
export class PlayOutline extends Icon {code = 60013;}
export class QuestionCircleFill extends Icon {code = 60014;}
export class QuestionCircleOutline extends Icon {code = 60015;}
export class ReceiptOutline extends Icon {code = 60016;}
export class ReceivePaymentOutline extends Icon {code = 60017;}
export class RedoOutline extends Icon {code = 60018;}
export class RightOutline extends Icon {code = 60019;}
export class ScanCodeOutline extends Icon {code = 60020;}
export class ScanningFaceOutline extends Icon {code = 60021;}
export class ScanningOutline extends Icon {code = 60022;}
export class SearchOutline extends Icon {code = 60023;}
export class SendOutline extends Icon {code = 60024;}
export class SetOutline extends Icon {code = 60025;}
export class ShopbagOutline extends Icon {code = 60026;}
export class ShrinkOutline extends Icon {code = 60027;}
export class SmileFill extends Icon {code = 60028;}
export class SmileOutline extends Icon {code = 60029;}
export class SoundMuteFill extends Icon {code = 60030;}
export class SoundMuteOutline extends Icon {code = 60031;}
export class SoundOutline extends Icon {code = 60032;}
export class StarFill extends Icon {code = 60033;}
export class StarOutline extends Icon {code = 60034;}
export class StopOutline extends Icon {code = 60035;}
export class SystemQRcodeOutline extends Icon {code = 60036;}
export class TagOutline extends Icon {code = 60037;}
export class TeamFill extends Icon {code = 60038;}
export class TeamOutline extends Icon {code = 60039;}
export class TextDeletionOutline extends Icon {code = 60040;}
export class TextOutline extends Icon {code = 60041;}
export class TransportQRcodeOutline extends Icon {code = 60042;}
export class TravelOutline extends Icon {code = 60043;}
export class TruckOutline extends Icon {code = 60044;}
export class UndoOutline extends Icon {code = 60045;}
export class UnlockOutline extends Icon {code = 60046;}
export class UnorderedListOutline extends Icon {code = 60047;}
export class UpCircleOutline extends Icon {code = 60048;}
export class UpOutline extends Icon {code = 60049;}
export class UploadOutline extends Icon {code = 60050;}
export class UserAddOutline extends Icon {code = 60051;}
export class UserCircleOutline extends Icon {code = 60052;}
export class UserContactOutline extends Icon {code = 60053;}
export class UserOutline extends Icon {code = 60054;}
export class UserSetOutline extends Icon {code = 60055;}
export class VideoOutline extends Icon {code = 60056;}
export class UiwInbox extends Icon {code = 60057;}