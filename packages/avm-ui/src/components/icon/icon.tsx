// @ts-ignore
import {fontName} from './icon.config.json';

export type IconProps = {
  color?: '',
  fontSize: number
}
const classPrefix = `adm-icon`;

export class Icon extends Component {
  code = 59913;

  css() {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/${fontName}.ttf') format('truetype');}
        .${classPrefix} {font-family: ${fontName};}`;
  }


  render = props => {
    return <text _code={this.code} _name={this.constructor.name}
                 style={{...props}}
                 class={`${classPrefix} ${classPrefix}-font-icon-text`}>
      {String.fromCharCode(this.code)}
    </text>
  }
}
  
  
export class AaOutline extends Icon {code = 59905;}
export class AddCircleOutline extends Icon {code = 59906;}
export class AddOutline extends Icon {code = 59907;}
export class AddressBookFill extends Icon {code = 59908;}
export class AddSquareOutline extends Icon {code = 59909;}
export class AlipayCircleFill extends Icon {code = 59910;}
export class AlipaySquareFill extends Icon {code = 59911;}
export class AntOutline extends Icon {code = 59912;}
export class ApiCloudLogo extends Icon {code = 59913;}
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
export class DownlandOutline extends Icon {code = 59949;}
export class DownOutline extends Icon {code = 59950;}
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
export class PhonebookFill extends Icon {code = 60006;}
export class PhonebookOutline extends Icon {code = 60007;}
export class PhoneFill extends Icon {code = 60008;}
export class PictureOutline extends Icon {code = 60009;}
export class PicturesOutline extends Icon {code = 60010;}
export class PictureWrongOutline extends Icon {code = 60011;}
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
export class UiwAdobe extends Icon {code = 60045;}
export class UiwAlipay extends Icon {code = 60046;}
export class UiwAliwangwang extends Icon {code = 60047;}
export class UiwAndroidO extends Icon {code = 60048;}
export class UiwAndroid extends Icon {code = 60049;}
export class UiwApple extends Icon {code = 60050;}
export class UiwAppstoreO extends Icon {code = 60051;}
export class UiwAppstore extends Icon {code = 60052;}
export class UiwAreaChart extends Icon {code = 60053;}
export class UiwArrowDown extends Icon {code = 60054;}
export class UiwArrowLeft extends Icon {code = 60055;}
export class UiwArrowRight extends Icon {code = 60056;}
export class UiwArrowUp extends Icon {code = 60057;}
export class UiwArrowsAlt extends Icon {code = 60058;}
export class UiwAsterisk extends Icon {code = 60059;}
export class UiwBackward extends Icon {code = 60060;}
export class UiwBaidu extends Icon {code = 60061;}
export class UiwBarChart extends Icon {code = 60062;}
export class UiwBarcode extends Icon {code = 60063;}
export class UiwBell extends Icon {code = 60064;}
export class UiwCameraO extends Icon {code = 60065;}
export class UiwCaretDown extends Icon {code = 60066;}
export class UiwCaretLeft extends Icon {code = 60067;}
export class UiwCaretRight extends Icon {code = 60068;}
export class UiwCaretUp extends Icon {code = 60069;}
export class UiwCheckSquareO extends Icon {code = 60070;}
export class UiwCheckSquare extends Icon {code = 60071;}
export class UiwCheck extends Icon {code = 60072;}
export class UiwChrome extends Icon {code = 60073;}
export class UiwCircleCheckO extends Icon {code = 60074;}
export class UiwCircleCheck extends Icon {code = 60075;}
export class UiwCircleCloseO extends Icon {code = 60076;}
export class UiwCircleClose extends Icon {code = 60077;}
export class UiwCircleO extends Icon {code = 60078;}
export class UiwCloseSquareO extends Icon {code = 60079;}
export class UiwCloseSquare extends Icon {code = 60080;}
export class UiwClose extends Icon {code = 60081;}
export class UiwCloudDownloadO extends Icon {code = 60082;}
export class UiwCloudDownload extends Icon {code = 60083;}
export class UiwCloudUploadO extends Icon {code = 60084;}
export class UiwCloudUpload extends Icon {code = 60085;}
export class UiwCoffee extends Icon {code = 60086;}
export class UiwComponent extends Icon {code = 60087;}
export class UiwCopy extends Icon {code = 60088;}
export class UiwCopyright extends Icon {code = 60089;}
export class UiwCss3 extends Icon {code = 60090;}
export class UiwCut extends Icon {code = 60091;}
export class UiwDArrowLeft extends Icon {code = 60092;}
export class UiwDArrowRight extends Icon {code = 60093;}
export class UiwDCaret extends Icon {code = 60094;}
export class UiwDashboard extends Icon {code = 60095;}
export class UiwDate extends Icon {code = 60096;}
export class UiwDelete extends Icon {code = 60097;}
export class UiwDingding extends Icon {code = 60098;}
export class UiwDislikeO extends Icon {code = 60099;}
export class UiwDocument extends Icon {code = 60100;}
export class UiwDotChart extends Icon {code = 60101;}
export class UiwDownCircleO extends Icon {code = 60102;}
export class UiwDownCircle extends Icon {code = 60103;}
export class UiwDownSquareO extends Icon {code = 60104;}
export class UiwDownSquare extends Icon {code = 60105;}
export class UiwDown extends Icon {code = 60106;}
export class UiwDownload extends Icon {code = 60107;}
export class UiwEdit extends Icon {code = 60108;}
export class UiwEnter extends Icon {code = 60109;}
export class UiwEnvironmentO extends Icon {code = 60110;}
export class UiwEnvironment extends Icon {code = 60111;}
export class UiwEyeO extends Icon {code = 60112;}
export class UiwEye extends Icon {code = 60113;}
export class UiwFacebook extends Icon {code = 60114;}
export class UiwFileAdd extends Icon {code = 60115;}
export class UiwFileExcel extends Icon {code = 60116;}
export class UiwFileJpg extends Icon {code = 60117;}
export class UiwFilePdf extends Icon {code = 60118;}
export class UiwFileText extends Icon {code = 60119;}
export class UiwFileUnknown extends Icon {code = 60120;}
export class UiwFilter extends Icon {code = 60121;}
export class UiwFirefox extends Icon {code = 60122;}
export class UiwFolderAdd extends Icon {code = 60123;}
export class UiwFolderOpen extends Icon {code = 60124;}
export class UiwFolder extends Icon {code = 60125;}
export class UiwForward extends Icon {code = 60126;}
export class UiwFoursquare extends Icon {code = 60127;}
export class UiwFrownO extends Icon {code = 60128;}
export class UiwFrown extends Icon {code = 60129;}
export class UiwGithubO extends Icon {code = 60130;}
export class UiwGithub extends Icon {code = 60131;}
export class UiwGlobal extends Icon {code = 60132;}
export class UiwHeartOff extends Icon {code = 60133;}
export class UiwHeartOn extends Icon {code = 60134;}
export class UiwHome extends Icon {code = 60135;}
export class UiwHtml5 extends Icon {code = 60136;}
export class UiwIe extends Icon {code = 60137;}
export class UiwInbox extends Icon {code = 60138;}
export class UiwInformationO extends Icon {code = 60139;}
export class UiwInformation extends Icon {code = 60140;}
export class UiwLaptop extends Icon {code = 60141;}
export class UiwLeftCircleO extends Icon {code = 60142;}
export class UiwLeftCircle extends Icon {code = 60143;}
export class UiwLeftSquareO extends Icon {code = 60144;}
export class UiwLeftSquare extends Icon {code = 60145;}
export class UiwLeft extends Icon {code = 60146;}
export class UiwLikeO extends Icon {code = 60147;}
export class UiwLink extends Icon {code = 60148;}
export class UiwLinkedin extends Icon {code = 60149;}
export class UiwLinux extends Icon {code = 60150;}
export class UiwLoading extends Icon {code = 60151;}
export class UiwLock extends Icon {code = 60152;}
export class UiwLogin extends Icon {code = 60153;}
export class UiwLogout extends Icon {code = 60154;}
export class UiwMailO extends Icon {code = 60155;}
export class UiwMail extends Icon {code = 60156;}
export class UiwMan extends Icon {code = 60157;}
export class UiwMap extends Icon {code = 60158;}
export class UiwMehO extends Icon {code = 60159;}
export class UiwMeh extends Icon {code = 60160;}
export class UiwMenuFold extends Icon {code = 60161;}
export class UiwMenuUnfold extends Icon {code = 60162;}
export class UiwMenu extends Icon {code = 60163;}
export class UiwMessage extends Icon {code = 60164;}
export class UiwMinusCircleO extends Icon {code = 60165;}
export class UiwMinusCircle extends Icon {code = 60166;}
export class UiwMinusSquareO extends Icon {code = 60167;}
export class UiwMinusSquare extends Icon {code = 60168;}
export class UiwMinus extends Icon {code = 60169;}
export class UiwMobile extends Icon {code = 60170;}
export class UiwMore extends Icon {code = 60171;}
export class UiwNotification extends Icon {code = 60172;}
export class UiwOpera extends Icon {code = 60173;}
export class UiwPaperClip extends Icon {code = 60174;}
export class UiwPauseCircleO extends Icon {code = 60175;}
export class UiwPauseCircle extends Icon {code = 60176;}
export class UiwPause extends Icon {code = 60177;}
export class UiwPayCircleO extends Icon {code = 60178;}
export class UiwPay extends Icon {code = 60179;}
export class UiwPicasa extends Icon {code = 60180;}
export class UiwPicture extends Icon {code = 60181;}
export class UiwPieChart extends Icon {code = 60182;}
export class UiwPinterest extends Icon {code = 60183;}
export class UiwPlayCircleO extends Icon {code = 60184;}
export class UiwPlayCircle extends Icon {code = 60185;}
export class UiwPlusCircleO extends Icon {code = 60186;}
export class UiwPlusCircle extends Icon {code = 60187;}
export class UiwPlusSquareO extends Icon {code = 60188;}
export class UiwPlusSquare extends Icon {code = 60189;}
export class UiwPlus extends Icon {code = 60190;}
export class UiwPoweroff extends Icon {code = 60191;}
export class UiwPrinter extends Icon {code = 60192;}
export class UiwQq extends Icon {code = 60193;}
export class UiwQrcode extends Icon {code = 60194;}
export class UiwQuestionCircleO extends Icon {code = 60195;}
export class UiwQuestionCircle extends Icon {code = 60196;}
export class UiwReddit extends Icon {code = 60197;}
export class UiwReload extends Icon {code = 60198;}
export class UiwRightCircleO extends Icon {code = 60199;}
export class UiwRightCircle extends Icon {code = 60200;}
export class UiwRightSquareO extends Icon {code = 60201;}
export class UiwRightSquare extends Icon {code = 60202;}
export class UiwRight extends Icon {code = 60203;}
export class UiwRollback extends Icon {code = 60204;}
export class UiwSafari extends Icon {code = 60205;}
export class UiwSafety extends Icon {code = 60206;}
export class UiwSave extends Icon {code = 60207;}
export class UiwSearch extends Icon {code = 60208;}
export class UiwSettingO extends Icon {code = 60209;}
export class UiwSetting extends Icon {code = 60210;}
export class UiwShare extends Icon {code = 60211;}
export class UiwShoppingCart extends Icon {code = 60212;}
export class UiwShrink extends Icon {code = 60213;}
export class UiwSmileO extends Icon {code = 60214;}
export class UiwSmile extends Icon {code = 60215;}
export class UiwSquareO extends Icon {code = 60216;}
export class UiwStarOff extends Icon {code = 60217;}
export class UiwStarOn extends Icon {code = 60218;}
export class UiwStopO extends Icon {code = 60219;}
export class UiwStop extends Icon {code = 60220;}
export class UiwSwapLeft extends Icon {code = 60221;}
export class UiwSwapRight extends Icon {code = 60222;}
export class UiwSwap extends Icon {code = 60223;}
export class UiwTable extends Icon {code = 60224;}
export class UiwTagO extends Icon {code = 60225;}
export class UiwTag extends Icon {code = 60226;}
export class UiwTagsO extends Icon {code = 60227;}
export class UiwTags extends Icon {code = 60228;}
export class UiwTaobao extends Icon {code = 60229;}
export class UiwTimeO extends Icon {code = 60230;}
export class UiwTime extends Icon {code = 60231;}
export class UiwTwitter extends Icon {code = 60232;}
export class UiwUiw extends Icon {code = 60233;}
export class UiwUnlock extends Icon {code = 60234;}
export class UiwUpCircleO extends Icon {code = 60235;}
export class UiwUpCircle extends Icon {code = 60236;}
export class UiwUpSquareO extends Icon {code = 60237;}
export class UiwUpSquare extends Icon {code = 60238;}
export class UiwUp extends Icon {code = 60239;}
export class UiwUpload extends Icon {code = 60240;}
export class UiwUserAdd extends Icon {code = 60241;}
export class UiwUserDelete extends Icon {code = 60242;}
export class UiwUser extends Icon {code = 60243;}
export class UiwUsergroupAdd extends Icon {code = 60244;}
export class UiwUsergroupDelete extends Icon {code = 60245;}
export class UiwVerification extends Icon {code = 60246;}
export class UiwVerticleLeft extends Icon {code = 60247;}
export class UiwVerticleRight extends Icon {code = 60248;}
export class UiwVideoCamera extends Icon {code = 60249;}
export class UiwWarningO extends Icon {code = 60250;}
export class UiwWarning extends Icon {code = 60251;}
export class UiwWeibo extends Icon {code = 60252;}
export class UiwWeixin extends Icon {code = 60253;}
export class UiwWifi extends Icon {code = 60254;}
export class UiwWindows extends Icon {code = 60255;}
export class UiwWoman extends Icon {code = 60256;}
export class UiwZoomIn extends Icon {code = 60257;}
export class UiwZoomOut extends Icon {code = 60258;}
export class UndoOutline extends Icon {code = 60259;}
export class UnlockOutline extends Icon {code = 60260;}
export class UnorderedListOutline extends Icon {code = 60261;}
export class UpCircleOutline extends Icon {code = 60262;}
export class UploadOutline extends Icon {code = 60263;}
export class UpOutline extends Icon {code = 60264;}
export class UserAddOutline extends Icon {code = 60265;}
export class UserCircleOutline extends Icon {code = 60266;}
export class UserContactOutline extends Icon {code = 60267;}
export class UserOutline extends Icon {code = 60268;}
export class UserSetOutline extends Icon {code = 60269;}
export class VideoOutline extends Icon {code = 60270;}